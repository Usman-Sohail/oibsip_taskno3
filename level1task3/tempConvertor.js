const inputTemperature = document.getElementById("inputTemperature");
        const resultInput = document.getElementById("result");
        const temperatureSelect = document.getElementById("temperatures");
const convertButton = document.getElementById("convertButton")
const conversionLabel = document.getElementById("conversionType"); 
const originalColor = resultInput.style.color;
    const originalFontSize = resultInput.style.fontSize;



convertButton.addEventListener("click", convertTemperature);
temperatureSelect.addEventListener("change", updateConversionLabel);


        function convertTemperature() {

            const inputValue = inputTemperature.value;
            const selectedTemperature = temperatureSelect.value;

            if (inputValue === "" || isNaN(inputValue)) {
                resultInput.value = "Invalid Input"; 
                resultInput.style.color = "red";
                return;
              }

            if (selectedTemperature === "celcius") {

                const fahrenheit = (inputValue * 9/5) + 32;
                resultInput.value = fahrenheit.toFixed(2) + " °F";
                resultInput.style.color = originalColor;
                resultInput.style.fontSize = originalFontSize;
            } else if (selectedTemperature === "fahrenheit") {

                const celsius = (inputValue - 32) * 5/9;
                resultInput.value = celsius.toFixed(2) + " °C";
                resultInput.style.color = originalColor;
                resultInput.style.fontSize = originalFontSize;
            }
            else{
                resultInput.value = "Please select input type...";
                resultInput.style.fontSize = "10px"; 
                resultInput.style.color = "red";


            }
        }

        function clearResult() {
            const resultInput = document.getElementById("result");
            resultInput.value = "";
          }

          function clearInput() {
            const inputTemperature = document.getElementById("inputTemperature");
            inputTemperature.value = ""; 
          }

 
function updateConversionLabel() {
    const selectedTemperature = temperatureSelect.value;
    if (selectedTemperature === "celcius") {
        conversionLabel.textContent = "Converting Celcius to Fahrenheit"; 
    } else if (selectedTemperature === "fahrenheit") {
        conversionLabel.textContent = "Converting Fahrenheit to Celsius";}
}