import { Input } from "@mui/material";

function initMap() {
  const center = { lat: 50.064192, lng: -130.605469 };
  // Create a bounding box with sides ~10km away from the center point
  const defaultBounds = {
    north: center.lat + 0.1,
    south: center.lat - 0.1,
    east: center.lng + 0.1,
    west: center.lng - 0.1,
  };
  const input = document.getElementById("google-place-autocomplete-cities");
  const options = {
    bounds: defaultBounds,
    fields: ["address_components", "name"],
    strictBounds: false,
    types: ["(cities)"],
  };
  const autocomplete = new window.google.maps.places.Autocomplete(input, options);
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log(place);
  });
}

const GooglePlaces = () => {
  // call initMap when the page is loaded
  window.onload = initMap;

  return (
    <Input id="google-place-autocomplete-cities" placeholder="Search" />
  );
}

export default GooglePlaces;