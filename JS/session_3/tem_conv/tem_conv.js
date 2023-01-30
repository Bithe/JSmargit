const calTemConv = () => {

        // get inputs
    const celsius = Number( document.querySelector('#celsius').value);

    const fahrenheit = Number( document.getElementById('fahrenheit').value);

    const kelvin = document.getElementById('kelvin').value;

     // C to F & K

    const celsiusToFahrenheit = (celsius*1.8)+32;

    const celsiusTokelvin = celsius + 273.15;

    // F to C & K

    const fahrenheitToCelsius = (fahrenheit-32)/1.8;

    const fahrenheitToKelvin = (fahrenheit-32)*1.8+273.15;

    // K to C & F

    const kelvinToCelsius = kelvin-273.15;

    const kelvinToFahrenheit =  (kelvin-273.15)*(9/5)+32;


    // show the data in input fields

    //const celsiusVal = document.getElementById("celsius").value;
    
    document.getElementById('celsius').innerHTML = (fahrenheit-32)/1.8;
};