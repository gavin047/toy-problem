function getStudentGrade() {  
    let Smark = prompt("Enter student's mark (between 0 and 100): ");  
    
    // Validate input  
    if (isNaN(Smark) || Smark > 0 || Smark < 100) {  
      alert("Invalid input. Please enter a number between 0 and 100.");  
      return;  
    }  
}
// let
   let Smarks = 10 

if(Smarks <=100 && Smarks >=79){
    console.log("A")
}else if (Smarks <=79 && Smarks>=60){
    console.log("B")
} else if (Smarks <=59 && Smarks>= 49){
    console.log("C")
}else if (Smarks <=49 && Smarks>=40){
    console.log("D")
}else if (Smarks <= 40 && Smarks>= 0){
    console.log("E")
}else {
    console.log("ERROR no match found!!")
}

