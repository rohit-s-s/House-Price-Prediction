container = document.getElementById("priceForm")

// array = ["total sqft", "bathrooms", "balcony", "bedrooms"]
// values = [1,2,3]
// array.forEach(element => {
//  const label = document.createElement("label")
//  label.textContent = `Enter ${element}`

//  values.forEach(value=>{
//   const radioLabel = document.createElement("label")
//   const radio = document.createElement("input")
//   radio.setAttribute("type","radio")
//   input.setAttribute("value",value)
//   radioLabel.textContent = value
//   radioLabel.appendChild(radio)
//   label.appendChild(radioLabel)
//  })
//  container.appendChild(label)

// });



container.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch("/", {
      method: "POST",
      body: formData
    })
    .then(response => response.text())
    .then(html => {
      document.querySelector(".container").innerHTML = html;
    });
  });