from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.exceptions import PermissionDenied



class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_update(self, serializer):
        if self.request.user != self.get_object().author:
            raise PermissionDenied("Faqat muallif maqolani tahrirlashi mumkin.")
        serializer.save()

    def perform_destroy(self, instance):
        if self.request.user != instance.author:
            raise PermissionDenied("Faqat muallif maqolani o‘chirishi mumkin.")
        instance.delete()


# Create your views here.
