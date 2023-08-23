import { Rating, Star } from '@smastrom/react-rating'
import s from './reviews.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import emailjs from '@emailjs/browser'

const Reviews = ({ user, loaded, recipe, setActiveLoginModal, fetch }) => {
	const PF = process.env.REACT_APP_BASE_URL

	const [activeReview, setActiveReview] = useState(false)
	const [rating, setRating] = useState(null)
	const [activeInput, setActiveInput] = useState(false)
	const [review, setReview] = useState('')

	const [activeReportMenu, setActiveReportMenu] = useState('')

	const inputHandler = e => {
		e ? setActiveInput(true) : setActiveInput(false)
		setReview(e)
	}

	const ratingStars = {
		itemShapes: Star,
		activeFillColor: '#e16120',
		inactiveFillColor: '#f1f1f1',
	}

	const createReview = async () => {
		await axios
			.post(`/reviews/postReview/${user._id}/${recipe._id}`, {
				rating,
				text: review,
			})
			.then(r => {
				fetch()
				setActiveReview(false)
				setActiveInput(false)
				setRating(null)
				setReview('')
			})
	}

	const handleLike = async reviewId => {
		if (user) {
			await axios
				.put(`/reviews/like/${user._id}`, {
					reviewId,
				})
				.then(r => {
					fetch()
				})
		} else {
			setActiveLoginModal(true)
		}
	}

	const handleReport = async revData => {
		const { message, userId, reviewId } = revData

		const complaint = {
			name: user.name,
			complainantEmail: user.mail,
			recipeId: recipe._id,
			reviewId,
			userId: userId,
			message,
		}

		emailjs.send('service_h7toabu', 'template_rap0pxo', complaint, 'dQJDPMl6oL-bM1aSW').then(() => {
			setActiveReportMenu('')
			alert('Your complaint was successfully sent')
		})
	}

	return (
		<div className={s.reviews} onClick={() => setActiveReportMenu(false)}>
			<div className={s.header}>
				<h1 className={s.title}>Reviews ({recipe.reviews?.[0]?._id ? recipe.reviews.length : 0})</h1>
				<Rating className={s.stars} readOnly={true} value={recipe.rating || 0} itemStyles={ratingStars} />
			</div>
			<div className={s.write} onClick={() => (user ? setActiveReview(true) : setActiveLoginModal(true))}>
				<img
					className={s.avatar}
					src={user?.avatar ? `${PF}images/avatars/${user?.avatar}` : `${PF}images/avatars/no-avatar.webp`}
					alt="avatarReview"
				/>
				<div className={s.writeBox}>
					{activeReview ? (
						<>
							<h1 className={s.username}>{user?.name}</h1>
							<Rating className={s.stars} value={rating} onChange={setRating} itemStyles={ratingStars} />
						</>
					) : null}
					<textarea
						onChange={e => inputHandler(e.target.value)}
						value={review}
						placeholder="Write your review or comment here"
						style={{ minHeight: activeInput && '164px' }}
						className={activeReview ? `${s.input} ${s.active}` : s.input}
						type="text"></textarea>
					<div
						onClick={e => e.stopPropagation()}
						className={activeReview ? `${s.buttons} ${s.active}` : s.buttons}>
						<button
							onClick={() => review.trim().length !== 0 && createReview()}
							className={s.button__submit}>
							submit
						</button>
						<button
							onClick={() => {
								setActiveInput(false)
								setReview('')
								setActiveReview(false)
								setRating(null)
							}}
							className={s.button__cancel}>
							cancel
						</button>
					</div>
				</div>
			</div>
			<div className={s.reviewList}>
				{recipe?.reviews?.[0]._id
					? recipe?.reviews?.map(review => (
							<div key={review?._id} className={s.reviewList__item}>
								<div className={s.details}>
									<Link
										title={review?.user.name}
										to={`/profile/${review?.user.name}-${review?.user._id}`}>
										<img
											className={s.avatar}
											src={
												review?.user.avatar
													? `${PF}images/avatars/${review?.user.avatar}`
													: `${PF}images/avatars/no-avatar.webp`
											}
											alt="avatarReview"
										/>
									</Link>
									<div className={s.review__content}>
										<div className={s.review__header}>
											<Link
												title={review?.user.name}
												to={`/profile/${review?.user.name}-${review?.user._id}`}>
												<p className={s.review__user}>{review?.user.name}</p>
											</Link>
											<h1 className={s.review__posted}>{moment(review?.createdAt).fromNow()}</h1>
										</div>
										<Rating
											className={s.stars}
											readOnly={true}
											value={review?.rating}
											itemStyles={ratingStars}
										/>
										<p className={s.review__text}>{review?.text}</p>
									</div>
								</div>
								<div className={s.actions} onClick={e => e.stopPropagation()}>
									<div className={s.actions__icons}>
										<img
											className={s.action__icon}
											onClick={() =>
												user
													? setActiveReportMenu(
															activeReportMenu === review?._id ? '' : review?._id
													  )
													: setActiveLoginModal(true)
											}
											src={`${PF}images/icons/recipes/flag.svg`}
											alt="reportIcon"
										/>
										<img
											className={s.action__icon}
											onClick={() => handleLike(review._id)}
											src={`${PF}images/icons/recipes/${
												review.likes.includes(user?._id) ? 'likeActive.svg' : 'like.svg'
											}`}
											alt="likeIcon"
										/>
										{review.likes.length > 0 ? (
											<p className={s.likesCount}>{review.likes.length}</p>
										) : null}
									</div>
									<ul className={activeReportMenu === review?._id ? `${s.menu} ${s.active}` : s.menu}>
										<li
											className={s.menu__item}
											onClick={() =>
												handleReport({
													message: 'SPAM (not the meat)',
													userId: review.user._id,
													reviewId: review._id,
												})
											}>
											SPAM (not the meat)
										</li>
										<li
											className={s.menu__item}
											onClick={() =>
												handleReport({
													message: 'Off the menu (irrelevant)',
													userId: review.user._id,
													reviewId: review._id,
												})
											}>
											Off the menu (irrelevant)
										</li>
										<li
											className={s.menu__item}
											onClick={() =>
												handleReport({
													message: 'Tasteless (inappropriate)',
													userId: review.user._id,
													reviewId: review._id,
												})
											}>
											Tasteless (inappropriate)
										</li>
									</ul>
								</div>
							</div>
					  ))
					: null}
			</div>
		</div>
	)
}

export default Reviews
