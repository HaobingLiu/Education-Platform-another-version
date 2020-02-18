from django.contrib import admin
from django.urls import path
from .views import *

app_name = 'common'
urlpatterns = [
    path('home/', home),
    path('admin/', admin),
    path('login/', login),
    path('register/', register),
    path('reset/', reset),
    #path('inquiry/', inquiry),
    path('base/', base),

    path('visualization/', visualization),
    path('queryVDataP1/', query_vdata_p1),
    path('queryVDataP3/', query_vdata_p3),
    
    path('query_xy/', query_xy),  ###new p2
    path('visualization2/', visualization2), ###new p2
    path('visualization4/', visualization4), ###new p4
    # path('query_hw/', get_vdata),

    #path('query_hw/', get_vdata),
    path('query_zz/', query_zz), ###new p4
    
    path('query_nianji/', query_nianji),
    path('result/', result),
    path('query/', query),
    # path('query1/', query1),
    path('queryY/', queryY),
    # path('tst/', tst),
    path('data_import_export/', data_import_export),
    path('intervene/', intervene),
    path('CheckData/', CheckData),
    path('View/', View),
    path('download/', download),
    path("query_intervene", query_intervene),
    path('query_majors', query_majors),
    path('query_grades', query_grades),
    path('query_class', query_class),
    path('query_ID', query_ID),
    path('recommend', recommend),
    path('hot_book', get_hot_book_list),
    path('index/', index),
    path('tt', tt),
    path('monitor/', monitor),
    #path('monitor_engine/', monitor_engine),
    path('monitor_engine/', monitor_enginev2), ###new
    # path('result1/', result1),
    path('list1/', list1),
    path('list2/', list2),
    path('list3/', list3),
    # path('list4/', list4),
    # path('list5/', list5),
]
