from rest_framework.permissions import BasePermission

class IsProffesor(BasePermission):
    def has_permission(self, request, view):
        return super().has_permission(request, view) and request.user.role == 'PR'
    
class IsMonitor(BasePermission):
    def has_permission(self, request, view):
        return super().has_permission(request, view) and request.user.role == 'MO'