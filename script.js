var degree = prompt("enter your degree")
var message

if (degree == null || degree =="") {
    console.log('please enter a degree')
    
}

else{
    if (degree >= 90) {
        message="A"
        console.log(message)
        
    }

   else if (degree > 80 && degree <90) {
        message="B"
        console.log(message)
        
    }

    else if (degree > 70 && degree <80) {
        message="C"
        console.log(message)
        
    }

    else if (degree > 60 && degree<70) {
        message="D"
        console.log(message)
        
    }

    else if (degree <60) {
        message="f"
        console.log(message)
        
    }
}