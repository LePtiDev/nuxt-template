<script setup lang="ts">
const formState = reactive({
  email: '',
  password: '',
});

const handleSignIn = () => {};
</script>
<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <div class="flex flex-col items-end justify-end">
      <u-card>
        <u-form :state="formState" class="w-[340px]" @submit="handleSignIn">
          <div class="space-y-4 mb-4">
            <u-form-field :label="$t('feature.auth.email')" name="email" class="w-full">
              <u-input v-model="formState.email" type="email" class="w-full" />
            </u-form-field>
            <u-form-field :label="$t('feature.auth.password')" name="password" class="w-full">
              <u-input v-model="formState.password" type="password" class="w-full" />
            </u-form-field>
          </div>

          <u-button class="justify-end w-full cursor-pointer" variant="link" color="primary">
            {{ $t('feature.auth.forgot_password') }}
          </u-button>

          <u-button class="w-full justify-center mt-4 cursor-pointer" type="submit">
            {{ $t('feature.auth.sign_in') }}
          </u-button>

          <u-separator label="ou" class="my-4" />

          <u-button class="w-full justify-center cursor-pointer" variant="outline" color="neutral" type="button">
            {{ $t('feature.auth.sign_in_with_google') }}
          </u-button>
          <u-button class="w-full justify-center mt-4 cursor-pointer" variant="outline" color="neutral" type="button">
            {{ $t('feature.auth.sign_in_with_microsoft') }}
          </u-button>
        </u-form>
      </u-card>
      <u-button class="justify-center mt-4 cursor-pointer" variant="link" to="/auth/signup">
        {{ $t('feature.auth.dont_already_have_an_account') }}
      </u-button>
    </div>
  </div>
</template>
