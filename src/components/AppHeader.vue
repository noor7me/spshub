<template>
  <v-card flat>
    <v-toolbar
      class="green darken-4"
      dark
      height="90"
      flat
    >
    <v-layout row wrap justify-end>
        <v-toolbar-title>
        <div class="dapp-header__title display-1 font-italic">
            Somali Professionals & Students Hub
        </div>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn rounded outlined dark small
            @click="fetchForm('https://forms.gle/Lsm1tvrmnBQSpuv9A')"
        >
            <span class="mr-2">Join Us Today</span>

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
      </v-toolbar>
    </v-card>
  </v-card>
</template>


<script>
import menuList from "@/components/menuList";
export default {

    data() {

        return {

            links: [
        {
            id: 1,
            label: "Resources",
            url: "/"
        },
        {
            id: 2,
            label: "Events",
            url: "/EventsRoute"
        },
        {
            id: 3,
            label: "About",
            url: "",   //should be the about page
            subpages: [
                {
                    label: 'mission & vision',
                    url: '/about/mission-and-vision'
                },
                {
                    label: 'team members',
                    url: '/about/team'
                },
                {
                    label: 'contact us',
                    url: '/contactus'
                }
            ]   
        },
        {
            id: 4,
            label: "sign in",
            url: "/login"
        },
    
        ]

    }  
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