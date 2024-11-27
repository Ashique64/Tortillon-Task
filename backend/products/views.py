from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product,Order
from .serializers import Productserializer,OrderSerializer

# Create your views here.

class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = Productserializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    
class OrderCreateView(APIView):
    def post(self, request):
        orders = request.data.get('orders', [])
        if not orders:
            return Response({"error": "No orders provided."}, status=status.HTTP_400_BAD_REQUEST)

        order_instances = []
        for order in orders:
            try:
                product = Product.objects.get(id=order['product_id'])
                if product.quantity < order['quantity']:
                    return Response(
                        {"error": f"Insufficient stock for {product.name}."},
                        status=status.HTTP_400_BAD_REQUEST,
                    )
                
                product.quantity -= order['quantity']
                product.save()

               
                order_instance = Order(
                    product=product,
                    quantity=order['quantity'],
                )
                order_instances.append(order_instance)
            
            except Product.DoesNotExist:
                return Response(
                    {"error": f"Product with ID {order['product_id']} does not exist."},
                    status=status.HTTP_404_NOT_FOUND,
                )

        Order.objects.bulk_create(order_instances)

        return Response({"message": "Order placed successfully!"}, status=status.HTTP_201_CREATED)