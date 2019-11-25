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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
  } 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
