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
   this.increaseTemperature = function (celsiusDegrees) {

      if (!Number.isInteger(celsiusDegrees) || celsiusDegrees < 0) {
         return "Incorrect format of celsiusDegrees argument";
      }
      /*if (this.measure == "Kelvin") {
               return this.convertToKelvin();
            };
            if (this.measure == "Fahrenheit") {
               return this.convertToFahrenheit();
            };*/
      return this.celsiusTemperature += celsiusDegrees;
   };
   this.isBoiled = function () {
      if (this.celsiusTemperature >= 100) {
         return true;
      }
   }
}

let temperatureConverter = new TemperatureConverter(25, "Celsius");
console.log(temperatureConverter.measure);
console.log(`${temperatureConverter.celsiusTemperature}\n`);

temperatureConverter.convertToKelvin();
console.log(temperatureConverter.measure);
console.log(`${temperatureConverter.temperature}\n`);

temperatureConverter.convertToFahrenheit();
console.log(temperatureConverter.measure);
console.log(`${temperatureConverter.temperature}\n`);
temperatureConverter.increaseTemperature();

console.log(temperatureConverter.increaseTemperature(90));
temperatureConverter.isBoiled();
console.log(temperatureConverter.isBoiled());