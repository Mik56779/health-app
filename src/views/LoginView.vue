<script setup lang="ts">
import { useRouter } from 'vue-router'
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
        <SignedOut>
            <div
                class="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 flex flex-col items-center justify-center p-4">
                <div class="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                    <!-- Logo/Image Container -->
                    <div class="flex justify-center p-6 bg-white">
                        <img src="/src/assets/Doctors-pana.png" alt="Tenga Health Logo" class="h-32 object-contain" />
                    </div>

                    <!-- Login Content -->
                    <div class="p-6 sm:p-8">
                        <h1 class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                            Welcome to Tenga Health
                        </h1>

                        <p class="text-gray-600 text-center mb-8">
                            Your personal health companion
                        </p>

                        <!-- Login Button -->
                        <SignInButton mode="modal" :redirectUrl="homePageUrl" class="w-full">
                            <button class="w-full py-3 px-4 bg-teal-500 hover:bg-teal-600 hover:cursor-pointer text-white font-medium rounded-lg 
                   shadow transition-colors duration-200 flex items-center justify-center gap-2">
                                <span>Get Started</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </SignInButton>
                        <!-- Additional info -->
                        <p class="text-xs text-gray-500 text-center mt-6">
                            By continuing, you agree to our Terms of Service and Privacy Policy
                        </p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="mt-8 text-center text-gray-500 text-sm">
                    <p>© {{ currentYear }} Tenga Health. All rights reserved.</p>
                </div>
            </div>
        </SignedOut>
    </header>
</template>
