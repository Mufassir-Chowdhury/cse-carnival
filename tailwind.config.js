/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'navbar': '#280847',
        'navbar-button' : '#DB7B1B',
        'navbar-button-hover' : '#D35C18',
        'body':'#FFFAF1',
        'navbar-link':"#F0E0C6",
        'tab-header': '#F6EAD8'
      },
      textColor: {
        'navbar-link': '#F0E0C6',
        'navbar': '#280847',
        'title' : '#D35C18',

      },
      colors: {
        'navbar': '#280847',
        'navbar-button' : '#DB7B1B',
        'navbar-button-hover' : '#D35C18',
        'body':'#FFFAF1',
        'navbar-link':"#F0E0C6",
        'tab-header': '#F6EAD8',
        'card-body' : '#DB7B1B12',
        'organizer-body' : '#280847CC',
        'sponsor-body' : '#2808470D ',
        'title-body' : '#D35C180A',
        'title-border' : '#D35C184D',
        'iupc-body' : '#F0E0C62B',
        'iupc-border' : '#F0E0C680',
        'hackathon-body' : '#3F7A7B0D',
        'hackathon-border' : '#F0E0C680',
        'dlsprint-body' : '#DB7B1B0D',
        'dlsprint-border' : '#F0E0C680',
        'codebattle-body' : '#2808470D',
        'codebattle-border' : '',
        'aboutus-body' : '#F0E0C647',
        'aboutus-border' : '#F0E0C6',
        'event-details-border' : '#FFFAF1',
        'menu-body':'#F0E0C6CC',
        'field-body':'#F0E0C680',
        'field-border' : '#E7D1AE',
        'selectfield-body':'#3F7A7B26',
        'selectfield-border' : '#3F7A7B80',
        'field-title':'#280847',
        'field-placeholder' : '#280847C4',
      },
      backgroundImage: {
        'navbar-texture': "url('/image/background/Navbar Background Image.png')",
        'footer-texture': "url('/image/background/Footer Background Image.png')",
        'vector-home-left': "url('/image/background/HomeLeft.png')",
        'banner': "url('/image/banner/bannerHome.png')",
        'banner-hackathon': "url('/image/banner/bannerHackathon.jpg')",
        'banner-code-battle': "url('/image/banner/bannerCodebattle.jpg')",
      },
      
    },
  },
  plugins: [],
};

// tailwind.config.js

