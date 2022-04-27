    var third = document.getElementsByClassName("third");
    var three = document.getElementsByClassName("three");
    var nav = document.getElementsByClassName("nav");
    var other = document.getElementsByClassName("other");

    for(var i in third){
        third[i].onmouseover = triple_show;
    }
    for (var i in other){
        other[i].onmousemove = triple_hide;
    }
    function triple_show() {
        this.parentNode.children[1].style.display = "block";
    }
    function triple_hide() {
        this.parentNode.children[1].style.display = "none";

    }

    for(var i in nav){
        nav[i].onmouseover = plat_show;
    nav[i].onmouseout=plat_hide;
    }
    function plat_show() {
        this.getElementsByClassName("plat")[0].style.display = "block";
    }
    function plat_hide() {
        this.getElementsByClassName("plat")[0].style.display = "none";
    }


    function change_ifame(url) {
        var my_frame = document.getElementById("my-frame");
    my_frame.setAttribute("src", url);
    }