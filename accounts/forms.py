from django.contrib.auth import get_user_model, authenticate
from django import forms


User = get_user_model()


class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(
        label='Password',
        widget=forms.PasswordInput
    )
    password2 = forms.CharField(
        label='Password confirm',
        widget=forms.PasswordInput
    )

    class Meta:
        model = User
        fields = ['username', 'email', ]

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')

        if password1 and password2 and password1 != password2:
            raise forms.ValidationError('passwords do not match')
        if len(password2) < 8:
            raise forms.ValidationError('password is too short (min 8 chars)')
        return password2

    def save(self, commit=True):
        user = super(UserCreationForm, self).save(commit=False)
        user.set_password(self.cleaned_data['password1'])
        user.save()
        return user
