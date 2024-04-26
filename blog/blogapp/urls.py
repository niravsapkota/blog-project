from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.getPosts, name='blogs'),
    path('blog/create/', views.createPost, name='create'),
    path('blogs/<str:pk>/update/', views.updatePost, name='update'),
    path('blogs/<str:pk>/delete/', views.deletePost, name='delete'),
    path('blogs/<str:pk>', views.getPost, name='blog'),
]