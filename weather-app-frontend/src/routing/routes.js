import axios from "axios";

const loadUserProfile = async (user_id, setUserProfile) => {
  axios
  .get(`http://localhost:8000/dashboard/${user_id}`)
  .then(res => {
    if (res.status === 200) {
      axios
      .get(`http://localhost:8000/api/userIds/${res.data.id}`)
      .then(res => setUserProfile(res.data))
      .catch(err => console.log(err));
    }
  })
  .catch(err => {
    if (err.response.status === 404) {
      axios
      .post("http://localhost:8000/api/userIds/", {
        userId: user_id
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    }
    else {
      console.log(err)
    }
  });
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

  export {loadUserProfile, loadCity, deleteCity}