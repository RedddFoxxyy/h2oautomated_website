"""
ASGI config for h2oautomated_website project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import h2oautomated_website.routing  # Import your routing configuration

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'h2oautomated_website.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            h2oautomated_website.routing.websocket_urlpatterns
        )
    ),
})

app = application
