from django.urls import path
from .views import ProductListView,OrderCreateView

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('orders/', OrderCreateView.as_view(), name='order-create'),
]
