
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

const options = {
  autoWidth: false,
  center: false
}

const imgStyles = {
  width: "100%",
  height: "20rem",
  objectFit: "cover",
  borderRadius: '3px',
  display: 'inline-block',
  boxShadow: '1px 2px 1rem rgba(0,0,0, .5)'
};

export { sources, settings, imgStyles, options }
