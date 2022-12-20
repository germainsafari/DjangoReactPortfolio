from django.db import models
from ckeditor.fields import RichTextField

from tinymce import models as tinymce_models


class HomeDetails(models.Model):
    greeting = models.CharField(
        max_length=30, blank=True, null=True, verbose_name="Greetings (eg: Hello)")
    name = models.CharField(max_length=100, blank=True,
                            null=True, verbose_name="Full Name")
    job_title = models.CharField(max_length=100, blank=True, null=True)
    par_inro = models.TextField(
        blank=True, null=True, verbose_name="Introduction")
    avatar_img = models.CharField(max_length=100, blank=True, null=True,
                                  verbose_name="Google Drive Image Id")
    hireMe_link = models.CharField(max_length=200, blank=True, null=True)
    cv_link = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Heros Section'

    def __str__(self):
        return self.name


class AboutMe(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)
    title_2 = models.CharField(max_length=100, blank=True, null=True)
    description_one = RichTextField(blank=True, null=True)
    about_avatar = models.CharField(max_length=100, blank=True, null=True,                    verbose_name="Google Drive Image Id"
                                    )

    class Meta:
        verbose_name_plural = 'About Me Section'

    def __str__(self):
        return self.title


class ServicesOffred(models.Model):
    icon_image = models.CharField(max_length=100, blank=True, null=True,
                                  verbose_name="Google Drive Image Id")
    service_name = models.CharField(max_length=40, blank=True, null=True)
    shadow_icon = models.CharField(max_length=40, blank=True, null=True)
    service_description = models.TextField(
        blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Services Section'

    def __str__(self):
        return self.service_name


class LanguagesIcons(models.Model):
    EXP_CHOICES = (
        ("Beginner", "Beginner"),
        ("Junior", "Junior"),
        ("Intermediate", "Intermediate"),
        ("Experienced", "Experienced"),
    )

    icon = models.CharField(max_length=100, blank=True,
                            verbose_name="language Icon Image:(icons8.com)")
    lang_name = models.CharField(
        max_length=100, blank=True, verbose_name="Language Name")
    exp_level = models.CharField(max_length=200, blank=True, choices=EXP_CHOICES,
                                 verbose_name="Experience Level")

    class Meta:
        verbose_name_plural = 'Skills section'

    def __str__(self):
        return self.lang_name


class Project(models.Model):
    language_used = models.CharField(max_length=100, blank=True, null=True)
    about_avatar = models.CharField(max_length=100, blank=True, null=True,
                                    verbose_name="Google Drive Image Id")
    updated_on = models.DateTimeField(
        auto_now_add=False, null=True, auto_now=True, blank=True)
    Project_title = models.CharField(max_length=90, blank=True, null=True)
    Project_info = models.TextField(blank=True, null=True)
    project_link = models.URLField(blank=True, null=True)
    demo_link = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Projects Section'

    def __str__(self):
        return self.Project_title


class MyContact(models.Model):
    icon = models.CharField(max_length=90, blank=True,
                            null=True, verbose_name="Icon (eg: fa -fa-twitter)")
    contact_info = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Contact Info (eg: johndoe2@gmail.com)")
    contact_name = models.CharField(
        max_length=30, blank=True, null=True, verbose_name="Contact Name (eg: twitter)")

    class Meta:
        verbose_name_plural = 'Contacts Section'

    def __str__(self):
        return self.contact_name


class SocialMediaLinks(models.Model):
    name = models.CharField(max_length=80, blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    social_icon = models.CharField(
        max_length=60, blank=True, null=True, verbose_name="Icon (eg: fa -fa-twitter)")

    class Meta:
        verbose_name_plural = 'Hero section Social Media Links'

    def __str__(self):
        return self.social_icon
