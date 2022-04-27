// index：索引， len：长度
var index = 0, len;
var m = 2;
// 类似获取一个元素数组
var imgBox = document.getElementsByClassName("abs");
var next = document.getElementById("next")
var left = document.getElementById("left")
len = imgBox.length;
imgBox[index].style.display = 'block';
// 逻辑控制函数
index++;
// 防止数组溢出
next.style.display = 'none'
for (var i = 0; i < len; i++) {
    imgBox[i].style.display = 'none';
}

// 每次只有一张图片显示
imgBox[index].style.display = 'block';
function slideShowup() {
    index++;
    // 防止数组溢出
    //if (index >= len) index=0;
    if (index >= len - 1) {
        left.style.display = 'none'
    } else next.style.display = 'block'
    for (var i = 0; i < len; i++) {
        imgBox[i].style.display = 'none';
    }

    // 每次只有一张图片显示
    imgBox[index].style.display = 'block';
}
function slideShowdown() {
    index--;
    // 防止数组溢出
    //if (index < 0) index=len-1;
    if (index < 2) {
        next.style.display = 'none'
    } else left.style.display = 'block'
    for (var i = len - 1; i >= 0; i--) {
        imgBox[i].style.display = 'none';
    }
    // 每次只有一张图片显示
    imgBox[index].style.display = 'block';
}