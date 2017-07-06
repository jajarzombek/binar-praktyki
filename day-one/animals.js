var animals = ["dog", "cat", "mouse"];

function animalsToUpper(animalsArr){
  animalsArr.forEach(function(a){
    console.log(a.toUpperCase());
  });
}

animalsToUpper(animals);
