print("Dhivya")
from rest_framework import generics
from .models import Video
from .serializers import Video

class VideoListCreateView(generics.ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
