const box = document.getElementById("box");
const header1 = document.getElementById("header1");
function slideIn(){
    
   
    box.style.display = "block";
   
    header1.style.display="none";
    

}
function slideOut(){
   
    box.style.display="none";
    header1.style.display = "block";
}

