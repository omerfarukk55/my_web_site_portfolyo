(()=>{let l=(e,t=!1)=>(e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e)),i=(t,e,o,i=!1)=>{e=l(e,i);e&&(i?e.forEach(e=>e.addEventListener(t,o)):e.addEventListener(t,o))};var t=(e,t)=>{e.addEventListener("scroll",t)};let e=l("#navbar .scrollto",!0);var o=()=>{let o=window.scrollY+200;e.forEach(e=>{var t;e.hash&&(t=l(e.hash))&&(o>=t.offsetTop&&o<=t.offsetTop+t.offsetHeight?e.classList.add("active"):e.classList.remove("active"))})};window.addEventListener("load",o),t(document,o);let a=e=>{e=l(e).offsetTop;window.scrollTo({top:e,behavior:"smooth"})},s=l(".back-to-top"),n=(s&&(o=()=>{100<window.scrollY?s.classList.add("active"):s.classList.remove("active")},window.addEventListener("load",o),t(document,o)),i("click",".mobile-nav-toggle",function(e){l("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}),i("click",".scrollto",function(e){l(this.hash)&&(e.preventDefault(),(e=l("body")).classList.contains("mobile-nav-active")&&(e.classList.remove("mobile-nav-active"),(e=l(".mobile-nav-toggle")).classList.toggle("bi-list"),e.classList.toggle("bi-x")),a(this.hash))},!0),window.addEventListener("load",()=>{window.location.hash&&l(window.location.hash)&&a(window.location.hash)}),l("#preloader"));if(n&&window.addEventListener("load",()=>{n.remove()}),t=l(".typed")){let e=t.getAttribute("data-typed-items");e=e.split(","),new Typed(".typed",{strings:e,loop:!0,typeSpeed:100,backSpeed:50,backDelay:2e3})}(o=l(".skills-content"))&&new Waypoint({element:o,offset:"80%",handler:function(e){l(".progress .progress-bar",!0).forEach(e=>{e.style.width=e.getAttribute("aria-valuenow")+"%"})}}),window.addEventListener("load",()=>{var e=l(".portfolio-container");if(e){let t=new Isotope(e,{itemSelector:".portfolio-item"}),o=l("#portfolio-flters li",!0);i("click","#portfolio-flters li",function(e){e.preventDefault(),o.forEach(function(e){e.classList.remove("filter-active")}),this.classList.add("filter-active"),t.arrange({filter:this.getAttribute("data-filter")}),t.on("arrangeComplete",function(){AOS.refresh()})},!0)}}),GLightbox({selector:".portfolio-lightbox"}),GLightbox({selector:".portfolio-details-lightbox",width:"90%",height:"90vh"}),new Swiper(".portfolio-details-slider",{speed:400,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),window.addEventListener("load",()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})}),new PureCounter})();