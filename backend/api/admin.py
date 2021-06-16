from django.contrib import admin
from . import models

model_list = [
    models.Event, models.Project, models.News,
    models.ExecutiveEmployee, models.NonExecutiveEmployee
]

admin.site.register(model_or_iterable=model_list)
