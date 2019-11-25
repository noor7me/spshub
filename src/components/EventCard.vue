<template>
    <v-layout row wrap>
            <v-flex xs12   
                v-for="event in events"
                :key="event.id"
            >
                <router-link class ="event-link" :to="{name: 'EventDetailsRoute', params: {event:event}}"> 
                    <v-card hover 
                        
                        width="1025"

                        class="event-card mx-auto"
                        shaped
                        >
                        <v-card-text>
                            <v-card-title class="display-1">
                                {{event.title}}
                            </v-card-title>
                            <span class="eyebrow">
                            <strong>   
                                @ {{event.date}} on {{event.time}}
                            </strong>
                            </span>
                        </v-card-text>
                        <v-btn
                            text
                            icon>
                        <v-icon>mdi-account-group-outline</v-icon>
                        </v-btn>
                         <strong>{{event.attendees ? event.attendees.length : 0 }} Attending </strong>
                    </v-card>
                </router-link>
            </v-flex>
    </v-layout>
</template>

<script>

export default {
    name: 'EventCard',
    props: {
        events: Array,

    }, 


}
</script>

<style scoped>

    .event-card {
      padding: 50px;
      margin-bottom: 24px;
      transition: all 0.2s linear;
      cursor: pointer;
      border-radius: 25px;
    }
    .event-card:hover {
      transform: scale(1.02);
      box-shadow: 0 3px 12px 0 rgba(0, 160, 35, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
      
    }
    .event-card > .title {
      margin: 0;
    }
    
    .event-link {
      color: black;
      text-decoration: none;
      font-weight: 100;
    }

</style>