from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Post
from .serializers import PostSerializer

@api_view(['GET'])
def getPosts(request):
    blogs = Post.objects.all()
    serializer = PostSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getPost(request, pk):
    blogs = Post.objects.get(id = pk)
    serializer = PostSerializer(blogs, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createPost(request):
    data = request.data
    blog = Post.objects.create(
        title = data['title'],
        body = data['body']
    )
    serializer = PostSerializer(blog, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updatePost(request, pk):
    data = request.data
    blog = Post.objects.get(id = pk)
    serializer = PostSerializer(instance=blog, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deletePost(request, pk):
    blogs = Post.objects.get(id = pk)
    blogs.delete()
    return Response('Note Deleted')