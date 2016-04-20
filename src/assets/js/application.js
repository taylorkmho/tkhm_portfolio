require('es6-shim');
require('./lib/_nodelist-shim');
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
import { addClass, removeClass } from "./lib/_helpers";

let Blazy              = require('blazy');

/*
  Image lazy-loading
  via blazy.js
*/

let blazy = new Blazy({
  selector: '.lazyload',
  successClass: 'lazyloaded',
  errorClass: 'lazyerrored',
  src: 'data-src',
  breakpoints: [{
    width: 768,
    src: 'data-src-small'
  }],
  error: function(ele, msg){
    if(msg === 'missing'){
      console.log(ele + ' was missing')
    }
    else if(msg === 'invalid'){
      console.log(ele + ' was invalid')
    }
  }
});

/*
  Projects scroll-based animations
  via ScrollMagic + its GSAP plug-in
*/

let ScrollMagic        = require('scrollmagic');

let controller = new ScrollMagic.Controller();

const projects = document.querySelectorAll('.project');
for (let el of projects) {
  var bgTween = TweenMax.fromTo(el, 1,
    { backgroundColor: "rgba(34,34,34,1)" },
    { backgroundColor: "rgba(34,34,34,0)" }
  );
  let scene = new ScrollMagic.Scene(
      {
        triggerElement: el,
        duration: '25%'
      }
    )
    .setTween(bgTween)
    .addTo(controller);

  var screenTween = TweenMax.fromTo(el.querySelector('.project__screenshot'), 1,
    { scale: '1',   rotation: '0' },
    { scale: '1.1', rotation: '4' }
  );

  let scene02 = new ScrollMagic.Scene(
      {
        triggerElement: el,
        duration: '25%'
      }
    )
    .setTween(screenTween)
    .addTo(controller);
}

/*
  Projects scroll-based animations
  via GSAP library
*/

// UI/UX graphic in intro.css

// PROTOTYPING graphic (panel 2)
let tlHand = new TimelineMax({repeat: -1});
let hand = document.querySelector('.graphic--prototyping__hand');
tlHand.add( TweenLite.to(hand, .125, {scale:.9, transformOrigin:"center center"}) );
tlHand.add( TweenLite.to(hand, .25,  {scale:1}) );
tlHand.add( TweenLite.to(hand, 2.625, {scale:1}) );

let tlBox1 = new TimelineMax({repeat: -1});
let box1 = document.querySelector('.graphic--prototyping__box--01');
tlBox1.add(
  TweenMax.fromTo(box1, .25,
    {width:52, fill: '#555', stroke: '#bbb'},
    {width:86, fill: '#F24C27', stroke: '#F24C27', transformOrigin:"left center", delay: .125}
  )
);
tlBox1.add( TweenLite.to(box1, .25, {width:52, fill: '#555', stroke: '#bbb', delay: 2.75}) );
tlBox1.add( TweenLite.to(box1, 2.625, {width:52 }) );

let tlBox2 = new TimelineMax({repeat: -1});
let box2 = document.querySelector('.graphic--prototyping__box--02');
tlBox2.add( TweenLite.to(box2, .25, {x: '100%', opacity: 0, delay: .125}) );
tlBox2.add( TweenLite.to(box2, .25,  {x: '0%', opacity: 1, delay: 2.75}) );
tlBox2.add( TweenLite.to(box2, 2.625, {x: '0%'}) );

// DEVELOPMENT graphic (panel 3)
const graphicProjects = document.querySelectorAll('.graphic--development__device');
for (let el of graphicProjects) {
  let elBoxes = el.querySelectorAll('.graphic--development__boxes rect');
  let elScreen = el.querySelector('.graphic--development__screen');
  console.log(elBoxes);

  let tlDevice = new TimelineMax({repeat: -1});
  tlDevice.add( TweenLite.fromTo(elScreen, .25, {fill:'#F24C27'},{fill:'#fff', delay: 1}) );
  tlDevice.add( TweenLite.fromTo(elBoxes[0], .125, {y:'2px', opacity: 0}, {y:'0px', opacity: 1}) );
  tlDevice.add( TweenLite.fromTo(elBoxes[1], .125, {y:'2px', opacity: 0}, {y:'0px', opacity: 1}) );
  tlDevice.add( TweenLite.fromTo(elBoxes[2], .125, {y:'2px', opacity: 0}, {y:'0px', opacity: 1}) );
  tlDevice.add( TweenLite.to(elBoxes[0], .125, {fill:'#f24c27', stroke:'#f24c27', delay: 4}) );
  tlDevice.add( TweenLite.to(elBoxes[0], .25, {clearProps: 'fill,stroke'}) );
  tlDevice.add( TweenLite.to(elBoxes[1], .125, {y:'2px', opacity: 0}) );
  tlDevice.add( TweenLite.to(elBoxes[2], .125, {y:'2px', opacity: 0}) );
  tlDevice.add( TweenLite.to(elBoxes[0], .125, {y:'2px', opacity: 0}) );
  tlDevice.add( TweenLite.to(elScreen, .5, {fill:'#f24c27'}) );
}