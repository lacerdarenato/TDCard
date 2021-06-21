from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from .models import Task
from .serializers import TaskSerializer


@csrf_exempt
def TaskViewSet(request, id=0):
    if request.method == 'GET':
        task = Task.objects.all().order_by('-created_at')
        task_serializer = TaskSerializer(task, many=True)
        return JsonResponse(task_serializer.data, safe=False)

    elif request.method == 'POST':
        task_data = JSONParser().parse(request)
        task_serializer = TaskSerializer(data=task_data)
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse("Adicionado com Sucesso!", safe=False)
        return JsonResponse("Falha ao adicionar!", safe=False)

    elif request.method == 'PUT':
        task_data = JSONParser().parse(request)
        task = Task.objects.get(id=task_data['id'])
        task_serializer = TaskSerializer(task, data=task_data)
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse("Atualizado com Sucesso!", safe=False)
        return JsonResponse("Falha ao atualizar!", safe=False)

    elif request.method == 'DELETE':
        task = Task.objects.get(id=id)
        task.delete()
        return JsonResponse("Deletado com sucesso", safe=False)
