from .models import Articles
from django.forms import ModelForm, TextInput, DateTimeInput, Textarea, FileInput


class ArticlesForm(ModelForm):
    class Meta:
        model = Articles
        fields = ['title', 'anons', 'content', 'image', 'date']

        widgets = {
            'title': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Название товара'
            }),
            'anons': TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Краткое описание товара'
            }),
            'date': DateTimeInput(attrs={
                'class': 'form-control',
                'placeholder': 'Дата публикации',
                'type': 'datetime-local'
            }),
            'content': Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Текст описания товара'
            }),
            'image': FileInput(attrs={
                'class': 'form-control'
            })
        }
