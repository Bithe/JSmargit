const calTemConv = (id) => {

        // get inputs
    const celsius = document.querySelector('#celsius');

    const fahrenheit = document.getElementById('fahrenheit');

    const kelvin = document.getElementById('kelvin');


    console.log(celsius.value);
    console.log(fahrenheit.value);
    console.log(kelvin.value);



    console.log(id);
     // C to F & K

    // fahrenheit.value = (celsius.value*1.8)+32;

    const celsiusTokelvin = celsius + 273.15;

    // F to C & K

    const fahrenheitToCelsius = (fahrenheit-32)/1.8;

    const fahrenheitToKelvin = (fahrenheit-32)*1.8+273.15;

    // K to C & F

    const kelvinToCelsius = kelvin-273.15;

    const kelvinToFahrenheit =  (kelvin-273.15)*(9/5)+32;


    // show the data in input fields

    //const celsiusVal = document.getElementById("celsius").value;
    
   // document.getElementById('celsius').innerHTML = (fahrenheit-32)/1.8;


   // show one feild data to another fahrenheit.value = celsius.value;
};