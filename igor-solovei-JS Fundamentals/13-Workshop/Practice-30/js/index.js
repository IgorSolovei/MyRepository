function TemperatureConverter(celsiusTemperature, measure) {
   this.celsiusTemperature = celsiusTemperature;
   this.temperature = celsiusTemperature;
   this.measure = measure;

   this.convertToKelvin = function () {
      let valueKelvin = 273.15;
      this.temperature = this.celsiusTemperature + valueKelvin;
      this.measure = "Kelvin"
   };
   this.convertToFahrenheit = function () {
      this.temperature = 1.8 * celsiusTemperature + 32;
      this.measure = "Fahrenheit";
   };

}


let x = new TemperatureConverter(25, "Celsius");
console.log(x.measure);
console.log(x.celsiusTemperature);
x.convertToKelvin();
console.log(x.measure);
console.log(x.temperature);
x.convertToFahrenheit();
console.log(x.measure);
console.log(x.temperature);