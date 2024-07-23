from django.shortcuts import render , redirect
from .forms import UserRegisterForm , PlayerForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Player , PlayerData
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PlayerDataSerializer
from django.http import JsonResponse

# Create your views here.
def client_signup(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Compte cree avec succes pour {username}!')
            return redirect('client-login')
        else :
            messages.error(request, f'Erreur lors de la creation du compte! Veuillez reessayer.')
            return redirect('client-signup')
    else:
        form = UserRegisterForm()
    return render(request, 'auth/client_signup.html', {'form': form})


# client home
@login_required
def client_home(request):
    return render(request, 'app/client_home.html')

@login_required
def client_overview(request):
    return render(request, 'app/client_overview.html')

@login_required
def client_team(request):
    if request.method == 'POST':
        form = PlayerForm(request.POST)
        if form.is_valid():
            form.instance.id_user = request.user
            form.save()
            messages.success(request, f'Joueur a ete ajoute avec succes!')
            return redirect('client-team')
        else:
            messages.error(request, f'Joueur n a pas ete ajoute! Veuillez reessayer.')
            return redirect('client-team')
    else:
        form = PlayerForm()
    players = Player.objects.filter(id_user=request.user)
    return render(request, 'app/client_team.html', {'form': form, 'players': players})

@login_required
def client_representation(request):
    return render(request, 'app/client_representation.html')

@api_view(['POST'])
def sensor_data(request):
    if request.method == 'POST':
        serializer = PlayerDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = PlayerData.objects.all().order_by('id').first()
            data.delete()
        return Response(serializer.errors)
    
@api_view(['GET'])
def get_sensor_data(request):
    data = PlayerData.objects.all().order_by('-id').first()
    serializer = PlayerDataSerializer(data)
    return Response(serializer.data)
