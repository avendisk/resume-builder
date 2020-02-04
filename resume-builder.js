
function dropDown(dropDown) {
    dropDown.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
  }
function loadNewStyles(){
    newStyle = document.getElementById("style-change").value;
    document.getElementById("resume-style").setAttribute("href","resume-styles/"+newStyle+".css")
}

function downloadResume(downloadNode){
    a = document.createElement("a");
    blob = new Blob(
      [document.getElementById("printable-resume").innerHTML],
      {type: "text/html"});
    object_URL = URL.createObjectURL(blob);
    a.href = object_URL;
    a.download = "test.html";
    a.click();
    URL.revokeObjectURL(object_URL);
};


//close the dropdown menu
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
}