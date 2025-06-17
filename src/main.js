import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { clerkPlugin } from "@clerk/vue";

import App from "./App.vue";
import router from "@/router";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
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
