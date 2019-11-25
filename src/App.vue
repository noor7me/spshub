<template>
<v-app>
  <AppHeader> </AppHeader>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-content>

 
</v-app>
</template>

<script>

import AppHeader from "@/components/AppHeader";
//import AppFooter from "@/components/AppFooter"

export default {
  name: 'App',
  components: {
    AppHeader
    
  },
  methods: {
    fetchForm(url) {
      window.location.href= url;
    }
  }
};
</script>
