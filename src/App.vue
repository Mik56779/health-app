<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
import { ref, onMounted, watch } from 'vue';
import { useAuth } from '@clerk/vue';

const router = useRouter()
// Get current year for footer
const currentYear = new Date().getFullYear();
const { isSignedIn } = useAuth();
const homePageUrl = '/dashboard';

watch(isSignedIn, (newValue) => {
  console.log('User signed in status changed:', newValue);
  router.push(newValue ? '/dashboard' : '/');
});

onMounted(() => {
  console.log('Login page loaded');
});
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <header>
    <RouterLink to="/" />
    <RouterView />
  </header>
</template>
