from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home_page/home.html')

def controller(request):
    return render(request, 'controller_main/controller.html')

def price_list(request):
    return render(request, 'product_costing/product_costing.html')