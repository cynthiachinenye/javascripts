let stages = 0;

const stage1 = document.querySelector("#stage1")
const stage2= document.querySelector("#stage2")
const stage3= document.querySelector("#stage3")

var next = document.querySelector('#btn2')
next.addEventListener("click", showNext);

var back = document.querySelector('#btn3')
back.addEventListener("click", showBack);

stage1.style.display = 'none';
stage2.style.display = 'none';
stage3.style.display ='none';

function even(){
    if(stages === 0){
        stage1.style.display = "block"
        stage2.style.display= "none"
        stage3.style.display="none"
        back.style.visibility="hidden"
        next.style.display="block"
    }
    if(stages === 1){
       stage2.style.display = "block"
       stage1.style.display = "none"
        stage3.style.display="none"
        back.style.visibility="visible"
        next.style.display = "block"
    }
    if(stages === 2)
    {
       stage3.style.display = "block"
        stage1.style.display = "none"
        stage2.style.display= "none"
        back.style.visibility="visible"
        next.style.display = "block"
       
        
    }

        
}
even();
 function showNext (){
    if (stages ===2) {return}
    stages ++
    even()
}
function showBack (){
    stages --
    even()
}
 console.log(stages);
    

/*const cap = () => {
    var userName = prompt("what is your name"); 
    var firstName= userName.slice(0,1).toUpperCase();
    var restOfName = userName.slice(1,userName.length);
     var capitalizedName= firstName + restOfName;
    alert("Hello" + " " +  capitalizedName);
}

cap()
var dogAge = prompt("How old is your dog");
var humanAge = ((dogAge-2)*4)+21;
alert("your dog is:" + " " + humanAge + " " + "years old in human age")*/       