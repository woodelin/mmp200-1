    // Closes down menus when a user interacts with other things on the page
    // submenu1, submenu2... are the id names of the dropdown ULs. Change them if yours are different.  
      var boxArray = ['submenu1','submenu2','submenu3']; 
        window.addEventListener('mouseup', function(event){
	       for(var i=0; i < boxArray.length; i++){
	         var box = document.getElementById(boxArray[i]);
	         if(event.target != box && event.target.parentNode != box){
		          box.style.display = 'none';
	         }
	       }
       });

// The following function toggles the visibility of an element
      function toggleMenu(id){
        if (document.getElementById(id).style.display=="block"){
              document.getElementById(id).style.display="none";}
        else {
              document.getElementById(id).style.display="block";}
      }
