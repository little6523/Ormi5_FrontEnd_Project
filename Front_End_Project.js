const showMore = document.querySelector('#showMore');
const picturesGrid = document.querySelector('.Main2-Pictures-Grid');

showMore.addEventListener('click', getImages);

function getImages(){
    let randomPage = Math.floor(Math.random() * 10);

    $.ajax({
        url: `https://picsum.photos/v2/list?page=${randomPage}&limit=6`,
        type: "get",
        datatype: "json",
        async: true,
        success: function (images) {
            images.forEach((image)=>{
                picturesGrid.insertAdjacentHTML('beforeend', `<img class="Main2-Pictures" src="${image.download_url}">  alt=""`)
            });
        },
        error: function (){
            alert('error');
        }
    })
}

const subscribe = document.querySelector('#subscribe');
const modal = document.querySelector('.modal')
const modalOK = document.querySelector('#Modal_OK');

subscribe.addEventListener('click', function () {
    console.log("모달창열기");
    modal.style.visibility = 'visible';
})

modalOK.addEventListener('click', function () {
    console.log("모달창닫기");
    modal.style.visibility = 'hidden';
})

