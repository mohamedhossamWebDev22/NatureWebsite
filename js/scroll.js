var mybtn = document.getElementById("top");

window.onscroll = function () {enzlFun()};

function enzlFun() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280){
        mybtn.style.display = "block";
    }
    else{
        mybtn.style.display = "none";
    }
}

function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}