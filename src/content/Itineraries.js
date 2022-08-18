import { useEffect, useState } from 'react';

const Itineraries = () => {
  const [products, setProducts] = useState([]);

  const getItineraries = async () => {
    try {
      const response = await fetch(`https://hmou3ha9b1.execute-api.us-east-1.amazonaws.com/v1/planning/getallitineraries`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setProducts(data)
      return data
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getItineraries();
  } , []);


  // map the data to a list of components
  return (
    products.map((itinerary) => {
      return (
        <div className="itinerary-card">
          <div className="itinerary-card-image">
            <img src={itinerary.image_url} alt={itinerary.title} />
          </div>
          <div className="itinerary-card-content">
            <h3>{itinerary.title}</h3>
            <p>{itinerary.description}</p>
            <p>{itinerary.price}</p>
          </div>
        </div>
      )
    })
  )

}

export default Itineraries;