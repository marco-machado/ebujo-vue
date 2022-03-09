<template>
  <v-app>
    <v-app-bar app color="primary" dark></v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>
