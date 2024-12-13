from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken
from .models import user, course
from .serializer import UserSerializer, CourseSerializer
from django.contrib.auth import authenticate
from rest_framework.permissions import AllowAny

class UserViewSet(viewsets.ModelViewSet):
    queryset = user.objects.all()
    serializer_class = UserSerializer

    # Agregar el método para el login
    @action(detail=False, methods=['post'], permission_classes=[AllowAny])
    def login(self, request):
        req_email = request.data.get('email')
        req_password = request.data.get('password')

        # Autenticación de usuario
        try:
            auth_user = user.objects.get(email=req_email)
        except: 
            return Response({"detail": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        if req_password == auth_user.password:
            # Si el usuario es válido, crear un token JWT
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            print(req_email, auth_user.password)
            # Si las credenciales son incorrectas
            return Response({
                'detail': 'Invalid credentials',
            }, status=status.HTTP_401_UNAUTHORIZED)


class CourseViewSet(viewsets.ModelViewSet):
    queryset = course.objects.all()
    serializer_class = CourseSerializer