from django.urls import path
from .views import ArticleListCreateView, ArticleDetailView
from . import views

urlpatterns = [
    path('', ArticleListCreateView.as_view(), name='article-list-create'),
    path('<slug:slug>/', ArticleDetailView.as_view(), name='article-detail'),
	path('articles/my/', views.my_articles, name='my-articles'),



]
