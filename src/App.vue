<template>

<v-app>

  <MobileHeader v-if="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly" :links="navigation.links"></MobileHeader>
  <DesktopHeader v-else :links="navigation.links"></DesktopHeader>
  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-content>

 <AppFooter></AppFooter>
</v-app>
</template>

<script>

import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader  from "@/components/MobileHeader";
import AppFooter     from "@/components/AppFooter";
//import AppFooter from "@/components/AppFooter"
import {mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    DesktopHeader,
    MobileHeader,
    AppFooter
  },
  computed: {
    ...mapState({
      header: 'header',
      navigation: 'navigation',
      footer: 'footer'
    })
  },
  methods: {
    fetchForm(url) {
      window.location.href= url;
    }
  }
};
</script>
