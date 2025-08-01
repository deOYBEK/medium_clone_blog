from rest_framework import serializers
from .models import Article
from tags.models import Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')
    tags = TagSerializer(many=True, read_only=True)
    tag_names = serializers.ListField(write_only=True, child=serializers.CharField(), required=False)

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'content', 'author', 'created_at', 'updated_at', 'tags', 'tag_names']

    def create(self, validated_data):
        tag_names = validated_data.pop('tag_names', [])
        article = Article.objects.create(**validated_data)
        for tag_name in tag_names:
            tag, created = Tag.objects.get_or_create(name=tag_name)
            article.tags.add(tag)
        return article

    def update(self, instance, validated_data):
        tag_names = validated_data.pop('tag_names', [])
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        if tag_names:
            instance.tags.clear()
            for tag_name in tag_names:
                tag, created = Tag.objects.get_or_create(name=tag_name)
                instance.tags.add(tag)
        return instance




class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'content', 'author', 'created_at', 'updated_at']
