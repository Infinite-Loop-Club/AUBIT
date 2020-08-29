
const sources = [{
  src: './images/slide-1.png',
  alt: 'slide-1'
}, {
  src: './images/slide-2.png',
  alt: 'slide-2'
}, {
  src: './images/slide-3.png',
  alt: 'slide-3'
}, {
  src: './images/slide-4.png',
  alt: 'slide-4'
}, {
  src: './images/slide-1.png',
  alt: 'slide-1'
}, {
  src: './images/slide-2.png',
  alt: 'slide-2'
}, {
  src: './images/slide-3.png',
  alt: 'slide-3'
}, {
  src: './images/slide-4.png',
  alt: 'slide-4'
},
]

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: true,
  items: 1,
  gutter: 10,
  autoplay: true, autoplayButtonOutput: false,
  fixedWidth: 250,
  responsive: {
    420: {
      items: 2,
    },
    600: {
      items: 3
    }
  },
  controls: false
};
export { sources, settings }
