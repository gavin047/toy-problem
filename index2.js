function speedCheck(speed) {  
    if (speed <= 70) {  
      console.log("Ok");  
    } else {  
      let demeritPoints = Math.floor((speed - 70) / 5);  
      if (demeritPoints > 12) {  
        console.log("License suspended");  
      } else {  
        console.log(`Points: ${demeritPoints}`);  
      }  
    }  
  }  
    
  //    Function tests here
  speedCheck(50); // Output should be : ok
  speedCheck(90); // Output Points should be :points: 4  
  speedCheck(140); // Output will be : License suspended 




 