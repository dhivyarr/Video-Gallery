print("Dhivya")
from rest_framework import generics
from .models import Video
from .serializer import Video

class VideoListCreateView(generics.ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializerI am adding this to create conflict
