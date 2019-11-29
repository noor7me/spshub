export default {
    header: {
        name: 'SPSHub',
        title: 'Somali Professionals & Students Hub',
        button1: 'Contact Us',
        button1Link: '/contact-us',
        button2: 'Join SPSHub Today!',
        button2Link: '/join-spshub',
        button3: 'Become a Mentor!',
        button3Link: '/become-mentor'
      },
    navigation: {
        links: [
            {
                id: 1,
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
                id: 2,
                label: "join Us",
                url: "",
                subpages: [
                    {
                        label: 'Became a Mentor',
                        isForm: true,
                        href_form: 'https://forms.gle/Lsm1tvrmnBQSpuv9A',
                        url: ''
                    },
                    {
                        label: 'Became a Mentee',
                        href_form: 'https://forms.gle/tJoSZKvbfGLrsX7V8',
                        url: ''
                    },
                    {
                        label: 'Subscribe for Events',
                        url: ''
                    }
                ]
            },

            {
                id: 3,
                label: "Resources",
                url: "/",
                subpages: [
                    {
                        label: "Professionals Profiles",
                        url:    "/ProfessionalsProfilesRoute"
                    },
                    {
                        label: "Articles And Videos",
                        url: "/ArticlesAndVideosRoute"
                    }
                ]
            },
            {
                id: 4,
                label: "Events",
                url: "",
                subpages: [
                    {
                        label: 'Upcoming Events',
                        url: "/EventsRoute"
                    },
                    {
                        label: 'Past Events',
                        url: "/pastEventsRoute"
                    }
                ]
                
            },
    
        ]
    },
    footer: {
        subheading: 'Get connected with us on social media!',
        name: 'SPSHub',
        links: [
          {
            id: 0,
            name: 'Facebook',
            link: 'facebook-link',
            icon: 'fab fa-facebook'
          },
          {
            id: 1,
            name: 'Twitter',
            link: 'twitter-link',
            icon: 'fab fa-twitter'
          },
          {
            id: 2,
            name: 'Instagram',
            link: 'instagram-link',
            icon: 'fab fa-instagram'
          },
          {
            id: 3,
            name: 'YouTube',
            link: 'youtube-link',
            icon: 'fab fa-youtube'
          }
        ]
    }
};