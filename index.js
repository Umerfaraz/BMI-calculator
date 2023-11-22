var form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    var height = parseInt(document.querySelector("#height").value);
    var weight = parseInt(document.querySelector("#weight").value);
    var result = document.querySelector("#result");

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid Height';
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid Weight ';
    } else {
        // var bmi = (weight / (height * height) / 10000).toFixed(2);
        var bmi = (weight / ((height * height)  / 10000)).toFixed(2);
        result.innerHTML = `<h1>${bmi}</h1>`;
    }

})