/** @type {import('tailwindcss').Config} */
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
        'aboutbg':'url("https://static.wixstatic.com/media/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg/v1/fill/w_2850,h_950,al_b,q_90,usm_0.66_1.00_0.01,enc_auto/5bfb6f_26f1a5c736e544e09c63c82a4c792645~mv2_d_3839_1306_s_2.jpg")'
      }
    },
  },
  plugins: [require("daisyui")],
};
