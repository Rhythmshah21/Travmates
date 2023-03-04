// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        playfair :["Playfair Display","sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],        
      },
      backgroundImage:{
        'bgphoto' : 'url("https://www.pixelstalk.net/wp-content/uploads/images6/Travel-HD-Wallpaper-Free-download.jpg")',
        'bgphoto2' : 'url("http://cdn.cnn.com/cnnnext/dam/assets/200310023921-dubai-buildings-skyline.jpg")',
        'bgphoto3' : 'url("https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2699520__480.jpg")',
      }
    },
  },
  plugins: [require("daisyui")],
};