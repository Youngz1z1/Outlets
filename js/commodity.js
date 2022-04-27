var left = document.getElementById("left");
var mid = document.getElementById("mid");
var right = document.getElementById("right");
left.style.display='block';
mid.style.display='none';
right.style.display='none';
function left1(){
    left.style.display='block';
    mid.style.display='none';
    right.style.display='none'; 
}
function mid1(){
    left.style.display='none';
    mid.style.display='block';
    right.style.display='none'; 
}
function right1(){
    left.style.display='none';
    mid.style.display='none';
    right.style.display='block'; 
}

var btn = document.querySelectorAll('#btn');
for (var i= 0;i<btn.length;i++){
    btn[i].setAttribute('index',i);
    btn[i].addEventListener('click',function(){
        for (var i= 0;i<btn.length;i++){
            btn[i].className='';
        }
        this.className='color_b';
    });
    // btn[i].className = 'color_b';
}