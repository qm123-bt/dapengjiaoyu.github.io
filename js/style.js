var photos = document.getElementsByClassName('photo');
var index = 0;
var time = 0;
var clearActive = function() {
    for(var i = 0 ; i<photos.length ; i++) {
        photos[i].className = 'photo'
    }  
}
var goIndex = function() {
    clearActive();
    photos[index].className = "photo active";
}
var goNext = function() {
    if (index < 4) {
        index ++;
    }else {
        index = 0;
    }
    goIndex();
}

setInterval(function() {
    time ++;
    if (time == 20) {
        goNext();
        time = 0;
    } 
},100)