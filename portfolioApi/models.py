from django.db import models


class HomeDetails(models.Model):
    greeting = models.CharField(max_length=30, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    job_title = models.CharField(max_length=100, blank=True, null=True)
    par_inro = models.TextField(blank=True, null=True)
    avatar_img = models.CharField(max_length=100, blank=True, null=True,
                                  verbose_name="Google Drive Image Id")
    hireMe_link = models.CharField(max_length=200, blank=True, null=True)
    cv_link = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Home Section'

    def __str__(self):
        return self.name


class SocialMediaLinks(models.Model):
    name = models.CharField(max_length=80, blank=True, null=True)
    social_icon = models.CharField(
        max_length=60, blank=True, null=True, verbose_name="Social Media Icon (eg fa fa-facebook)")
    link = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Social Media Links'

    def __str__(self):
        return self.social_icon


class AboutMe(models.Model):
    title = models.CharField(max_length=20, blank=True, null=True)
    title_2 = models.CharField(max_length=100, blank=True, null=True)
    description_one = models.TextField(blank=True, null=True)
    description_two = models.TextField(blank=True, null=True)
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
    shadow_icon = models.CharField(
        max_length=40, blank=True, null=True, verbose_name="Shadow icon(eg fa fa-snowflake-o)")
    service_description = models.TextField(
        blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Services Section'

    def __str__(self):
        return self.service_name


class MyProgress(models.Model):
    language = models.CharField(max_length=40, blank=True, null=True)
    percentage = models.IntegerField(blank=True, null=True)
    icon = models.CharField(max_length=40, blank=True,
                            null=True, verbose_name="icon (eg bx bxl-javascript)")

    class Meta:
        verbose_name_plural = 'Skills Section'

    def __str__(self):
        return self.language


class Project(models.Model):
    language_used = models.CharField(max_length=100, blank=True, null=True)
    about_avatar = models.CharField(max_length=100, blank=True, null=True,
                                    verbose_name="Google Drive Image Id")
    updated_on = models.DateTimeField(
        auto_now_add=False, null=True, auto_now=True, blank=True)
    Project_title = models.CharField(max_length=90, blank=True, null=True)
    Project_info = models.TextField(blank=True, null=True)
    project_link = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Projects Section'

    def __str__(self):
        return self.Project_title


class MyContact(models.Model):
    contact_name = models.CharField(max_length=30, blank=True, null=True)
    contact_info = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        verbose_name_plural = 'ContactMe Section'

    def __str__(self):
        return self.contact_name
