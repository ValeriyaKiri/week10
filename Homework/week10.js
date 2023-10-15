function sayIntentions(){
    console.log("Я учу JavaScript!");
}

sayIntentions();

let image = document.getElementById('image');

function changePhotoNext(){
    image.src = "https://i.pinimg.com/originals/b1/cc/99/b1cc9987043f82eda1963ab8ba5d03c5.jpg";
}
function changePhotoPrevious(){
    image.src = "https://cs13.pikabu.ru/post_img/big/2023/09/11/5/1694416670162565263.jpg";
}
