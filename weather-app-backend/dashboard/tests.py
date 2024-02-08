from django.test import TestCase

from .models import City

# Create your tests here.
class CityTestCase(TestCase):

    def setUp(self):
        c1 = City.objects.create(name="Los Angeles", country="USA")
        c2 = City.objects.create(name="Paris", country="France")
        c3 = City.objects.create(name="New York", country="USA")

    def test_get_valid_city(self):
        a = City.objects.get(name="Los Angeles")
        self.assertEqual(a.name, "Los Angeles")

    def test_get_invalid_city(self):
        with self.assertRaises(City.DoesNotExist):
            a = City.objects.get(name="Berlin")

    def test_filter_by_country(self):
        a = City.objects.filter(country="USA")
        self.assertEqual(a.count(), 2)
