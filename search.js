const inpsearch=document.getElementById("inpsearch");
const searchul=document.getElementById("searchul");

const searchli=document.querySelectorAll("#searchul a li");
const searcha=document.querySelectorAll("#searchul a");
document.addEventListener('click',(event)=>{
    let clicked=event.target;
    if(clicked==inpsearch || clicked==searchul)
    {
        searchul.style.display="block";
    }
    else
    {
        searchul.style.display="none";
    }
});


function searchalgo()
{
    let inputkey=inpsearch.value.toUpperCase();
    let k=0;
    for(let i=0;i<searchli.length-1;i++)
    {
    let reqkey=searchli[i].textContent.toUpperCase();
    if(reqkey.indexOf(inputkey)>-1)
    {
        k=1;
        searcha[i].style.display="block";
    }
    else
    {
        searcha[i].style.display="none";
    }
    }
    if(k==0)
    {
        searcha[11].style.display="block";
    }
    else
    {
        searcha[11].style.display="none";
    }
}