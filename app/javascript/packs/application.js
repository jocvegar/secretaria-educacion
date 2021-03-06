// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("custom/index")
require("custom/chosen_jquery")
require("custom/chosen_select")
require("custom/flatpickr")
require("custom/sortable")

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/application'
// DatePicker
import 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Sortablejs
import Sortable from 'sortablejs';
window.Sortable = Sortable;

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js', { scope: './' })
    .then(function(reg) {
      console.log('[Companion]', 'Service worker registered!');
      console.log(reg);
    });
}
