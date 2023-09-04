import s from './modal.module.css'

const Modal = ({ sent }) => {
	return (
		<div className={sent ? `${s.modal} ${s.active}` : s.modal}>
			<div className={s.content}>
				<h1 className={s.title}>Your message has been sent</h1>
			</div>
		</div>
	)
}

export default Modal
