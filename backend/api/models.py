from django.db import models

# Abstract Classes


class EmployeeBase(models.Model):
    employee_image = models.ImageField(upload_to='about_us')
    employee_name = models.CharField(max_length=255)
    employee_position = models.CharField(max_length=255)
    employee_email = models.EmailField(max_length=255, blank=True)

    class Meta:
        abstract = True

# Concrete Classes


class Event(models.Model):
    event_location_latitude = models.FloatField()
    event_location_longitude = models.FloatField()
    event_name = models.CharField(max_length=255)
    event_date = models.DateField()
    event_place = models.CharField(max_length=255)
    event_image = models.ImageField(upload_to='events')

    def __str__(self):
        return self.event_name


class Project(models.Model):
    project_title = models.CharField(max_length=100)
    project_date = models.DateField()
    project_image = models.ImageField(upload_to='projects')
    project_description = models.TextField()

    def __str__(self):
        return self.project_title


class News(models.Model):
    news_image = models.ImageField(upload_to='news')
    news_genre = models.CharField(max_length=100)
    news_title = models.CharField(max_length=255)
    news_description = models.TextField()

    def __str__(self):
        return self.news_title

    class Meta:
        verbose_name_plural = "News"


class ExecutiveEmployee(EmployeeBase):
    def __str__(self):
        return self.employee_name


class NonExecutiveEmployee(EmployeeBase):
    def __str__(self):
        return self.employee_name


class HomeGallery(models.Model):
    description = models.CharField(max_length=255)
    original = models.ImageField(upload_to='gallery')

    class Meta:
        verbose_name_plural = "HomeGallery"
