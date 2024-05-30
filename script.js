document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('name1').innerHTML = localStorage.getItem("fName");
    document.getElementById('name2').innerHTML = localStorage.getItem("lName");
    document.getElementById('gender').innerHTML = localStorage.getItem("gender");
    document.getElementById('email').innerHTML = localStorage.getItem("email");
    document.getElementById('answer').innerHTML = localStorage.getItem("answer");
});

function Valid(element) {
    if (element.value === "") {
      element.style.border = "1px solid red";
    } else {
      element.style.border = "1px solid green";
    }
  }
  
  function resetForm() {
    document.getElementById("output").innerHTML = "";
  }

  function save(){ 
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("EWord").value;
    const genderOptions = document.getElementsByName("gender");
    for (let i = 0; i < genderOptions.length; i++) {
      if (genderOptions[i].checked) {
        var gender = genderOptions[i].value;
      }
    }
    var answer = document.getElementById("txtarea").value;
      
    if (typeof(Storage) !== "undefined")
    {
      localStorage.setItem("fName", fName);
      localStorage.setItem("lName", lName);
      localStorage.setItem("email", email);
      localStorage.setItem("gender", gender);
      localStorage.setItem("answer", answer);
    }

    window.location.href = 'pageinfo.html';
    return false;
}