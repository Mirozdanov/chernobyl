const slides = document.querySelector('.slides')
const slideCount = document.querySelectorAll('.slide').length
const dots = document.querySelectorAll('.dot')
const upBtn = document.getElementById('up')
const downBtn = document.getElementById('down')
const slides_class = document.querySelectorAll('.slide')
let currentIndex = 0
function updateSlider() {
    slides.style.transform = `translateY(-${currentIndex * 100}vh)`
    dots.forEach(dot => dot.classList.remove('active'))
    dots[currentIndex].classList.add('active')
    
    slides_class.forEach(slide => slide.classList.remove('active-slide'))
    slides_class[currentIndex].classList.add('active-slide')
}
dots.forEach(dot => {
    dot.addEventListener('click', (e) =>{
        currentIndex = +e.target.dataset.index
        updateSlider()
    })
})
upBtn.addEventListener('click', () =>{
    currentIndex--
    if (currentIndex < 0) { currentIndex = slideCount - 1}
    updateSlider()
})
downBtn.addEventListener('click', () =>{
    currentIndex++
    if (currentIndex >= slideCount) { currentIndex = 0 }
    updateSlider()
})