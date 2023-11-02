<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/news">News</NuxtLink></li>
      </ul>
    </nav>
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Token</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        <div v-if="!data?.token" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span v-else>{{ data.token }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/hello');

  console.log("🚀 ~ file: index.vue:15 ~ data:", data.value);
</script>