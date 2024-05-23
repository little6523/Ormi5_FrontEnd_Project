const showMore = document.querySelector('#showMore');
const picturesGrid = document.querySelector('.Main2-Pictures-Grid');

showMore.addEventListener('click', function (){
    fetch("https://picsum.photos/v2/list?page=2&limit=100")
        .then((response) => response.json())
        .then((data) => {
            for(let i=0; i < 3; i++) {
                let randomNumber = Math.floor(Math.random() * 100);
                let imageUrl = data[randomNumber]['download_url'];
                let newImg = document.createElement('img');
                newImg.classList.add("Main2-Pictures");
                newImg.setAttribute("src", imageUrl);
                picturesGrid.appendChild(newImg);
            }
        });
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