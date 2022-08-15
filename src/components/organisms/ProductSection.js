import ProductPreview from '../molecules/ProductPreview';
import AppPreviews from '../../content/AppPreviews';


const ProductSection = () => {
  return (
    <>
      {AppPreviews.map((content, index) => {
        return (
          <ProductPreview key={index} content={content} />
        )
      })}
    </>
  )
}

export default ProductSection;