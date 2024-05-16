function changeAddress(){
    console.log("made it")
    var home = document.querySelector("#home")
    var business = document.querySelector("#bill")
    var is_checked = document.querySelector("#sameAddress").checked;
    

    if (is_checked == true){
        home.value = business.value
        home.disabled = true
        
}
else{
    home.value =""
    home.disabled = false
  }

}