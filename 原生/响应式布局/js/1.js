window.onload = function () {
    var flag=false;
    btn = document.getElementsByClassName('menu-link')
    layout = document.getElementsByClassName('layout')
    menu = document.getElementsByClassName('menu')
    // btn=document.querySelector('.menu-link')
    // console.log(btn)
    btn[0].onclick = function (e) {
        console.log(flag)
        if(!flag){
            btn[0].style.left='150px'
            menu[0].style.left = "0"
            layout[0].style.paddingLeft = '150px'
            flag=true;
        }else{
            btn[0].style.left='0'
            menu[0].style.left = "-150px"
            layout[0].style.paddingLeft = '0'
            flag=false;
        }
    }
}