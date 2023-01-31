const calTemConv = (id, value) => {
    const val = parseFloat(value);
  
    const celInput = document.querySelector('#celsius');
    const fahInput = document.querySelector('#fahrenheit');
    const kelInput = document.querySelector('#kelvin');
  
    if (id === 'celsius') {
      fahInput.value = (val * 1.8 + 32).toFixed(2);
      kelInput.value = (val + 273.15).toFixed(2);
    }
    if (id === 'fahrenheit') {
      celInput.value = ((val - 32) / 1.8).toFixed(2);
      kelInput.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
    }
    if (id === 'kelvin') {
      celInput.value = (val - 273.15).toFixed(2);
      fahInput.value = ((val - 273.15) * 1.8 + 32).toFixed;
    }
  };