function checkForm(form)
  {
      var name = form.inputfield.value;
      var select = getSelectedText(form.selectRating);
      var text = document.getElementById("comment-notes").value;
      var alpha = /^[A-Za-z-'-]+$/;/*only letters and' - allowed*/
      
      //checks if the name is entered
      if(name == "") {
      alert("Error: Input is empty!");
      form.inputfield.focus();
      return false;
    }
      //checks if the correct characters are entered
      if(!alpha.test(name)) {
      alert("Error: Input contains invalid characters!");
      form.inputfield.focus();
      return false;
    }
      //checks if Event has been selected
      if(form.selectRating.selectedIndex < 1){
          alert("You need to Pick an Event.");
          form.selectRating.focus();
          return false;
      }
      //final print statement
      alert("Dear " + name + ", thank you for joining us!\nYou have chosen to attend '"+ select +"' event. \nYou will be given more details soon!");
      
      return true;
      
      
    }

//gets selected text from Rate Us
function getSelectedText(selectList) {
   return selectList.options[ selectList.selectedIndex].text;
}


//removes text from comments section on click//
function clearText(txt){
    txt.value = '';
}