from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MemberViewSet, ActivityViewSet

router = DefaultRouter()
router.register(r'members', MemberViewSet)
router.register(r'activities', ActivityViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
