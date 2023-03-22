<template>
  <div>
    <h1>App</h1>
    <nav v-if="!userStore.loadingSession">
      <router-link to="/" class="btn btn-outline-success me-2" v-if="userStore.userData">Home</router-link>
      <router-link to="/Login" class="btn btn-outline-success me-2" v-if="!userStore.userData">Login</router-link>
      <router-link to="/Register" class="btn btn-outline-success me-2" v-if="!userStore.userData">Register</router-link>
      <button class="btn btn-outline-danger" @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
    </nav>
    <div v-else>
      loading...
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import {useUserStore} from './stores/user'
  const userStore = useUserStore()

</script>