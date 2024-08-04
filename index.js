let lightEl = document.getElementById("lightTheme");
let darkEl = document.getElementById("darkTheme");
let generateEl = document.getElementById("generate");

lightEl.addEventListener("click", function(){
    document.body.style.backgroundColor = "#ECFDF5";
    generateEl.style.color = "#2B283A";
    lightEl.style.display = "none";
    darkEl.style.display = "block";
})

darkEl.addEventListener("click", function(){
    document.body.style.backgroundColor = "#1F2937";
    generateEl.style.color = "whitesmoke";
    lightEl.style.display = "block";
    darkEl.style.display = "none";
})











const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("password_button");
let passwordEl = document.getElementById("passwordOne");
let passwordEl2 = document.getElementById("passwordTwo");
    
function createPassword1(){
    
    let p_word1 = Math.floor (Math.random() * characters.length);
    let p_word2 = Math.floor (Math.random() * characters.length);
    let p_word3 = Math.floor (Math.random() * characters.length);
    let p_word4 = Math.floor (Math.random() * characters.length);
    let p_word5 = Math.floor (Math.random() * characters.length);
    let p_word6 = Math.floor (Math.random() * characters.length);
    let p_word7 = Math.floor (Math.random() * characters.length);
    let p_word8 = Math.floor (Math.random() * characters.length);
    let p_word9 = Math.floor (Math.random() * characters.length);
    let p_word10 = Math.floor (Math.random() * characters.length);
    let p_word11 = Math.floor (Math.random() * characters.length);
    let p_word12 = Math.floor (Math.random() * characters.length);
    let p_word13 = Math.floor (Math.random() * characters.length);
    let p_word14 = Math.floor (Math.random() * characters.length);
    let p_word15 = Math.floor (Math.random() * characters.length);
    
    
    let pwordArray = [p_word1, p_word2, p_word3, p_word4, p_word5, p_word6, p_word7, p_word8, p_word9, p_word10, p_word11, p_word12, p_word13, p_word14, p_word15]
    
    for (let i =0; i < pwordArray.length; i++){
        passwordEl.textContent = passwordEl.textContent + characters[pwordArray[i]]
    }
    return passwordEl.textContent;
    
}

function createPassword2(){
    
    let p_word1 = Math.floor (Math.random() * characters.length);
    let p_word2 = Math.floor (Math.random() * characters.length);
    let p_word3 = Math.floor (Math.random() * characters.length);
    let p_word4 = Math.floor (Math.random() * characters.length);
    let p_word5 = Math.floor (Math.random() * characters.length);
    let p_word6 = Math.floor (Math.random() * characters.length);
    let p_word7 = Math.floor (Math.random() * characters.length);
    let p_word8 = Math.floor (Math.random() * characters.length);
    let p_word9 = Math.floor (Math.random() * characters.length);
    let p_word10 = Math.floor (Math.random() * characters.length);
    let p_word11 = Math.floor (Math.random() * characters.length);
    let p_word12 = Math.floor (Math.random() * characters.length);
    let p_word13 = Math.floor (Math.random() * characters.length);
    let p_word14 = Math.floor (Math.random() * characters.length);
    let p_word15 = Math.floor (Math.random() * characters.length);
    
    
    let pwordArray = [p_word1, p_word2, p_word3, p_word4, p_word5, p_word6, p_word7, p_word8, p_word9, p_word10, p_word11, p_word12, p_word13, p_word14, p_word15]
    
     for (let i =0; i < pwordArray.length; i++){
        passwordEl2.textContent = passwordEl2.textContent + characters[pwordArray[i]]
    }
    return passwordEl2.textContent;
    
}

buttonEl.addEventListener("click", function(){
    passwordEl.textContent = ""
    passwordEl2.textContent = ""
    createPassword1()
    createPassword2()
})


// passwordEl.textContent = characters[p_word1] + characters[p_word2] + characters[p_word3] + characters[p_word3] + characters[p_word4] + characters[p_word5] + characters[p_word6] + characters[p_word7] + characters[p_word8] + characters[p_word9] + characters[p_word10] + characters[p_word11] + characters[p_word12] + characters[p_word13] + characters[p_word14] + characters[p_word15]