from django.urls import path
from . import views


urlpatterns = [
    path('home-api/', views.get_intoductionDetails, name='home'),
    path('aboutme-api/', views.get_AboutMeDetails, name='about-details'),
    path('allServices-api/',
         views.get_ServicesOffred, name='services'),
    path('projects-api/',
         views.get_Projects, name='projects'),
    path('contacts-api/',
         views.get_MyContact, name='contacts'),
    path('links-api/',
         views.get_SocialMediaLinks, name='links'),

    path('lang-icons-api/',
         views.get_languages_icons, name='lang-icons'),
]
