import axios from "axios";

const loadUser = async (user_id, setCities) => {
    axios
    .get(`http://localhost:8000/dashboard/${user_id}`)
    .then(res => {  
      if (res.status === 404) {
        axios
        .post("http://localhost:8000/api/userIds", {
          userId: user_id
        })
        .catch(err => console.log(err));
        setCities([]);
      }
      if (res.status === 200) {
        axios
        .get(`http://localhost:8000/api/userIds/${res.data.id}`)
        .then(res => setCities(res.data.cities))
        .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
  };

const loadCity = async (city_id, setCity) => {
  axios
  .get(`http://localhost:8000/api/cities/${city_id}`)
  .then(res => setCity(res.data))
  .catch(err => console.log(err));
};

const deleteCity = async (city_id, user_id, setCities) => {
  axios
  .get(`http://localhost:8000/api/userIds/${user_id}`)
  .catch(err => console.log(err));
};

  export {loadUser, loadCity, deleteCity}