from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import paho.mqtt.client as mqtt

# Create your views here.
def home(request):
    return render(request, 'home_page/home.html')

def controller(request):
    return render(request, 'controller_main/controller.html')

# MQTT configuration
MQTT_BROKER = "broker.hivemq.com"  # Replace with your broker address
MQTT_PORT = 1883
MQTT_TOPIC = "raspberrypi/commands"  # Choose a unique topic

def on_connect(client, userdata, flags, rc):
    print(f"Connected with result code {rc}")

def on_publish(client, userdata, mid):
    print(f"Message {mid} published")

# Create a client instance
client = mqtt.Client()
client.on_connect = on_connect
client.on_publish = on_publish

# Connect to the broker
client.connect(MQTT_BROKER, MQTT_PORT, 60)

# Start the loop
client.loop_start()

def send_to_device(input_value):
    message = json.dumps({"command": input_value})
    result = client.publish(MQTT_TOPIC, message)
    status = result[0]
    if status == 0:
        print(f"Message sent to topic {MQTT_TOPIC}")
    else:
        print(f"Failed to send message to topic {MQTT_TOPIC}")

@csrf_exempt
def send_input(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        input_value = data.get('input')
        
        send_to_device(input_value)
        
        return JsonResponse({'status': 'success', 'message': f'Input {input_value} sent to device'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})
