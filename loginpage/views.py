from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.views.decorators.cache import cache_control


# Create your views here.
def index(request):
    if request.method == 'POST':
        username = request.POST['user']
        password = request.POST['pass']
        print(username,password)
    return render(request,'login.html')
def signup(request):
    if request.method == 'POST':
        username = request.POST['name']
        userid = request.POST['un']
        useremail = request.POST['mail']
        password = request.POST['password1']
        print("username=",username,"userid=", userid,"mail=",useremail,"pass=",password)
    return render(request,'signup.html')