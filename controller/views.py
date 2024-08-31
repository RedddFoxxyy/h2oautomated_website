from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
import requests
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .commands import command_queue

# Create your views here.
def home(request):
    return render(request, 'home_page/home.html')

def controller(request):
    return render(request, 'controller_main/controller.html')

@csrf_exempt
@require_http_methods(["POST"])
def send_input(request):
    data = json.loads(request.body)
    input_value = data.get('input')
    if input_value:
        command_queue.add_command(input_value)
        return JsonResponse({'status': 'success', 'message': f'Input {input_value} queued for device'})
    return JsonResponse({'status': 'error', 'message': 'No input provided'}, status=400)

@require_http_methods(["GET"])
def get_commands(request):
    commands = command_queue.get_commands()
    return JsonResponse({'commands': commands})
