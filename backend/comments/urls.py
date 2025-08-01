from django.urls import path
from .views import CommentListCreateView, CommentDeleteView

urlpatterns = [
    path('<slug:slug>/comments/', CommentListCreateView.as_view(), name='comment-list-create'),
    path('comments/<int:pk>/delete/', CommentDeleteView.as_view(), name='comment-delete'),
]
