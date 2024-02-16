from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from forecast import forecastAPI

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(forecastAPI.update_forecast, 'interval', minutes=5)
    scheduler.start()