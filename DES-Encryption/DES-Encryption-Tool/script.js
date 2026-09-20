document.addEventListener("DOMContentLoaded", function () {
     const fadeElements = document.querySelectorAll(".box");
     
     const handleScroll = () => {
          fadeElements.forEach((element) => {
               const rect = element.getBoundingClientRect();
               const windowHeight = window.innerHeight;
               
               // Check if the element is within the viewport
               if (rect.top < windowHeight - 50) {
                    element.classList.add("visible");
               }
          });
     };
     
     window.addEventListener("scroll", handleScroll);
     
     // Trigger animation on page load
     handleScroll();
});


document.addEventListener("DOMContentLoaded", function () {
     const fadeElements2 = document.querySelectorAll(".hh3");
     
     const handleScroll2 = () => {
          fadeElements2.forEach((element) => {
               const rect2 = element.getBoundingClientRect();
               const windowHeight2 = window.innerHeight;
               
               // Check if the element is within the viewport
               if (rect2.top < windowHeight2 - 50) {
                    element.classList.add("visible");
               }
          });
     };
     
     window.addEventListener("scroll", handleScroll2);
     
     // Trigger animation on page load
     handleScroll2();
});