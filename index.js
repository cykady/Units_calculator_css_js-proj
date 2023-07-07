const convertBtn = document.getElementById('convert');
const input = document.getElementById('input');
const length = document.getElementById('length');
const volume = document.getElementById('volume');
const mass = document.getElementById('mass');

convertBtn.addEventListener('click', function() {
    let metersToFeet = input.value * 3.2808;
    let feetToMeters = input.value / 3.2808;
    length.textContent = `${input.value} meters = ${metersToFeet.toFixed(2)} feet | ${input.value} feet = ${feetToMeters.toFixed(2)} meters`
    
    let litersToGallons = input.value * 0.26417;
    let gallonsToLiters = input.value / 0.26417;
    volume.textContent = `${input.value} liters = ${litersToGallons.toFixed(2)} gallons | ${input.value} gallons = ${gallonsToLiters.toFixed(2)} liters`

    let kilosToPounds = input.value * 2.2046;
    let poundsToKilos = input.value / 2.2046;
    mass.textContent = `${input.value} kilos = ${kilosToPounds.toFixed(2)} pounds | ${input.value} pounds = ${poundsToKilos.toFixed()} kilos`
})