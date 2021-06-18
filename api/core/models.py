from django.db import models


class Task(models.Model):

    STATUS = (
        ('1', 'Em andamento'),
        ('2', 'Concluido')
    )

    title = models.CharField(max_length=255)
    description = models.TextField()
    concluded = models.CharField(
        max_length=1,
        choices=STATUS,
    )
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
