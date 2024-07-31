from flask import Flask, render_template, request, jsonify
from model import predict_price
import json

app = Flask(__name__)

@app.route("/")
def home_page():
    with open("Model/locations.json","r") as file:
        locations = json.load(file)
        for keys,values in locations.items():
            location = values
    return render_template("index.html", loc_data=location, array=[1, 2, 3])

@app.route('/process', methods=['POST'])
def process():
    location = request.form.get('location')
    sqft = request.form.get('total_sqft')
    bathroom = request.form.get('bathroom')
    balcony = request.form.get('balcony')
    bhk = request.form.get('bedroom')
    
    # process the data using Python code
    price = predict_price(location, sqft, bathroom, balcony, bhk)
    result = round(price[0], 2)
    print(result)
    return str(result)

if __name__ == "__main__":
    app.run(debug=True)
