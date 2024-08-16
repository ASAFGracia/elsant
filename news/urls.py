from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views
from .views import search_articles, autocomplete_products

urlpatterns = [
    path('', views.news_home, name='news_home'),
    path('create', views.create, name='create'),
    path('<int:pk>/', views.NewsDetailView.as_view(), name='news-detail'),
    path('<int:pk>/update', views.NewsUpdateView.as_view(), name='news-update'),
    path('<int:pk>/delete', views.NewsDeleteView.as_view(), name='news-delete'),
    path('/search', search_articles, name='search_articles'),
    path('/autocomplete', autocomplete_products, name='autocomplete_products'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
