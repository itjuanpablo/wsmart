// var imgslide = document.getElementById('slide-img')

// var images = [
//   '/assets/Depoimentos/Gustavo.png',
//   '/assets/Depoimentos/Ju-(Junia).png',
//   '/assets/Depoimentos/Juliana.png',
//   '/assets/Depoimentos/Silvia.png',
//   '/assets/Depoimentos/Thaynara.png',
//   '/assets/Depoimentos/Thi.png'
// ]

// var num = 0

// function next() {
//   num++
//   if (num >= images.length) {
//     num = 0
//     imgslide.src = images[num]
//   } else {
//     imgslide.src = images[num]
//   }
// }

// function back() {
//   num--
//   if (num <= 0) {
//     num = images.length - 1
//     currentImg.src = images[num]
//   } else {
//     currentImg.src = images[num]
//   }
// }

// // Adicionar transição automática a cada 1 minuto
// setInterval(function () {
//   next()
// }, 2000)

var imgslide = document.getElementById('slide-img')
var images = [
  '/assets/Depoimentos/Gustavo.png',
  '/assets/Depoimentos/Ju-(Junia).png',
  '/assets/Depoimentos/Juliana.png',
  '/assets/Depoimentos/Silvia.png',
  '/assets/Depoimentos/Thaynara.png',
  '/assets/Depoimentos/Thi.png'
]
var num = 0

function next() {
  num++
  if (num >= images.length) {
    num = 0
    imgslide.src = images[num]
  } else {
    imgslide.src = images[num]
  }
  updateActiveClass()
}

function back() {
  num--
  if (num <= 0) {
    num = images.length - 1
    imgslide.src = images[num]
  } else {
    imgslide.src = images[num]
  }
  updateActiveClass()
}

function updateActiveClass() {
  // remove a classe active de todas as imagens
  var allImages = document.querySelectorAll('.slider img')
  allImages.forEach(function (image) {
    image.classList.remove('active')
  })

  // adiciona a classe active na imagem atual
  var currentImage = document.querySelector(
    '.slider img:nth-child(' + (num + 1) + ')'
  )
  currentImage.classList.add('active')
}

// Adicionar transição automática a cada 1 minuto
setInterval(function () {
  next()
}, 45000)
