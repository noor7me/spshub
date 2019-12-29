<template>

    <v-carousel
      height="100%"
   
      cycle
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="slide in slides"
        :key="slide.id"
      >
      <v-sheet
        :color="slide.color"
        height="100%"
        tile
      >
  
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            >
            <v-row justify="center">
              <div>
                <v-img
                  :src="slide.image"
                  width="400px"
                  height="400px"
                >
                </v-img>
              </div>
      
              </v-row>
          </v-col>
        </v-row>
        
          <v-row>
            <v-col
              cols="12"
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
            >
              <v-row justify="center">
                <div class="slide-text">
                  <p>
                    {{slide.qoute}}
                  </p>
                  <p>
                    <strong>
                      {{slide.copyWright}}
                    </strong>
                  </p>
                </div>
              </v-row>
            </v-col>
          </v-row>
    

      </v-sheet>

      </v-carousel-item>

    </v-carousel>

</template>

<script>
export default {
  name: 'ResourcesRoute',
  data() {
    return {
      slides: [
        {
          id: 1,
          color: 'primary',
          image: "/assets/images/tree.png",
          qoute: "The best time to plant an oak tree was 20 years ago. The second best time is today.",
          copyWright: "Chinese Proverb"
        },        
        {
          id: 2,
          color: 'secondary',
          image: "/assets/images/malcomx.png",
          qoute: "Education is our passport to the future, for tomorrow belongs only to the people who prepare for it today.",
          copyWright: "Malcolm X"

        },
        {
          id: 3,
          color: '#6a0238',
          image: "/assets/images/image3.png",
          qoute: 'The secret of getting ahead is getting started. The secret of '+ 
                  'getting started is breaking your complex overwhelming tasks into'+ 
                  'small manageable tasks, and then starting on the first one.',
          copyWright: "Mark Twain"
          
          
        },

        {
          id: 4,
          color: '#65026A',
          image: "/assets/images/education.png",
          image2: "/assets/images/education.png",

          qoute: 'If you are planning for a year, sow rice; if you are planning '+
                 'for a decade, plant trees; if you are planning for a lifetime, '+
                 'educate people',
          copyWright: "Chinese Proverb"
        },

        {
          id: 5,
          color: '#65026A',
          image: "/assets/images/mandela.png",
          qoute: "Education is the most powerful weapon which you can use to change the world. ",
          copyWright: "Nelson Mandela"
        },
        
        {
          id: 6,
          color: '#0D47A1',
          image: "/assets/images/image6.png",
          qoute: 'Education then, beyond all other devices of human origin, '+
                 'is the great equalizer of the conditions of men. ',
          copyWright: "Horace Mann"
        },

        {
          id: 7,
          color: '#000000',
          image: "/assets/images/aqoon.png",
          qoute: "Aqoon la'aan waa iftiin la'aan"+
                 'Ignorance and darkness are synonymous',
        },

        {
          id: 8,
          color: '#E91E63',
          image: "/assets/images/books.png",
          qoute: 'The roots of education are bitter, but the fruit is sweet',
          copyWright: 'Aristotle'

        },

        {
          id: 9,
          color: '#F4511E',
          image: "/assets/images/quran.png",
          qoute: 'Read! And your Lord is the Most Generous'+
                  'Who has taught by the pen '+
                  'Has taught man that which he knew not ',
          copyWright: 'Aristotle'
        },

        {
          id: 10,
          color: '#F4511E',
          image: "/assets/images/knowledge.png",
          qoute: 'Seeking knowledge is an obligation upon every Muslim. ',

          copyWright: 'Prophet Mohamed, PBUH '
        },

      ],
      colors: [
        'primary',
        'secondary',
        'yellow darken-4',
        'red',
        'orange'
      ]
    }
  }
}
</script>

<style>
  .slide-text{
    width: 100%;
    height: 100%;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 1.2px;
    

  }

  .second-image{
    margin-left: 0x;
  }
</style>