
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_angular_demo.settings')
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "settings.localdb")

application = get_wsgi_application()
