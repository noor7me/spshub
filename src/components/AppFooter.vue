<template>
  <v-footer
    app
    dark
    padless
    dense
    height="50"
    
  >
    <v-card
      class="flex"
      flat
      tile
      
    >
  
      <v-spacer></v-spacer>
      <v-card-text class="green darken-4 white--text text-center">
          <Strong>Follow Us</Strong>
          
        <v-btn
          v-for="icon in icons"
          :key="icon.id"
          @click="fetchURL(icon.url)"
          class="mx-4"
          dark
          icon
          height="10"

        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        {
          id: 1,
          icon: 'fab fa-facebook',
          url:   'https://www.youtube.com/channel/UCNxrBugyp7o3w7o7KdaANmA'
        },
        {
          id: 2,
          icon: 'fab fa-youtube',
          url:   'https://www.youtube.com/channel/UCNxrBugyp7o3w7o7KdaANmA'
        },
        {
          id: 3,
          icon: 'fab fa-twitter',
          url:   'https://www.youtube.com/channel/UCNxrBugyp7o3w7o7KdaANmA'
        }
        
      ],
    }),
    methods: {
      fetchURL(url) {
        window.location.href= url;
      }
    }
  }
</script>