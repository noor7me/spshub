import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Resources from "@/pages/ResourcesRoute";
import TeamRoute from "@/pages/TeamRoute";
import MissionAndVisionRoute from "@/pages/MissionAndVisionRoute";
import EventsRoute  from "@/pages/EventsRoute";
import ContactUsRoute from "@/pages/ContactUsRoute";
import loginVue       from "@/pages/loginVue";
import EventDetailsRoute from "@/pages/EventDetailsRoute";
import MemberProfileRoute from "@/pages/MemberProfileRoute";
import pastEventsRoute from "@/pages/pastEventsRoute";
import HomeRoute       from "@/pages/HomeRoute";
import ProfessionalsProfilesRoute from "@/pages/ProfessionalsProfilesRoute";
import ArticlesAndVideosRoute from "@/pages/ArticlesAndVideosRoute"

Vue.use(VueRouter);

const routes = [
  {
    path: "/HomeRoute",
    name: "HomeRoute",
    component: HomeRoute
  },
  {
    path: '/',
    name: "Resources",
    component: Resources
  },
  {
    path: "/about/team",
    name: "TeamRoute",
    component: TeamRoute
  },

  {
    path: "/about/mission-and-vision",
    name: "MissionAndVisionRoute",
    component: MissionAndVisionRoute
  },
  {
    path: "/EventsRoute",
    name: 'EventsRoute',
    component: EventsRoute
  },
  {
    path: "/contactus",
    name: 'ContactUsRoute',
    component: ContactUsRoute
  },
  {
    path: "/login",
    name: "loginVue",
    component: loginVue
  },
  {
    path: "/EventDetailsRoute",
    name: "EventDetailsRoute",
    component: EventDetailsRoute
  },
  {
    path: "/MemberProfileRoute",
    name: "MemberProfileRoute",
    component: MemberProfileRoute
  },
  {
    path: "/pastEventsRoute",
    name: "pastEventsRoute",
    component: pastEventsRoute
  },
  {
    path: "/ProfessionalsProfilesRoute",
    name: "ProfessionalsProfilesRoute",
    component: ProfessionalsProfilesRoute
  },
  {
    path: "/ArticlesAndVideosRoute",
    name: "ArticlesAndVideosRoute",
    component: ArticlesAndVideosRoute
  } 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
