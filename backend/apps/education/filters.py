import django_filters

from .models import EducationalMaterial


class EducationalMaterialFilter(django_filters.FilterSet):
    class Meta:
        model = EducationalMaterial
        fields = ["is_published", "material_type"]
