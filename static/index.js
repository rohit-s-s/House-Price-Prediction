const formElm = document.getElementById("formElm");

formElm.addEventListener("submit", (event) => sendData(event));

function sendData(event) {
  event.preventDefault();
  console.log("form submitted");

  var location = document.getElementById("location").value;
  var totalSqft = document.getElementById("total_sqft").value;
  var bathroom = document.getElementById("bathroom").value;
  var balcony = document.getElementById("balcony").value;
  var bedroom = document.getElementById("bedroom").value;

  $.ajax({
    url: "/process",
    type: "POST",
    data: {
      "location": location,
      "total_sqft": totalSqft,
      "bathroom": bathroom,
      "balcony": balcony,
      "bedroom": bedroom
    },
    success: function (response) {
      document.getElementById("output").innerHTML = response;
    },
    error: function (error) {
      console.log(error);
    },
  });
}