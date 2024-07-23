from django.urls import path
from . import views
from django.contrib.auth.views import LoginView , LogoutView
from .forms import UserLoginForm

urlpatterns = [
    path('', LoginView.as_view(template_name='auth/client_login.html' 
                                , authentication_form=UserLoginForm
                               ), name='client-login'),
    path('logout/', LogoutView.as_view(next_page='client-login'), name='client-logout'),
    path('signup/', views.client_signup, name='client-signup'),
    path('home/', views.client_home, name='client-home'),
    path('overview/', views.client_overview, name='client-overview'),
    path('team/', views.client_team, name='client-team'),
    path('representation/', views.client_representation, name='client-representation'),
    path('api/sensordata/', views.sensor_data, name='sensor_data'),
    path('api/getsensordata/', views.get_sensor_data, name='get_sensor_data'),
]