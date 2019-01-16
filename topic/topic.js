var height=document.documentElement.scrollTop
var bgPic=document.querySelector('.bgPic')

function onScroll(){
    height=document.documentElement.scrollTop
    console.log(height);
    if(height<500){
        bgPic.style.backgroundImage='url("Images/bgPic.JPG")'
        bgPic.style.marginTop='-300px'
    }
    else if(height>700&&height<2500){
        bgPic.style.backgroundImage='url("Images/小洛.jpg")'
        bgPic.style.marginTop='-100px'
    }
    else if(height>2500){
        bgPic.style.backgroundImage='url("Images/IMG_0349.JPG")'
        bgPic.style.marginTop='-100px'
    }
    if(height>=300){
        var target=document.querySelector('.D img');
        target.classList.remove('hidde');
        target.style.animation="picOut 1s";

        var tardin=document.querySelector('.din1');
        tardin.classList.remove('hidde');
        tardin.style.animation="din_in1 0.5s";
    }
    if(height>=800){
        var target=document.querySelector('.L img');
        target.classList.remove('hidde');
        target.style.animation="picOut3 1s";

        var tardin=document.querySelector('.din2');
        tardin.classList.remove('hidde');
        tardin.style.animation="din_in2 0.5s";
    }
    if(height>=2050){
        var target=document.querySelector('.F img');
        target.classList.remove('hidde');
        target.style.animation="picOut2 1s";

        var tardin=document.querySelector('.din3');
        tardin.classList.remove('hidde');
        tardin.style.animation="din_in1 0.5s";
    }
    if(height>=2600){
        var target=document.querySelector('.W img');
        target.classList.remove('hidde');
        target.style.animation="picOut3 1s";

        var tardin=document.querySelector('.din4');
        tardin.classList.remove('hidde');
        tardin.style.animation="din_in2 0.5s";
    }
    if(height>=3950){
        var target=document.querySelector('.B img');
        target.classList.remove('hidde');
        target.style.animation="picOut2 1s";

        var tardin=document.querySelector('.din5');
        tardin.classList.remove('hidde');
        tardin.style.animation="din_in1 0.5s";
    }
    if(height>=4550){
        var target=document.querySelector('.N img');
        target.classList.remove('hidde');
        target.style.animation="picOut3 1s";

        var tardin=document.querySelector('.din6');
        tardin.classList.remove('hidde');
        tardin.style.animation="din_in2 0.5s";
    }
}

document.addEventListener('scroll',onScroll)