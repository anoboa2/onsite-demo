import { Box } from '@mui/material';

import ProductPreview from '../molecules/ProductPreview';
import AppPreviews from '../../content/AppPreviews';


const ProductSection = () => {
  return (
    <Box sx={{ display: 'block', margin: 'auto' }}>
    {AppPreviews.map((content, index) => (
      <ProductPreview key={index} content={content} />
    ))}
    </Box>
  )
}

export default ProductSection;