<template>
  <!-- vue:test -->
  <div >
    <MemberCard :team= "team">
     </MemberCard>
  </div>
</template>

<script>
import MemberCard from '@/components/TeamCard'
export default {
  name: 'TeamRoute',
  components: {
    MemberCard
  },
  data: () => ({
    team: [
      {
        name: 'Nassir Kowdan',
        profilePic: '/assets/images/place_holder.jpg',
        email: 'spshub.mentorship@gmail.com'
      },
      {
        name: 'Yasin Hundubay',
        profilePic: '/assets/images/place_holder.jpg',
        email: 'spshub.mentorship@gmail.com'
      },
      {
        name: 'Hussein Mohamud',
        profilePic: '/assets/images/place_holder.jpg',
        email: 'spshub.mentorship@gmail.com'
      },
      {
        name: 'Abdulqadir Diriye',
        profilePic: '/assets/images/ADirie.jpg',
        email: 'spshub.mentorship@gmail.com'
      },
      {
        name: 'Hassan Bashir',
        profilePic: '/assets/images/place_holder.jpg',
        email: 'spshub.mentorship@gmail.com'
      }

    ],
    emailAddress: 'spshub.mentorship@gmail.com'
  }),
  methods: {
    sendEmail(emailAddress) {
      window.location.href = `mailto:${emailAddress}?subject=I%20would%20like%20to%20know%20more%20about%20SPSHub!&body=`;
    }
  }
};
</script>

