import { Box } from '@mui/material';

import ProductPreview from '../molecules/ProductPreview';
import AppPreviews from '../../content/AppPreviews';


const ProductSection = () => {
  return (
    <Box sx={{ display: 'block', margin: 'auto', maxWidth: { xs: '90%', sm: '80%', md: '70%'} }}>
      {AppPreviews.map((content, index) => {
        return (
          <ProductPreview key={index} content={content} />
        )
      })}
    </Box>
  )
}

export default ProductSection;