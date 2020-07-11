function createModal(options){
    let modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin',
    `    <div class="modal-inner" data-close = "true">
    <div class="modal_content">
        <a href="tel:+380507873634"><i class="fas fa-phone-square"></i></a>
        <a href="mailto:artefan40@gmail.com"><i class="fas fa-envelope-square" style="padding-right: 0px;"></i></a>
        <i class="fas fa-times" data-close = "true" style="padding-right: 0px;font-size: 20px;position: absolute;top: 15px;right: 15px;cursor: pointer;"></i>
    </div>
</div>`
    )
    document.body.appendChild(modal)
    return modal
}

let modal = function(){
    let $modal = createModal()

    $modal.addEventListener('click',()=>{
        if(event.target.dataset.close){
            fnModal.close()
        }
    })

    return {
        open(){
            $modal.classList.add('open')
            document.body.style.overflowY = 'hidden'
        },
        close(){
            $modal.classList.remove('open')
            document.body.style.overflowY = 'scroll'
        },
        destroy(){

        }
    }
}
let fnModal = modal()

document.querySelector('.btn__left').addEventListener('click',()=>{
    event.preventDefault()
    fnModal.open()
})