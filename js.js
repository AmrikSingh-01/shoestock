//for sticky sections********************************************/
document.getElementById("nike").style.top = document.querySelector('.navbar').offsetHeight  + "px";
document.getElementById("adidas").style.top = document.querySelector('.navbar').offsetHeight  + "px";
document.getElementById("puma").style.top = document.querySelector('.navbar').offsetHeight  + "px";
document.getElementById("trust").style.top = document.querySelector('.navbar').offsetHeight  + "px";
//***************************************** */


// for scroll*********************************************************/
const scrolldiv=document.getElementsByClassName('scrolldiv');
for(let i=0;i<scrolldiv.length;i++){

    scrolldiv[i].style.setProperty('transform',`translateY(${-1*document.querySelector('.navbar').offsetHeight}px)`);
}
//********************** */


// for video***************************************************** */

const playicon = document.getElementsByClassName("playicon");
const pic = document.getElementsByClassName("pic");
const vid = document.getElementsByClassName("vid");
const closevid = document.getElementsByClassName("close");
const cover = document.getElementsByClassName("cover");

function playvideo(file,i) {
    var a=i;
    playicon[i].style.transform = "translate(-50%, -50%) scale(0.9)";
    playicon[i].style.transition = "transform 0.1s";
    setTimeout(() => {
        playicon[i].style.transform = "translate(-50%, -50%) scale(1)";
        playicon[i].style.transition = "transform 0.1s";
    }, 100);
    setTimeout(() => {
        playicon[i].style.display = "none";
        pic[i].style.display = "none";
        cover[i].style.display = "none";
        vid[i].style.display = "initial";
        closevid[i].style.display = "initial";
        vid[i].src = file;

    }, 200);

//if video ends then what***********/
    vid[i].addEventListener('ended', (event) => {
        vid[a].style.display = "none";
        closevid[a].style.display = "none";
        playicon[a].style.display = "initial";
        pic[a].style.display = "initial";
        cover[a].style.display = "initial";
    });
    //******************************************************* */
}



function closevideo(i) {
    closevid[i].style.transform = "scale(0.9)";
    closevid[i].style.transition = "transform 0.1s";
    setTimeout(() => {
        closevid[i].style.transform = "scale(1)";
        closevid[i].style.transition = "transform 0.1s";
    }, 100);
    setTimeout(() => {
        playicon[i].style.display = "initial";
        pic[i].style.display = "initial";
        cover[i].style.display = "initial";
        vid[i].style.display = "none";
        closevid[i].style.display = "none";
    }, 200);
}

/*************************hide navbar on scroll */
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.transform = "translateY(0)";
//   } else {
//     document.getElementById("navbar").style.transform = "translateY(-100%)";
//   }
//   prevScrollpos = currentScrollPos;
// }
/****************************** */

/******************form************** */
function funform() {
    document.getElementById("myform").submit();
    setTimeout(() => {
        document.getElementById("myform").reset();
    }, 10);
}
/************************************* */
