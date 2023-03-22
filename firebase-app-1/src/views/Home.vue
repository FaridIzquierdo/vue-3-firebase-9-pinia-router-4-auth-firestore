<template>
  <h1>Home</h1>
  <p>User Email: {{userStore.userData?.email}}</p>
</template>

<script setup>
  import {useUserStore} from '../stores/user.js';
  const userStore= useUserStore();

</script>

