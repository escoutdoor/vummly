import ProductDetails from './productDetails/ProductDetails'
import ProductSlider from './productSlider/ProductSlider'
import s from './product.module.css'

const Product = () => {
	return (
		<div className={s.product}>
			<ProductSlider />
			<ProductDetails />
		</div>
	)
}

export default Product
