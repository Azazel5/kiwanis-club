from .settings import STATIC_URL
from storages.backends.s3boto3 import S3Boto3Storage


class StaticStorage(S3Boto3Storage):
    location = STATIC_URL
    file_overwrite = True
