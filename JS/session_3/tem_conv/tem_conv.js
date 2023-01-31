const calTemConv = (id, value) => {

    const val = parseFloat(value);

    console.log(id,val)
        // get inputs
    const celsiusInput = document.querySelector('#celsius');
    const fahrenheitInput = document.querySelector('#fahrenheit');
    const kelvinInput = document.querySelector('#kelvin');


if(id == 'celsius'){
   fahrenheitInput.value = (val * 1.8 + 32).toFixed(2);
   kelvinInput.value = (val + 273.15).toFixed(2);

}

 if(id == 'fahrenheit'){
celsiusInput.value = ((val - 32)/1.8).toFixed(2);
kelvinInput.value =  (val-32)*1.8+273.15;
}

 if(id == "kelvin"){

celsiusInput.value = val-273.15;
fahrenheitInput.value = ( val - 273.15 ) *1.8 + 32;
}


};




    // console.log(celsius.val);
    // console.log(fahrenheit.val);
    // console.log(kelvin.val);



// C to F & K

//     // fahrenheit.val = (celsius.val*1.8)+32;

//     const celsiusTokelvin = celsius + 273.15;

//     // F to C & K

//     const fahrenheitToCelsius = (fahrenheit-32)/1.8;

//     const fahrenheitToKelvin = (fahrenheit-32)*1.8+273.15;

//     // K to C & F

//     const kelvinToCelsius = kelvin-273.15;

//     const kelvinToFahrenheit =  (kelvin-273.15)*(9/5)+32;


//     // show the data in input fields

//     //const celsiusVal = document.getElementById("celsius").val;
    
//    // document.getElementById('celsius').innerHTML = (fahrenheit-32)/1.8;


//    // show one feild data to another fahrenheit.val = celsius.val;