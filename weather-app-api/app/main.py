from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os

api_key = os.environ['OWM_KEY']
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/0.1/current")
def get_current_weather(city: str, state: str):
    """
    Given a valid city and state(required), get latitude/longitude from a public api and return that current weather.
    example url http://0.0.0.0:5000/0.1/current?city=louisville&state=ky
    :param city:
    :param state: Two letter state code
    :return: json payload
    """

    geocode = httpx.get(f"http://api.openweathermap.org/geo/1.0/direct?q={city},{state},US&appid={api_key}")
    current_weather = httpx.get(f"https://api.openweathermap.org/data/2.5/weather?lat={geocode.json()[0]['lat']}&lon={geocode.json()[0]['lon']}&appid={api_key}")
    return current_weather.json()
