// Dark Mode 
let darkModu=()=>{
    //alert("Dark modu");
    document.body.classList.toggle("dark_mode");
}

// input search
$(document).ready(function(){
const searchApi=["Adana","Balikesir","Çorum","Denizli","Diyarbakır","Edirne","Malatya","Van"];
$("#tags").autocomplete({
    source:searchApi
})
}); //end 


// Footer
let newDate=()=>{
    const date=new Date().getFullYear();
// JS DOM
//document.getElementById("date_id").innerHTML=new Date().getFullYear();

// Jquery DOM
$("#date_id").html(date);
}
newDate()
const register =  document.getElementById("register")
const closebtn = document.getElementById("closeBtn")
const form = document.getElementById("formValue")
register.addEventListener("click",()=>{
    document.querySelector(".register-show").classList.add("show")
})


closebtn.addEventListener("click", ()=>{
    document.querySelector(".register-show").classList.remove("show")
})

let user = []


const clear = () => {
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("email").value = ""
    document.getElementById("check").value= ""
    document.getElementById("password").value = "";
}

form.addEventListener("submit",(e)=>{
    
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const check = document.getElementById("check").value
    const password = document.getElementById("password").value 
    
       user.push({"firstName": firstName, 
       "lastname": lastName,
       "email": email,
       "check": check,
       "password": password})
       document.querySelector(".register-show").classList.remove("show")

       clear()
    
       e.preventDefault()
    
       console.log(user) 
} )
function changeLanguage() {
    var dropdown = document.getElementById("languageDropdown");
    var selectedValue = dropdown.value;

    if (selectedValue === "tr") {
        document.getElementById("selectedLanguage").innerText = "Seçilen Dil: Türkçe";
        // Burada sayfanın Türkçeye çevrilmesi için gerekli işlemler yapılacak.
    } else if (selectedValue === "en") {
        document.getElementById("selectedLanguage").innerText = "Selected Language: English";
        // Burada sayfanın İngilizceye çevrilmesi için gerekli işlemler yapılacak.
    }
}
