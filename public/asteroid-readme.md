# DATASCI3000Group6Project

# Asteroid Diameter Prediction Project

## 📌 Project Overview
This project focuses on predicting **asteroid diameters** using orbital data and physical characteristics collected from NASA JPL Small Body Database.  
Multiple machine learning regression models were trained and evaluated to determine which model best captures the relationship between asteroid properties and diameter size.
After determining the best model, we used it to on the unseen test data as a final analysis.

The project includes:
- Data cleaning & preprocessing
- Feature engineering
- Outlier detection and treatment
- Regression model training
- Performance comparison of ML models
- Ensemble learning using a stacking regressor

---

## 📊 Dataset
The dataset contains information about asteroid orbital dynamics and physical properties including but aren't limited to:

### Features Used in Prediction:
- RMS
- Reflectivity (albedo)
- Diameter error
- Brightness
- Perihelion distance
- Aphelion distance
- Semi-major axis
- Orbital speed
- Orbit eccentricity
- MOID (Minimum Orbit Intersection Distance)

### Target Variable:
- `diameter`

---

## 🛠 Data Preprocessing
The following preprocessing steps were applied:

- Dropped irrelevant identifier columns (IDs, epoch fields, orbital metadata)
- Renamed columns for readability
- Handled missing values using:
  - Mean imputation for brightness
  - Median imputation for reflectivity and diameter error
- Removed outliers using the **IQR method**
- Encoded categorical variables using label encoding
- Applied **standard scaling** to numeric features
- Split dataset into:
  - 70% Training set
  - 20% Validation set
  - 10% Test set

---

## 🤖 Models Implemented

### Baseline Models:
- Linear Regression
- Ridge Regression
- Lasso Regression

### Tree-Based Models:
- Random Forest Regressor
- Extra Trees Regressor
- XGBoost
- CatBoost

### Neural Networks:
- Single Perceptron
- MLP Regressor

### Ensemble Model:
- Stacking Regressor (Random Forest + XGBoost + MLP → Ridge Meta-model)

---

## 🧪 Model Evaluation Metrics

Each model was evaluated using:
- **R² Score** — Measures goodness of fit
- **RMSE** — Measures prediction error magnitude

Metrics were computed on:
- Training set
- Validation set
- Test set (final evaluation)

---

## 🏆 Best Performing Model

Based on training and validation performance:
- The **Stacking Regressor** showed the strongest generalization performance.
- It combined the strengths of tree models and neural networks while reducing individual model biases.

---

## 📈 Visualization & Analysis

This project includes:
- Feature vs target regression plots
- Correlation heatmaps
- Feature importance charts from Random Forest
- Missing value analysis dashboards
- Outlier reporting tables

---

## 📁 Project Structure
- asteroid_diameter_prediction.ipynb # Full analysis and modeling pipeline
- dataset.csv # Raw dataset
- README.md # Project documentation
- .gitignore # Ignored system and model files

## 🧰 Libraries Used

- pandas  
- numpy  
- matplotlib  
- seaborn  
- scikit-learn  
- xgboost  
- catboost  

---

## 🚀 How to Run

1. Clone the repository:
2. Open the notebook in Google Colab(best) or Jupyter:
3. Ensure dependencies are installed:
4. Run all cells from top to bottom.


Note: You may need to change the file path found in cell 6, where you set df equal to the file path, as where your files are stored may be different than the one used to make this document.

For Google Colab: 
1. Download the dataset.csv and asteroid_diameter_prediction.ipynb files
2. Upload them to your Google Drive and open the asteroid_diameter_prediction.ipynb file
3.  After running the mounting code block, press the folder symbol on the right side of the screen. 
4. Press the downarrow beside the 'drive' folder and press the arrow beside the 'MyDrive' folder. 
5. Find where you stored the files to. Right click the 'dataset.csv' file and press 'copy path'.
6. Return to the code block with the file path, remove the existing one and paste the one you just copied in its place.
7. You are now able to run everything properly.

---

## 👤 Authors
Fraser Morrow (fmorrow@uwo.ca)

Aidan Tam (atam243@uwo.ca)

Nolan Carvalho (ncarval4@uwo.ca)

Henry Savill (hsavill@uwo.ca)

---

## ✅ License
This project is for academic and educational use.
