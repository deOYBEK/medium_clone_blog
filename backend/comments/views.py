from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Comment
from .serializers import CommentSerializer
from articles.models import Article
from rest_framework.exceptions import PermissionDenied

class CommentListCreateView(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        slug = self.kwargs['slug']
        return Comment.objects.filter(article__slug=slug).order_by('-created_at')

    def perform_create(self, serializer):
        slug = self.kwargs['slug']
        article = Article.objects.get(slug=slug)
        serializer.save(author=self.request.user, article=article)


class CommentDeleteView(generics.DestroyAPIView):
    queryset = Comment.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def perform_destroy(self, instance):
        if self.request.user != instance.author:
            raise PermissionDenied("Faqat muallif kommentni o‘chirishi mumkin.")
        instance.delete()


# Create your views here.
