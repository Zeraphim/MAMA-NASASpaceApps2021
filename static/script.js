// SELECTING ELEMENTS 

//STATS TOOL TIP
const statsButton = document.querySelector("#statsButton")
const statsToolTip = document.querySelector('#statsToolTip')

//OTHERS TOOL TIP
const othersButton = document.querySelector("#othersButton")
const  othersToolTip= document.querySelector('#othersToolTip')

//navbarshrinkbutton
const nbCloseButton = document.querySelector('#nbCloseBtn');
const navbarContainer = document.querySelector('.navbar-container');
const mapContainer = document.querySelector('.map-container');

//ONCLICK FUNCTIONS

//OPEN STATS TOOLTIP
statsButton.addEventListener('click',function(e){
e.preventDefault();
statsToolTip.classList.remove('hidden');

})

//CLOSE STATS TOOLTIP
statsToolTip.addEventListener('click',function(e){
e.preventDefault();
statsToolTip.classList.add('hidden');
})


//OPEN STATS TOOLTIP
othersButton.addEventListener('click',function(e){
e.preventDefault();
othersToolTip.classList.remove('hidden');

})

//CLOSE STATS TOOLTIP
othersToolTip.addEventListener('click',function(e){
e.preventDefault();
othersToolTip.classList.add('hidden');
})

nbCloseButton.addEventListener('click',function(e){
    e.preventDefault();
    navbarContainer.style.width = "10%";
    mapContainer.style.width = "90%";
    nbCloseButton.classList.add('hidden');
})

navbarContainer.addEventListener('mouseover',function(e){
    e.preventDefault();
    navbarContainer.style.width = "25%";
    mapContainer.style.width = "75%";
    nbCloseButton.classList.remove('hidden');
    
})