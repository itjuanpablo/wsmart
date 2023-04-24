var imgslide = document.getElementById('slide-img')
var images = [
  '/assets/depoimentos wsmart/Gustavo.png',
  '/assets/depoimentos wsmart/Junia.png',
  '/assets/depoimentos wsmart/Silvia.png',
  '/assets/depoimentos wsmart/Juliana.png',
  '/assets/depoimentos wsmart/Thaynara.png',
  '/assets/depoimentos wsmart/Thiago.png'
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
}, 40000)
