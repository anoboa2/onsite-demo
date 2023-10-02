import { useEffect, useState } from 'react';
import { Backdrop, Button, Box, Modal, Typography , Card, CardContent, CardMedia, CardActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import { ReactPhotoCollage } from 'react-photo-collage';


const ItineraryCard = ({ content, firstName }) => {
  const { title, price, description, prod_id, images, author } = content
  const [ image, setImage ] = useState(images?.static_image);
  const [ open, setOpen ] = useState(false);

  useEffect(() => {
    setImage(images?.static_image);
  }, []);

  const handleCheckout = prod_id => event => {
    event.preventDefault();
    let url = "https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/product/createcheckoutsession"
    let body = {
      "product_id": prod_id,
      "profile_id": author
    }
    fetch(url, {
      "method": "POST",
      "body": JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
      window.location.href = data.redirect_url
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleMouseEnter = () => {
    setImage(images?.hover_image);
  }

  const handleMouseLeave = () => {  
    setImage(images?.static_image);
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component='img'
        alt='itinerary image'
        src={image}
        title={title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          
          height: 400,
          objectFit: 'cover', 
        }}
      />

      <CardContent >
        <Typography variant="h6">{title}.</Typography><br/> 
        <Typography fontWeight={300} variant="body1">{description}.</Typography><br/> 
        <Typography fontWeight={300} fontStyle= "italic" variant="body1">Your itinerary will be emailed to you after checkout.</Typography><br/> 
        <Typography variant="body1">Price: ${price/100}</Typography>
      </CardContent>
        <CardActions >
          <Button variant="text" color="primary" onClick={() => setOpen(true)} >Preview Itinerary</Button>
          <Button variant="contained" color='primary' onClick={handleCheckout(prod_id)} >Buy Now</Button>
        </CardActions>
        <Modal
        arial-labelledby={`${title}-modal-title`}
        arial-describedby={`${title}-modal-description`}
        open={open}
        onClose={() => setOpen(false)}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        sx={{
          zIndex: 999
        }}
       >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -45%)', height:{ sm:690}, width:{xs:350, sm:350}, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" id={`${title}-modal-title`}>
            {title}
          </Typography>
          <Typography variant="h6" fontWeight={300} lineHeight={1.2} sx={{ mt:{xs: 2 , sm: 2} , mb:{xs: 2 , sm: 2}}}>
          Below you’ll find a small preview of {firstName}'s curated itinerary with tips and plans. Inclusive of hotels, restaurants, activities and transportation. 
          You can use these as a reference for your own travel plans.To unlock the full itinerary, click buy now at the bottom.
          </Typography>
          <Button onClick={() => setOpen(false)}
          sx={{
            width: 50,
            height: 50,
            color: 'primary.main',
            position: 'absolute',
            right: '5px',
            top: '5px',
        }}
          >
            <CloseIcon />
          </Button>
          {/* <ReactPhotoCollage 
            width='350px'
            height={["215px", "215px"]} layout={[2, 2]} 
            photos={[{source: images?.preview1}, {source: images?.preview2}, {source: images?.preview3}]}
            showNumOfRemainingPhotos={true}
          /> */}
          <Button variant="contained" onClick={handleCheckout(prod_id)} sx={{ backgroundColor: "#00aaca", padding: "10px 55px", marginTop: "27px", borderRadius: "10px", color: "white", fontSize: "15px"}}>
            Buy Now
          </Button>
        </Box>
      </Modal>
    </Card>

  );
}

export default ItineraryCard;

