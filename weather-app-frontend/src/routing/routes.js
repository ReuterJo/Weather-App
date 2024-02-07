import axios from "axios";

const loadCities = async (setCities) => {
    axios
    .get("http://localhost:8000/api/locations/")
    .then(res => setCities(res.data))
    .catch(err => console.log(err));
  };

  export {loadCities}