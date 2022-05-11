import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: "0599ccaa9d344edb97b6e1cd16caad1c",
        q: `${lat}+${lng}`,
        language: "en"
      }
    }
  );

  return response;
}

export default getAddressOfCoordinates;
