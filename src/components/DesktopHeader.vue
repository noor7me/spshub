<template>
  <v-card flat>
    <v-toolbar
      class="green darken-4"
      dark
      height="100"
      flat
    >
    <v-layout row wrap >
        <v-toolbar-title>
            <div class="dapp-header__title display-1 font-italic">
                Somali Professionals 
            </div>
            <div class="dapp-header__title display-1 font-italic">
                & Students Hub
            </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn rounded outlined dark small
            @click="fetchForm('https://forms.gle/Lsm1tvrmnBQSpuv9A')"
        >
            <span class="mr-2">Became Mentee</span>

        </v-btn>
        <v-btn rounded outlined dark small
            @click="fetchForm('https://forms.gle/tJoSZKvbfGLrsX7V8')"
        >
            <span class="mr-2">Became Mentor</span>
        </v-btn>
        </v-layout>    
    </v-toolbar>

    <v-card>
      <v-toolbar
      flat
  
      >
      <v-layout row justify-space-between>
        <v-spacer></v-spacer>
        <v-btn
            text
            rounded
            v-for="link in links"
            :key="link.id"
            :to ="link.url"
            >
            <strong v-if="link.subpages">
                <menuList :subpages ="link"></menuList>
            </strong>
            <strong v-else>
                {{link.label}}
            </strong>
        </v-btn>
        </v-layout>
      </v-toolbar> 
    </v-card>
  </v-card>
</template>


<script>
import menuList from "@/components/menuList";
export default {
    name: "AppHeader",
    props: {
        links : Array
    },

    methods: {
        fetchForm(url) {
            window.location.href =url;
        }
    }, 
    components: {
        menuList
    }

}
</script>

<style>

</style>