import os
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404


@api_view(['POST'])
def register_view(request):
    if request.method=='POST':
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user=User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            token=Token.objects.create(user=user)
            return Response({"token":token.key,'user':serializer.data},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
            
@api_view(['POST'])
def login_view(request):
    user=get_object_or_404(User,username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"error":"User not found"},status=status.HTTP_404_NOT_FOUND)
    token,create=Token.objects.get_or_create(user=user)
    serializer=UserSerializer(user)
    return Response({'token':token.key,"user":serializer.data},status=status.HTTP_200_OK)
      


