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

# This should be a secure, random string. In a real-world scenario, use an environment variable.
API_TOKEN = "26d038c520706f9ab6bd043f32336cb9"

def token_required(view_func):
    def wrapped_view(request, *args, **kwargs):
        token = request.headers.get('Authorization')
        if token == f"Bearer {API_TOKEN}":
            return view_func(request, *args, **kwargs)
        else:
            return JsonResponse({'error': 'Unauthorized'}, status=401)
    return wrapped_view

@csrf_exempt
@require_http_methods(["POST"])
def send_input(request):
    data = json.loads(request.body)
    input_value = data.get('input')
    if input_value:
        command_queue.add_command(input_value)
        return JsonResponse({'status': 'success', 'message': f'Input {input_value} queued for device'})
    return JsonResponse({'status': 'error', 'message': 'No input provided'}, status=400)

@token_required
@require_http_methods(["GET"])
def get_commands(request):
    commands = command_queue.get_commands()
    return JsonResponse({'commands': commands})
