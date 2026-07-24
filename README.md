# 🧠 EmotionSense AI

An AI-powered Emotion Analysis web application that predicts emotions from text using Machine Learning. Users can analyze individual text inputs or upload an entire CSV dataset for batch emotion prediction through a modern React interface.

---

## 🚀 Features

- ✨ Predict emotions from a single text input
- 📂 Upload CSV files for batch emotion analysis
- 🤖 Machine Learning-based emotion classification
- 📊 Interactive analytics dashboard
- 🎨 Modern and responsive React UI
- ⚡ FastAPI backend with REST APIs
- 🔄 Real-time frontend-backend communication

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend
- FastAPI
- Python
- Uvicorn

### Machine Learning
- Scikit-learn
- TF-IDF Vectorizer
- LinearSVC (Calibrated)
- NLTK
- Pandas
- NumPy

---

## 🧠 Supported Emotions

The model predicts the following six emotions:

- 😊 Joy
- 😢 Sadness
- 😠 Anger
- ❤️ Love
- 😨 Fear
- 😲 Surprise

---

## 📂 Project Structure

```text
EmotionSenseAI/
│
├── backend/
│   ├── app.py
│   ├── preprocessing.py
│   ├── emotion_model.pkl
│   ├── tfidf_vectorizer.pkl
│   ├── label_encoder.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── assets/
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Aditya-exe27/EmotionSenseAI.git
```

Go to the project

```bash
cd EmotionSenseAI
```

---

## Backend Setup

```bash
cd backend
```

Create a virtual environment

```bash
python -m venv venv
```

Activate it

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the backend

```bash
uvicorn app:app --reload
```

The backend runs at

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

The frontend runs at

```
http://localhost:5173
```

---

## API Endpoints

### Predict Emotion

```
POST /predict
```

Predict emotion from a single text.

---

### Predict Dataset

```
POST /predict-dataset
```

Upload a CSV file containing a **text** column for batch emotion analysis.

---

## Machine Learning Pipeline

```
Raw Text
      │
      ▼
Text Preprocessing
      │
      ▼
TF-IDF Vectorization
      │
      ▼
LinearSVC (Calibrated)
      │
      ▼
Emotion Prediction
      │
      ▼
React Frontend
```

---

## Dataset

Dataset used:

Emotion Dataset (train.txt)

The dataset contains labeled text samples for six different emotions.

---

## Future Improvements

- Deep Learning (BERT / DistilBERT)
- User authentication
- Prediction history
- Dark/Light theme
- Export prediction reports
- Docker support
- Cloud deployment

---

## Author

**Aditya Srivastava**

GitHub:
https://github.com/Aditya-exe27

---

## ⭐ If you like this project

Give it a ⭐ on GitHub.
