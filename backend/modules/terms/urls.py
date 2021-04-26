from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TermAndConditionViewSet


router = DefaultRouter()
router.register("termsandconditions", TermAndConditionViewSet)
router.register("t2", TermAndConditionViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path('summernote/', include('django_summernote.urls')),
]
