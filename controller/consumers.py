import json
from channels.generic.websocket import AsyncWebsocketConsumer
import requests

class CommandConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

    async def disconnect(self, close_code):
        pass

    async def receive(self, text_data):
        data = json.loads(text_data)
        command = data['command']

        if command == 'up':
            await self.send_command_to_pi('forward')

    async def send_command_to_pi(self, command):
        # Send HTTP request to Raspberry Pi
        requests.get(f'http://<raspberry_pi_ip>:<port>/command/{command}')
