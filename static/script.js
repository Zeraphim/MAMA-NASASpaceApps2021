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

//Navbar-text
const navBarText = document.querySelectorAll('.navbar-text');
const navUL = document.querySelector('.navUL');


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
    navUL.style.paddingLeft = '3em';
    nbCloseButton.classList.add('hidden');
    for(let i = 0; i <= navBarText.length;i++){
      navBarText[i].classList.add('hidden');
     }
})

navbarContainer.addEventListener('mouseover',function(e){
    e.preventDefault();
    navbarContainer.style.width = "18%";
    mapContainer.style.width = "82%";
    nbCloseButton.classList.remove('hidden');
    navUL.style.paddingLeft = '0';

    for(let i = 0; i <= navBarText.length;i++){
      navBarText[i].classList.remove('hidden');
     }
})

// Make the DIV element draggable:
dragElement1(document.getElementById("statsToolTip"));

function dragElement1(elmnt) {
    

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


// W3Schools draggable div
// Make the DIV element draggable:
dragElement(document.getElementById("draggable"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.querySelector(".draggableheader")) {
    // if present, the header is where you move the DIV from:
    document.querySelector(".draggableheader").onmousedown = dragMouseDown;
  } else {
    console.log("no header");
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
    var window_height = window.innerHeight;
    var window_width = window.innerWidth;
    console.log(window_width);
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:

    if (parseInt(elmnt.style.top) < 0) {
      elmnt.style.top = "0";
    } else if (parseInt(elmnt.style.left) < 0) {
      elmnt.style.left = "0";
    } else if (parseInt(elmnt.style.top) > window_height - 50) {
      elmnt.style.top = "70vh";
      elmnt.style.left = "60vw";
    } else if (parseInt(elmnt.style.left) > window_width - 150) {
      elmnt.style.top = "70vh";
      elmnt.style.left = "60vw";
    } else {
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



function tutorial(page = 0) {
  let inspector = document.querySelector(".content");
  if (page === 0) {
    inspector.innerHTML = `<div class="card mt-3" style="width: 18rem;"><div class="card-body" style="text-align: justify;">
    <h5 class="card-title font-weight-bold">Welcome to MAMA!</h5>
    <h6 class="card-subtitle mb-2 font-weight-light">Page 1 of 4</h6>
    <p class="card-text font-weight-normal">
    <br>
    Know about the marine debris floating in your waters!<br>
    </p>
    <h6 class="text-muted mb-2 font-italic"></h6>
    <button onclick="tutorial(${
      page - 1
    })" class="btn btn-primary disabled">Previous</button>
    <button onclick="tutorial(${
      page + 1
    })" class="btn btn-primary" style="float: right">Next</button>
  </div></div>`;
  }

  if (page === 1) {
    inspector.innerHTML = `<div class="card mt-3" style="width: 18rem;"><div class="card-body" style="text-align: justify;">
    <h5 class="card-title font-weight-bold">How to use</h5>
    <h6 class="card-subtitle mb-2 font-weight-light">Page 2 of 4</h6>
    <p class="card-text font-weight-normal">
    <br>
    <b>Home</b><br>
    View the Heat Map
    <br><br>
    <b>Statistics</b><br>
    View information regarding the marine debris in your area<br>
    <br>
    <b>Donate</b><br>
    Donate towards a cleaner ocean or be a volunteer!
    <br>
    </p>
    <h6 class="text-muted mb-2 font-italic"></h6>
    <button onclick="tutorial(${
      page - 1
    })" class="btn btn-primary">Previous</button>
    <button onclick="tutorial(${
      page + 1
    })" class="btn btn-primary" style="float: right">Next</button>
  </div></div>`;
  }

  if (page === 2) {
    inspector.innerHTML = `<div class="card mt-3" style="width: 18rem;"><div class="card-body" style="text-align: justify;">
    <h5 class="card-title font-weight-bold">How to use</h5>
    <h6 class="card-subtitle mb-2 font-weight-light">Page 3 of 4</h6>
    <p class="card-text font-weight-normal">
    <br>
    MAMA (Monitoring and Assessing Marine Debris Application) uses Mapbox API to display heatmaps in ocean bodies with high concentration of marine debris. The data is extracted from sattelite images which is then used by the application to provide heatmaps in their corresponding coordinates in the water bodies.
    </p>
    <h6 class="text-muted mb-2 font-italic"></h6>
    <button onclick="tutorial(${
      page - 1
    })" class="btn btn-primary">Previous</button>
    <button onclick="tutorial(${
      page + 1
    })" class="btn btn-primary" style="float: right">Next</button>
  </div></div>`;
  }

  if (page === 3) {
    inspector.innerHTML = `<div class="card mt-3" style="width: 18rem;"><div class="card-body" style="text-align: justify;">
    <h5 class="card-title font-weight-bold">Good to go!</h5>
    <h6 class="card-subtitle mb-2 font-weight-light">Page 4 of 4</h6>
    <p class="card-text font-weight-normal">
    <br>
    <b>"A Healthy Sea is Marine Debris Free."</b>
    <br><br>
    - Hydronautics Team
    <br>
    </p>
    <h6 class="text-muted mb-2 font-italic"></h6>
    <button onclick="tutorial(${
      page - 1
    })" class="btn btn-primary">Previous</button>
    <button onclick="resetInspector()" class="btn btn-primary" style="float: right">Finish</button>
  </div></div>`;
  }
}

function resetInspector() {
  var inspector = document.querySelector("#draggable");
  inspector.classList.add('hidden');

  if (all_overlays[selected_area_index - 1] != null) {
    all_overlays[selected_area_index - 1].setMap(null);
  }
}
window.onload = function () {
  tutorial();
};





