# syntax=docker/dockerfile:1
FROM python:3.9

WORKDIR /home/backend

ADD requirements.txt /home/backend/
RUN pip install --no-cache-dir -r requirements.txt

ADD . /home/backend

CMD python manage.py runserver 0.0.0.0:8000

EXPOSE 8000