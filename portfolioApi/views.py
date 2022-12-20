from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.http import HttpResponse, HttpResponseNotFound
import os
from django.views import View


@api_view(['GET'])
def get_intoductionDetails(request):
    intro_details = HomeDetails.objects.all()
    serializer = Home_detailsSerializer(intro_details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_AboutMeDetails(request):
    details = AboutMe.objects.all()
    serializer = About_meSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_ServicesOffred(request):
    details = ServicesOffred.objects.all()
    serializer = ServicesOffredSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_Projects(request):
    details = Project.objects.all()
    serializer = ProjectSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_MyContact(request):
    details = MyContact.objects.all()
    serializer = MyContactSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_SocialMediaLinks(request):
    details = SocialMediaLinks.objects.all()
    serializer = SocialMediaLinksSerializer(details, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_languages_icons(request):
    details = LanguagesIcons.objects.all()
    serializer = LanguagesIconsSerializer(details, many=True)
    return Response(serializer.data)


class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'static', filename)

        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read(), content_type='application/javascript')
        else:
            return HttpResponseNotFound()
