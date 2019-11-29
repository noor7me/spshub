<template>
  <div>
    <v-app-bar app
      class="green darken-4"
      dense
      dark
    >
      <v-toolbar-title>Somali Professionals & Students Hub</v-toolbar-title>

      <v-spacer></v-spacer>

     <v-menu
        left
        bottom
        offset-y
        open-on-hover
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.id"
            :to="link.url"
            >
            <v-list-item-title>
                <template v-if="link.subpages">
                    <menuList2 :subpages="link"> </menuList2>       
                </template>
                <template v-else>
                    {{ link.label }}        
                </template>
            
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import menuList2 from "@/components/menuList2";
export default {
    props: {
        links: Array
    },
    components: {
        menuList2
    }

}
</script>

<style>

</style>