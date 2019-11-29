<template>
  <nav>
      <v-app-bar dark class="green darken-4">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>SPSHUB</v-toolbar-title>
      </v-app-bar>
      
      <v-navigation-drawer v-model ="drawer" app>
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
            drawer: false
        }
    },
    components: {
        nestedList
    }

}
</script>

<style>

</style>