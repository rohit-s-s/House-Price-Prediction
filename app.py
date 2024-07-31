from flask import Flask, render_template, request, jsonify
from model import predict_price

app = Flask(__name__)

@app.route("/")
def home_page():
    return render_template("index.html", loc_data=["Electronic City Phase II", "Uttarahalli", "Lingadheeranahalli", "Kothanur"], array=[1, 2, 3])

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
