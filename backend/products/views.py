from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from .serializers import Productserializer

# Create your views here.

class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = Productserializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)