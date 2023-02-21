const elems = document.querySelectorAll(".tilt");

// v2
const universalTilt = UniversalTilt.init({
  elements: elems,
  settings: {
    // options...
    shine: true,
    "shine-opacity": 0.5,
    "shine-save": true,
  },
  callbacks: {
    // callbacks...
  },
});
