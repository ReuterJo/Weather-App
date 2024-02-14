#https://pythonspeed.com/articles/base-image-python-docker-images/
#https://testdriven.io/blog/fastapi-docker-traefik/

FROM python:3.11-slim-bookworm

WORKDIR /app

COPY ./requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./app /app