container = document.getElementById("container")

const formElm  = document.getElementById("formElm")
const array = ["total sqft", "bathrooms", "balcony", "bedrooms"]
const values = [1,2,3]

array.forEach(element => {
  const mainLabel = document.createElement("label")
  mainLabel.textContent = `Enter ${element} : `
  if(element==="total sqft"){
    const textLabel = document.createElement("label")
    textLabel.textContent = "Enter total sqft : "
      const text = document.createElement("input")
      text.setAttribute("type","text")
      text.setAttribute("name",element)
      mainLabel.appendChild(text)
  }
  else if(element!=="total sqft"){
    values.forEach(value=>{
      const radioLabel = document.createElement("label")
      radioLabel.innerHTML = value
      const radio = document.createElement("input")
      radio.setAttribute("type","radio")
      radio.setAttribute("name",element)
      radio.setAttribute("value",value)
      radioLabel.appendChild(radio)
      mainLabel.appendChild(radioLabel)
    })
  }
 
  formElm.appendChild(mainLabel)
});

const button = document.createElement("button")
button.setAttribute("type","submit")
button.textContent = "Submit"
formElm.appendChild(button)



formElm.addEventListener("submit", (event)=>{
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