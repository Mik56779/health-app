import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { clerkPlugin } from "@clerk/vue";

import App from "./App.vue";
import router from "./router";

//Must put key in .env file
const PUBLISHABLE_KEY = pk_test_cnVsaW5nLWtpd2ktOS5jbGVyay5hY2NvdW50cy5kZXYk;
const app = createApp(App);

if (!PUBLISHABLE_KEY) {
  throw new Error(
    "VITE_CLERK_PUBLISHABLE_KEY is not defined. Please set it in your .env file."
  );
}

app.use(createPinia());
app.use(router);
app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY });

app.mount("#app");
