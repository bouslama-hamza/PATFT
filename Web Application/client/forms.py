from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserCreationForm
from .models import Player

#class for the login
class UserLoginForm(AuthenticationForm):

    username = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': '**************', 'id': 'email'}))
    password = forms.CharField(widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': '**************', 'id': 'password'}))

    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)

        for fieldname in ["username", "password"]:
            self.fields[fieldname].help_text = None
        
    class Meta:
        model = User
        fields = ("username" , "password")

#class for the register
class UserRegisterForm(UserCreationForm):

    username = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': '*************', 'id': 'username'})
    )
    email = forms.EmailField(widget=forms.EmailInput(
        attrs={'class': 'form-control', 'placeholder': '*************', 'id': 'email'})
    )
    password1 = forms.CharField(widget=forms.PasswordInput( 
        attrs={'class': 'form-control', 'placeholder': '********', 'id': 'password'})
    )
    password2 = forms.CharField(widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': '********', 'id': ' password'})
    )

    def __init__(self, *args, **kwargs):
        super(UserRegisterForm, self).__init__(*args, **kwargs)

        for fieldname in ["username", "email","password1", "password2"]:
            self.fields[fieldname].help_text = None
                    
    class Meta:
        model = User
        fields = ("username", "email","password1", "password2")

#class for the player
class PlayerForm(forms.ModelForm):
    class Meta:
        model = Player
        fields = ['name', 'position', 'number', 'height', 'weight', 'age']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'position': forms.TextInput(attrs={'class': 'form-control'}),
            'number': forms.NumberInput(attrs={'class': 'form-control'}),
            'height': forms.NumberInput(attrs={'class': 'form-control'}),
            'weight': forms.NumberInput(attrs={'class': 'form-control'}),
            'age': forms.NumberInput(attrs={'class': 'form-control'}),
        }