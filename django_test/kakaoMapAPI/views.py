from django.shortcuts import render
from django.conf import settings

# Create your views here.
from django.http import HttpResponse

def index(request):
    context = {'KAKAOMAP_API_KEY': settings.KAKAOMAP_API_KEY}
    return render(request, 'kakaoMapAPI/index.html', context)
