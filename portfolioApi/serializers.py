from dataclasses import field
from rest_framework import serializers
from .models import *


class Home_detailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeDetails
        fields = '__all__'


class About_meSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutMe
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class MyContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyContact
        fields = '__all__'


class ServicesOffredSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesOffred
        fields = '__all__'


class SocialMediaLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaLinks
        fields = '__all__'


class LanguagesIconsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguagesIcons
        fields = '__all__'
