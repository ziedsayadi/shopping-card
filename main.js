function UpPrice(price,idItem)
{  
    let str1 =document.getElementById("price-counter");
    let str2 =document.getElementById(idItem);
    var x = +document.getElementById("price-counter").textContent;
    x+=price;
    str1.innerHTML = x;
    var z = +document.getElementById(idItem).textContent;
    z=z+1;
    str2.innerHTML = z;
    
}



function DownPrice(price,idItem)
{  
    let str1 =document.getElementById("price-counter");
    let str2 =document.getElementById(idItem);
    var x = +document.getElementById("price-counter").textContent;
    var z = +document.getElementById(idItem).textContent;
   
    if (z>0)
    {
        x=x-price;
        str1.innerHTML = x;    
        z=z-1;
        str2.innerHTML = z;
    }
    
}

function delet(price,idItem)
  {
    let str1 =document.getElementById("price-counter");
    let str2 =document.getElementById(idItem);
    var x = +document.getElementById("price-counter").textContent;
    var y = +document.getElementById(idItem).textContent;
    x=x-(price*y);
    str1.innerHTML = x;

    let item1delet=document.getElementById("item-delet")
    item1delet.parentElement.remove()
  }


let test = true; // variable global

function heartColor(test) 
{
  if (test)
  {
    $("#bg1").css("color","red");
  }
    else
    {
      $("#bg1").css("color","grey");
      test = !test;
    }
}
 
 function heartColor() 
 {
   if (document.activeElement.children[0].style.color != "red")
     document.activeElement.children[0].style.color = "red";
   else
     document.activeElement.children[0].style.color = "grey";
 }
