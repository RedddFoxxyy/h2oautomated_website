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

@csrf_exempt
def send_input(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        input_value = data.get('input')
        
        # Here, implement the logic to send the input to the other device
        # For example:
        send_to_device(input_value)
        
        return JsonResponse({'status': 'success', 'message': f'Input {input_value} sent to device'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})
