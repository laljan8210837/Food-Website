const mobileV = document.querySelector('.fa-bars');
const mobilenav=document.querySelector('.sidebar');
// console.log(mobilenav);

mobileV.addEventListener("click", function(){

  mobileV.classList.toggle("is-active");
  mobilenav.classList.toggle("active");
} 
)

// Close Manu When Click
mobilenav.addEventListener('click', function() {

  const fabars=document.querySelector(".is-active")

  if ( window.innerWidth <=729 && fabars)
  {
    mobileV.classList.toggle("is-active")
    mobilenav.classList.toggle("active");
  }
})

const container = document.querySelector('.main-filter');
const content = document.querySelector('.filter-wrapper');
const item1 = document.querySelectorAll('.filter-card');
const item2 = document.querySelector('.arright');
// console.log(item2);

item2.addEventListener('click', function () {
  
  // content.classList.toggle('back-and-far');
  // content.classList.toggle('back-and-back');
  
})


// const arrow1 = document.querySelector('.fa-circle-arrow-left');
// const arrow2 = document.querySelector('.fa-circle-arrow-right');
// console.log(items);

// let itemWidth = items[0].offsetWidth;
// let currentIndex = 0;

// function scrollForward() {
//     currentIndex = (currentIndex + 1) % items.length;
//     updateCarousel();
// }

// function scrollBackward() {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     updateCarousel();
// }

// function updateCarousel() {
//     const offset = -currentIndex * itemWidth;
//     content.style.left = offset + 'px';
// }

// window.addEventListener('resize', () => {
//     itemWidth = items[0].offsetWidth;
//     updateCarousel();
// });

// updateCarousel();
// const arrowF = document.querySelector('.fa-circle-arrow-left');
// const arrowB = document.querySelector('.fa-circle-arrow-right');
// const wrapper =document.querySelector('.highlight-wrapper');
// // console.log(wrapper);

// arrowF.addEventListener('click', function () {
//     wrapper.scrollIntoView
    
// })



// clicik arrows to next and back Manu
// var step =100;
// var stepFilter =60;
// var scrolling =true;

// $(".fa-circle-arrow-left").bind("click",function(e) {
//   e.preventDefault();

//   $(".highlight-wrapper").animate({
//     scrollLeft: "-=" + step + "px"
//   })

  
// })

// $(".fa-circle-arrow-right").bind("click",function(e) {
//   e.preventDefault();

//   $(".highlight-wrapper").animate({
//     scrollRight: "+=" + step + "px"
//   })

// })


// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         #carousel-container {
//             width: 300px;
//             overflow: hidden;
//             position: relative;
//         }

//         #carousel-content {
//             display: flex;
//             transition: left 0.5s;
//         }

//         .carousel-item {
//             width: 300px;
//             height: 150px;
//         }
//     </style>
// </head>
// <body>
//     <div id="carousel-container">
//         <div id="carousel-content">
//             <div class="carousel-item">Item 1</div>
//             <div class="carousel-item">Item 2</div>
//             <div class="carousel-item">Item 3</div>
//             <div class="carousel-item">Item 4</div>
//         </div>
//     </div>
//     <button onclick="scrollForward()">Next</button>
//     <button onclick="scrollBackward()">Previous</button>

//     <script>
//         const container = document.getElementById('carousel-container');
//         const content = document.getElementById('carousel-content');
//         const items = document.querySelectorAll('.carousel-item');

//         let itemWidth = items[0].offsetWidth;
//         let currentIndex = 0;

//         function scrollForward() {
//             currentIndex = (currentIndex + 1) % items.length;
//             updateCarousel();
//         }

//         function scrollBackward() {
//             currentIndex = (currentIndex - 1 + items.length) % items.length;
//             updateCarousel();
//         }

//         function updateCarousel() {
//             const offset = -currentIndex * itemWidth;
//             content.style.left = offset + 'px';
//         }

//         window.addEventListener('resize', () => {
//             itemWidth = items[0].offsetWidth;
//             updateCarousel();
//         });

//         updateCarousel();
//     {/* </script>
// </body>
// </html> */}
