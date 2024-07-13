from django.db import models


class Articles(models.Model):
    title = models.CharField('Название', max_length=100)
    anons = models.CharField('Анонс', max_length=250)
    content = models.TextField('Текст')
    date = models.DateTimeField('Дата публикации')
    image = models.ImageField(upload_to='images/', height_field='image_height', width_field='image_width')
    image_height = models.PositiveIntegerField(null=True, blank=True, editable=False)
    image_width = models.PositiveIntegerField(null=True, blank=True, editable=False)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f'/news/{self.id}'

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'
