<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Top Navigation Bar -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <img class="h-8 w-auto" src="/src/assets/favicon_io/favicon-32x32.png" alt="Tenga Health Logo" />
              <span class="ml-2 text-lg font-semibold text-teal-600">Tenga Health</span>
            </div>
          </div>

          <!-- Right side navigation items -->
          <div class="flex items-center">
            <!-- Notifications -->
            <button class="p-2 rounded-full text-gray-500 hover:bg-gray-100 relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span v-if="notificationCount > 0"
                class="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {{ notificationCount }}
              </span>
            </button>

            <!-- User Menu -->
            <div class="ml-3 relative">
              <div v-if="isLoading">
                <div class="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
              </div>

              <div v-else-if="user" class="flex items-center">
                <UserButton />
                <div class="ml-3 hidden md:block">
                  <div class="text-sm font-medium text-gray-700">{{ userName }}</div>
                  <div class="text-xs text-gray-500">{{ userEmail }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Dashboard Header -->
      <div class="px-4 py-5 sm:px-6">
        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p class="mt-1 text-sm text-gray-600">
          Welcome back{{ userName ? ', ' + userName.split(' ')[0] : '' }}! Here's your health overview.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="px-4 sm:px-6">
        <div class="animate-pulse">
          <div class="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="h-40 bg-gray-200 rounded"></div>
            <div class="h-40 bg-gray-200 rounded"></div>
            <div class="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Dashboard Content (When User is Loaded) -->
      <div v-else-if="user" class="px-4 sm:px-6">
        <!-- Health Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <!-- Activity Card -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-teal-100 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Daily Activity
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        7,842
                      </div>
                      <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 self-center" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span class="sr-only">Increased by</span>
                        12%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:px-6">
              <div class="text-sm">
                <a href="#" class="font-medium text-teal-600 hover:text-teal-500">
                  View all activity
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Heart Rate Card -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-red-100 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Heart Rate
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        72 <span class="text-sm text-gray-500">bpm</span>
                      </div>
                      <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        Normal
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:px-6">
              <div class="text-sm">
                <a href="#" class="font-medium text-teal-600 hover:text-teal-500">
                  View heart data
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Sleep Card -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      Sleep Quality
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        7.5 <span class="text-sm text-gray-500">hrs</span>
                      </div>
                      <div class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 self-center" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        <span class="sr-only">Improved by</span>
                        8%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-4 sm:px-6">
              <div class="text-sm">
                <a href="#" class="font-medium text-teal-600 hover:text-teal-500">
                  View sleep data
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Summary -->
        <div class="bg-white shadow rounded-lg mb-6">
          <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Profile Information
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Your personal details and health preferences.
            </p>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ userName }}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ userEmail }}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Member since
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ userJoinedDate }}
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Last sign in
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ lastSignInDate }}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Upcoming Appointments -->
        <div class="bg-white shadow rounded-lg">
          <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Upcoming Appointments
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Your scheduled health check-ins.
            </p>
          </div>
          <div class="px-4 py-5 sm:p-6">
            <div v-if="appointments.length === 0" class="text-center py-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 class="mt-2 text-sm font-medium text-gray-900">No upcoming appointments</h3>
              <p class="mt-1 text-sm text-gray-500">Schedule a check-in with your healthcare provider.</p>
              <div class="mt-6">
                <button type="button"
                  class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Schedule Appointment
                </button>
              </div>
            </div>
            <div v-else class="overflow-hidden">
              <ul role="list" class="divide-y divide-gray-200">
                <li v-for="(appointment, index) in appointments" :key="index" class="py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <div class="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-600" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate">
                        {{ appointment.title }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ appointment.provider }}
                      </p>
                    </div>
                    <div>
                      <div class="text-sm text-gray-900">
                        {{ appointment.date }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ appointment.time }}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Not Signed In State -->
      <div v-else class="px-4 sm:px-6">
        <div class="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-12 w-12 text-gray-400" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">Not signed in</h3>
          <p class="mt-1 text-sm text-gray-500">Please sign in to access your dashboard.</p>
          <div class="mt-6">
            <SignInButton mode="modal">
              <button type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useUser, UserButton, SignInButton } from '@clerk/vue';

// User data from Clerk
const { isLoaded, user } = useUser();
const isLoading = computed(() => !isLoaded);

// User details
const userName = computed(() => user.value?.fullName || '');
const userEmail = computed(() => user.value?.primaryEmailAddress?.emailAddress || '');
const userJoinedDate = computed(() => {
  if (!user.value?.createdAt) return '';
  return new Date(user.value.createdAt).toLocaleDateString();
});
const lastSignInDate = computed(() => {
  if (!user.value?.lastSignInAt) return '';
  return new Date(user.value.lastSignInAt).toLocaleDateString();
});

// Notification count
const notificationCount = ref(2);

// Sample appointments data
const appointments = ref([
  {
    title: 'Annual Check-up',
    provider: 'Dr. Sarah Johnson',
    date: 'May 10, 2025',
    time: '10:00 AM'
  },
  {
    title: 'Nutrition Consultation',
    provider: 'Jane Smith, RD',
    date: 'May 17, 2025',
    time: '2:30 PM'
  }
]);

onMounted(() => {
  console.log('Dashboard loaded');
});
</script>