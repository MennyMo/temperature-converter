var celsius = document.getElementById("input1");
var fahrenheit = document.getElementById("input2");
var main1 = document.getElementById("main-body");
var scale = document.getElementById("scale");
var submit=  document.getElementById("submit");




function celToFah() {
  if(scale2.value=="Celsius"){
    if (scale.value == "Celsius") {
      let output = parseFloat(celsius.value) 
      fahrenheit.value = output.toFixed(2);
    }

 else if (scale.value == "Fahrenheit") {
    let output = parseFloat(celsius.value) * 9/5 + 32;
    fahrenheit.value = output.toFixed(2);
  } else if (scale.value == "Kelvin") {
    let output = parseFloat(celsius.value) + 273;
    fahrenheit.value = output.toFixed(2);
  } else if (scale.value == "Rankine") {
    let output = parseFloat((celsius.value) * 9) / 5 + 491.67
    fahrenheit.value = output.toFixed(2);
  }
}

else if(scale2.value=="Fahrenheit"){
  if (scale.value == "Celsius") {
    let output = (parseFloat(celsius.value) -32)/1.8
    fahrenheit.value = output.toFixed(2);
  }
  else if (scale.value == "Fahrenheit") {
    let output = parseFloat(celsius.value) 
    fahrenheit.value = output.toFixed(2);
  } else if (scale.value == "Kelvin") {
    let output = (parseFloat(celsius.value) +459.67)*5/9;
    fahrenheit.value = output.toFixed(2);
  } else if (scale.value == "Rankine") {
    let output = parseFloat(celsius.value) + 459.67;
    fahrenheit.value = output.toFixed(2);
  }

}

else if (scale2.value=="Kelvin"){
  if (scale.value == "Celsius") {
    let output = (parseFloat(celsius.value)-273)
    fahrenheit.value = output.toFixed(2);
  }
  else if (scale.value == "Fahrenheit") {
    let output = (parseFloat(celsius.value)-273.15)*9/5+32 
    fahrenheit.value = output.toFixed(2);
  } else if (scale.value == "Kelvin") {
    let output = parseFloat(celsius.value)
    fahrenheit.value = output.toFixed(2);
  } else if (scale.value == "Rankine") {
    let output = parseFloat((celsius.value)*1.8);
    fahrenheit.value = output.toFixed(2);
  }
}
  else if (scale2.value=="Rankine"){
    if (scale.value == "Celsius") {
      let output = (parseFloat(celsius.value)-491.67)*5/9
      fahrenheit.value = output.toFixed(2);
    }
    else if (scale.value == "Fahrenheit") {
      let output = (parseFloat(celsius.value)-459.67) 
      fahrenheit.value = output.toFixed(2);
    } else if (scale.value == "Kelvin") {
      let output = parseFloat(celsius.value)*5/9
      fahrenheit.value = output.toFixed(2);
    } else if (scale.value == "Rankine") {
      let output = parseFloat((celsius.value))
      fahrenheit.value = output.toFixed(2);
    }
  


}


}
function fahToCel() {
  if(scale.value=="Celsius"){
    if (scale2.value == "Celsius") {
      let output = parseFloat(fahrenheit.value) 
      celsius.value = output.toFixed(2);
    }

 else if (scale2.value == "Fahrenheit") {
    let output = parseFloat(fahrenheit.value) * 9/5 + 32;
    celsius.value = output.toFixed(2);
  } else if (scale2.value == "Kelvin") {
    let output = parseFloat(fahrenheit.value) + 273;
    celsius.value = output.toFixed(2);
  } else if (scale2.value == "Rankine") {
    let output = parseFloat((fahrenheit.value) * 9) / 5 + 491.67
    celsius.value = output.toFixed(2);
  }
}

else if(scale.value=="Fahrenheit"){
  if (scale2.value == "Celsius") {
    let output = (parseFloat(fahrenheit.value) -32)/1.8
    celsius.value = output.toFixed(2);
  }
  else if (scale2.value == "Fahrenheit") {
    let output = parseFloat(fahrenheit.value) 
    celsius.value = output.toFixed(2);
  } else if (scale2.value == "Kelvin") {
    let output = (parseFloat(fahrenheit.value) +459.67)*5/9;
    celsius.value = output.toFixed(2);
  } else if (scale2.value == "Rankine") {
    let output = parseFloat(fahrenheit.value) + 459.67;
    celsius.value = output.toFixed(2);
  }

}

else if (scale.value=="Kelvin"){
  if (scale2.value == "Celsius") {
    let output = (parseFloat(fahrenheit.value)-273)
    celsius.value = output.toFixed(2);
  }
  else if (scale2.value == "Fahrenheit") {
    let output = (parseFloat(fahrenheit.value)-273.15)*9/5+32 
    celsius.value = output.toFixed(2);
  } else if (scale2.value == "Kelvin") {
    let output = parseFloat(fahrenheit.value)
    celsius.value = output.toFixed(2);
  } else if (scale2.value == "Rankine") {
    let output = parseFloat((fahrenheit.value)*1.8);
    celsius.value = output.toFixed(2);
  }
}
  else if (scale.value=="Rankine"){
    if (scale2.value == "Celsius") {
      let output = (parseFloat(fahrenheit.value)-491.67)*5/9
      celsius.value = output.toFixed(2);
    }
    else if (scale2.value == "Fahrenheit") {
      let output = (parseFloat(fahrenheit.value)-459.67) 
      celsius.value = output.toFixed(2);
    } else if (scale2.value == "Kelvin") {
      let output = parseFloat(fahrenheit.value)*5/9
      celsius.value = output.toFixed(2);
    } else if (scale2.value == "Rankine") {
      let output = parseFloat((fahrenheit.value))
      celsius.value = output.toFixed(2);
    }
  


}


}

function colorChange() {
  let x = celsius.value;

  if (x > 99) {
    main1.style.backgroundColor = "rgb(255,0,0)";
  } else if (x == 0) {
    main1.style.backgroundColor = "white";
  } else {
    main1.style.backgroundColor = `rgb(${celsius.value},${celsius.value},90)`;
  }
}




celsius.addEventListener("input", celToFah);
main1.addEventListener("mousemove", celToFah);
main1.addEventListener("mousemove", fahToCel);
fahrenheit.addEventListener("input", fahToCel);
celsius.addEventListener("input", colorChange);
fahrenheit.addEventListener("input", colorChange);

submit.addEventListener("click", colorChange);
