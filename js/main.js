"use strict"
document.addEventListener('click', documentClick);

function documentClick(e) {
   const targetItem = e.target;

   if (targetItem.closest('.icon-menu')) {
      document.documentElement.classList.toggle('menu-open');
   }
}


//animaton
function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
      }
   });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
   observer.observe(elm);
}

//parallax
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);