from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.views.decorators.cache import cache_control
from django.contrib.auth.models import User, auth
from django.contrib import messages


# Create your views here.
@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def index(request):
    if 'username' in request.session:
        return render(request,'home.html')
    if request.method == 'POST':
        username = request.POST['user']
        password = request.POST['pass']
        user = authenticate(username=username, password=password)
        if user is not None:
            request.session['username'] = username
            return render(request, 'home.html')
    return render(request, 'login.html')


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def signup(request):
    if request.method == 'POST':
        username = request.POST['name']
        userid = request.POST['userid']
        useremail = request.POST['mail']
        password = request.POST['password1']
        password2 = request.POST['password2']
        print(username, userid, useremail, password)
        if password == password2:
            user = User.objects.create_user(username=userid, password=password, email=useremail, first_name=username)
            user.save();
        return render(request, 'home.html')
    else:
        return render(request, 'signup.html')


@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def logout(request):
    request.session.flush()
    return redirect(index)
