from django.shortcuts import render
from rest_framework import generics
from .models import Tag
from .serializers import TagSerializer

class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


# Create your views here.
