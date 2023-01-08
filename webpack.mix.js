let mix = require("laravel-mix");

mix.disableNotifications()

mix.js("src/js/app.js", "public/").sass("src/scss/app.scss", "public/");

// Autoprefixer is enabled by default, see:
// https://laravel-mix.com/docs/6.0/autoprefixer
