<template>
  <nav>
      <v-card class="overflow-hidden">
      <v-app-bar app dark class="green darken-4" :hide-on-scroll="hideOnScroll">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="subheading">
              <strong>SPSHUB</strong>
          </v-toolbar-title>
      </v-app-bar>
      </v-card>
      <v-navigation-drawer v-model ="drawer" app width="300">
         <v-list>
             <nestedList :subpages="links[0]"></nestedList>
             <nestedList :subpages="links[1]"></nestedList>
             <nestedList :subpages="links[2]"></nestedList>
             <nestedList :subpages="links[3]"></nestedList>
         </v-list>
          
      </v-navigation-drawer>
  </nav>
</template>

<script>
import nestedList from "@/components/nestedList";
export default {
    name:  "MobileHeader2",
    props: {
        links: Array
    },
    data () {
        return {
            drawer: false,
            hideOnScroll : false
        }
    },
    components: {
        nestedList
    }

}
</script>

<style>

</style>