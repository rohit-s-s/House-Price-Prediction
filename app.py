from flask import Flask, render_template,request
from model import predict_price
import json
app = Flask(__name__)

@app.route("/",methods = ['GET','POST'])
def home_page():
    result = ""
    with open("columns.json","r") as f:
        data=json.load(f)
        for keys,values in data.items():
            locations = values
    if request.method == 'POST':
        location = request.form['location']
        sqft = request.form['total sqft']
        bathroom = request.form['bathrooms']
        balcony = request.form['balcony']
        bhk = request.form['bedrooms']
        price =predict_price(location,sqft,bathroom,balcony,bhk)
        result= round(price[0],2)
        print(price)
        

    return render_template("index.html",loc_data = locations,result=result)


if __name__ == "__main__":
    
    app.run(debug=True)

