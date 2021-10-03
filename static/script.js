// SELECTING ELEMENTS 

//STATS TOOL TIP
const statsButton = document.querySelector("#statsButton")
const statsToolTip = document.querySelector('#statsToolTip')

//CLOSE STATS TOOL TIP
document.querySelector('.closeToolTip').addEventListener('click',function(e){
e.preventDefault(e);
statsToolTip.classList.add('hidden');

})

//OTHERS TOOL TIP
const othersButton = document.querySelector("#othersButton")
const  othersToolTip= document.querySelector('#othersToolTip')

//navbarshrinkbutton
const nbCloseButton = document.querySelector('#nbCloseBtn');
const navbarContainer = document.querySelector('.navbar-container');
const mapContainer = document.querySelector('.map-container');



//OPEN STATS TOOLTIP
statsButton.addEventListener('click',function(e){
e.preventDefault();
statsToolTip.classList.remove('hidden');

})

//CLOSE STATS TOOLTIP
/*
closeBtn.addEventListener('click',function(e){
 e.preventDefault();
statsToolTip.classList.add('hidden');
})
*/
//OPEN STATS TOOLTIP
othersButton.addEventListener('click',function(e){
e.preventDefault();
othersToolTip.classList.remove('hidden');

})

//CLOSE OTHERS TOOLTIP
othersToolTip.addEventListener('click',function(e){
e.preventDefault();
othersToolTip.classList.add('hidden');
})

nbCloseButton.addEventListener('click',function(e){
    e.preventDefault();
    navbarContainer.style.width = "7%";
    mapContainer.style.width = "93%";
    nbCloseButton.classList.add('hidden');
})

navbarContainer.addEventListener('mouseover',function(e){
    e.preventDefault();
    navbarContainer.style.width = "18%";
    mapContainer.style.width = "82%";
    nbCloseButton.classList.remove('hidden');
    
})

// Make the DIV element draggable:
dragElement(document.getElementById("statsToolTip"));

function dragElement(elmnt) {
    

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement( ) {
      

    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}