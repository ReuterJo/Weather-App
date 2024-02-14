import axios from "axios";
const BACKEND = "http://localhost:8000";
const API = "http://localhost:5000";

const loadUserProfileAndCities = async (user_id, setUserProfile, setCities) => {
  axios
  .get(`${BACKEND}/dashboard/${user_id}`)
  .then(res => {
    if (res.status === 200) {
      axios
      .get(`${BACKEND}/api/userIds/${res.data.id}`)
      .then(res => {
        setUserProfile(res.data);
        loadCities(setCities, res.data);
      })
      .catch(err => console.log(err));
    }
  })
  .catch(err => {
    if (err.response.status === 404) {
      axios
      .post(`${BACKEND}/api/userIds/`, {
        userId: user_id,
        cities: []
      })
      .then(res => {
        setUserProfile(res.data);
        loadCities(setCities, res.data);
      })
      .catch(err => console.log(err));
    }
    else {
      console.log(err)
    }
  });
};

const loadCities = async (setCities, userProfile) => {
  axios
  .get(`${BACKEND}/api/cities/`)
  .then(res => {
    const filtered_cities = res.data.filter((city) => !userProfile.cities.includes(city.id));
    setCities(filtered_cities);
  })
  .catch(err => console.log(err));
};

const loadCity = async (city_id, setCity) => {
  axios
  .get(`${BACKEND}/api/cities/${city_id}`)
  .then(res => {
    const city = res.data;
    loadCityWeather(city, setCity);
  })
  .catch(err => console.log(err));
};

const loadCityWeather = async (city, setCity) => {
  axios
  .get(`${API}/0.1/current?city=${city.name}&state=${city.state}`)
  .then(res => {
    const cityAndWeather = {
      name: city.name,
      state: city.state,
      country: city.country,
      temp: res.data.main.temp,
      feels_like: res.data.main.feels_like,
      temp_min: res.data.main.temp_min,
      temp_max: res.data.main.temp_max,
      description: res.data.weather[0].main
    };
    console.log(cityAndWeather)
    setCity(cityAndWeather);
  })
  .catch(err => console.log(err));
}

const addCity = async (city_id, userProfile, setUserProfile, setCities) => {
  const newCities = userProfile.cities;
  newCities.push(city_id);
  axios
  .put(`${BACKEND}/api/userIds/${userProfile.id}/`, {
    ...userProfile,
    cities: newCities,
  })
  .then(res => {
    setUserProfile(res.data);
    loadCities(setCities, res.data);
  })
  .catch(err => console.log(err))
};

const deleteCity = async (city_id, userProfile, setUserProfile, setCities) => {
  axios
  .put(`${BACKEND}/api/userIds/${userProfile.id}/`, {
    ...userProfile,
    cities: userProfile.cities.filter((city) => city !== city_id),
  })
  .then(res => {
    setUserProfile(res.data);
    loadCities(setCities, res.data);
  })
  .catch(err => console.log(err))
};

export {loadUserProfileAndCities, loadCity, addCity, deleteCity}