let items = document.querySelectorAll('.portfolio__item')
let all = document.getElementById('all__active')
let landing = document.getElementById('emails__active')
let admin = document.getElementById('mockups__active')

!function filtration(){
    all.addEventListener('click',()=>{
        items.forEach(i=>i.style.display = 'block')
    })
    landing.addEventListener('click',()=>{
        items.forEach(i=>(i.dataset.filter != 'landing')?i.style.display = 'none':i.style.display = 'block')
    })
    admin.addEventListener('click',()=>{
        items.forEach(i=>(i.dataset.filter != 'admin')?i.style.display = 'none':i.style.display = 'block')
    })
}()
