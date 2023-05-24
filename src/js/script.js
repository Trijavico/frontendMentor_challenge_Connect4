const $cta = document.querySelector('[data-modal-open]');
const $btnClose = document.querySelector('[data-modal-close]');
const $modal = document.querySelector('.modal')

$cta.addEventListener('click', () =>{
    $modal.showModal();
});

$btnClose.addEventListener('click', () =>{
    $modal.close();
})