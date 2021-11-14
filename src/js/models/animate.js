//import * as $ from 'jquery'
import { gsap } from "gsap";
//import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.utils.toArray(".parallax").forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth)
    tl.to(layer, {y: movement, ease: "none"}, 0)
  });
      

  gsap.registerPlugin(ScrollTrigger);