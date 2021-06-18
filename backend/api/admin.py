from .models import (
    ExecutiveEmployee,
    Event, Project, News,
    NonExecutiveEmployee
)

from django.contrib import admin

model_list = [
    Event, Project, News,
    ExecutiveEmployee, NonExecutiveEmployee
]

admin.site.register(model_or_iterable=model_list)
