const showMore = document.querySelector('#showMore');
const picturesGrid = document.querySelector('.Main2-Pictures-Grid');

showMore.addEventListener('click', function (){
    for(let i=0; i < 3; i++) {
        const newImg = document.createElement('img');
        newImg.classList.add("Main2-Pictures");
        newImg.setAttribute("src", "img/Main_Cat2.png");
        picturesGrid.appendChild(newImg);
        console.log('추가요!')
    }
})

const subscribe = document.querySelector('#subscribe');
const modal = document.querySelector('.modal')
const modalOK = document.querySelector('#Modal_OK');

subscribe.addEventListener('click', function (){
    console.log("모달창열기");
    modal.style.visibility = 'visible';
})

modalOK.addEventListener('click', function (){
    console.log("모달창닫기");
    modal.style.visibility = 'hidden';
})