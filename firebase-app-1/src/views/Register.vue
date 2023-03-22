<template>
  <h1>Register</h1>
  <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Ingrese email" v-model.trim="email">
      <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
      <button type="submit" class="btn btn-outline-primary" :disabled="userStore.loadingUser">Crear Usuario</button>
  </form>
</template>

<script setup>
  import {ref} from 'vue';
  import {useUserStore} from "../stores/user.js";
  import {useRouter} from 'vue-router'

  const userStore = useUserStore();
  const router = useRouter();

  const email = ref('');
  const password = ref('');

  const handleSubmit = async() => {
    if (!email.value || password.value.length < 5) {
      return alert('Llene los campos')
    }
    await userStore.registerUser(email.value, password.value)
    router.push('/')
  }

</script>

