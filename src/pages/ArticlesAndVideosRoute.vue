<template>
<div>

        <v-row>
          <v-col>
            <span class="video-header indigo--text">
                A List of Life Changing Videos 
            </span> 
          </v-col>
        </v-row>
        <v-row
          v-for="video in videos"
          :key="video.id"
        >
          <v-col>
              <v-row 
                
              >
                <div class="video-box">
                  <iframe width="330" height="400"
                      :src= video.link
                  >
                  </iframe>
                  <div class="video-title">
                  <span class="video-title"> {{video.title}}</span>
                  </div>
                </div>
              </v-row>
          </v-col>
        </v-row>

    </div>

</template>

<script>


export default {
  name: 'ArticlesAndVideosRoute',
  components: {
    
  }, 
  data() {
    return {
      videos: [
        {
          id: 1, 
          link: "https://www.youtube.com/embed/WFc08j9eorQ",
          title:"The 7 Habits of Highly Effective People Summary"
        }, 

        {
          id: 2, 
          link: "https://www.youtube.com//embed/t2sZ_W7TM5w",
          title:"The 7 Habits of Highly Effective People Summary"
        }, 

        {
          id: 3, 
          link: "https://www.youtube.com/embed/eaPYLq1NnzM",
          title:"Identifying BIG Priorities in Your Life- Stephen Covey"
        }, 

        {
          id: 4, 
          link: "https://www.youtube.com/embed/iKHTawgyKWQ",
          title:"Why you will fail to have a great career- Larry Smith"
        }, 

        {
          id: 5, 
          link: "https://www.youtube.com/embed/OMbsGBlpP30",
          title:"The Power of Habit-Charles Duhigg"
        }, 

        {
          id: 6, 
          link: "https://www.youtube.com/embed/4KqL_1G8JD8",
          title:"The 5 Levels of Leadership- John Maxwell"
        }, 

        {
          id: 7, 
          link: "https://www.youtube.com/embed/AVvk9-mslx4",
          title:"Top 10 Rules for Success- John Maxwell"
        }, 

        {
          id: 8, 
          link: "https://www.youtube.com/embed/VCB3j438rNY",
          title:"Top 10 Rules for Success- Brian Tracy"
        }
      ]
    }
  }
};
</script>
<style scoped>
  .video-header{
    font-style: normal;
    font-size: 32px;
    font-weight: 500;
  }
  .video-title{
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    text-align: center; 
  } 

  .video-box{
    width: 400px;
    height: 430px;
    margin-left: 25px;
  }

</style>