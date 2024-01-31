from rest_framework import serializers
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator,EmailValidator
from django.contrib.auth.password_validation import validate_password


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        validators=[MinLengthValidator(8, message="Password must be at least 8 characters long."),validate_password])
    class Meta:
        model=User
        fields=('username','email','password')

