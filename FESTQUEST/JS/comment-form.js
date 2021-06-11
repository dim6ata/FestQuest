//Checks form for all necessary fields to be completed
function checkForm(form)
  {
      var name = form.inputfield.value;
      var select = getSelectedText(form.selectRating);
      var text = document.getElementById("comment-notes").value;
      var alpha = /^[A-Za-z-'-]+$/;/*only letters and ' - allowed*/
      
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
      //checks if Rate us has been selected
      if(form.selectRating.selectedIndex < 1){
          alert("You need to select an option from Rate Us.");
          form.selectRating.focus();
          return false;
      }
      //checks if text has been entered
      if(text=="" || text=="Please, add any comments that you wish to share with us."){
          alert("Please, add a comment!");
          
          return false;
      }
      //final display
      alert("Dear " + name + ", thank you for your Feedback!\nYou have rated our website as '"+ select +"' and your comment was: \n'"+ text+"'.");
      
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