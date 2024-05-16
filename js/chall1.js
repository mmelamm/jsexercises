function openEmail(){
    let is_checked = document.querySelector("#subscribe").checked
    console.log(is_checked)

    if(is_checked == true){
        document.querySelector("#emailDiv").style.display = "block"
    }
    
}