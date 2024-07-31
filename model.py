import pickle
import pandas as pd
# import sklearn

model = pickle.load(open('Model/bengaluru_house_price_model.pickle','rb'))

def predict_price(loc,total_sqft,bathroom,balcony,bhk):
    location_data = pd.Series([loc])
    data = [location_data[0],total_sqft,bathroom,balcony,bhk]
    
    column_names = ["location","total_sqft","bath","balcony","BHK"]
    input_df = pd.DataFrame([data], columns=column_names)
    return model.predict(input_df)

