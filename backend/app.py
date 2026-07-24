
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
from fastapi import UploadFile, File
import pandas as pd
from fastapi.responses import JSONResponse

from preprocessing import preprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
   allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = pickle.load(open("emotion_model.pkl", "rb"))
vectorizer = pickle.load(open("tfidf_vectorizer.pkl", "rb"))
labels = pickle.load(open("label_encoder.pkl", "rb"))

reverse_labels = {v: k for k, v in labels.items()}


class TextInput(BaseModel):
    text: str


@app.post("/predict")
def predict(data: TextInput):

    clean_text = preprocess(data.text)

    vector = vectorizer.transform([clean_text])

    prediction = model.predict(vector)[0]

    emotion = reverse_labels[prediction]

    probabilities = model.predict_proba(vector)[0]

    scores = []

    for idx, prob in enumerate(probabilities):
        scores.append({
            "emotion": reverse_labels[idx],
            "confidence": round(float(prob * 100), 2)
        })

    confidence = round(float(max(probabilities) * 100), 2)

    return {
        "emotion": emotion,
        "confidence": confidence,
        "scores": scores
    }
@app.post("/predict-dataset")
async def predict_dataset(file: UploadFile = File(...)):

    df = pd.read_csv(file.file)

    if "text" not in df.columns:
        return JSONResponse(
            status_code=400,
            content={
                "error": "CSV must contain a 'text' column."
            }
        )

    df["clean_text"] = df["text"].apply(preprocess)

    X = vectorizer.transform(df["clean_text"])

    predictions = model.predict(X)

    df["emotion"] = [reverse_labels[p] for p in predictions]

    df.drop(columns=["clean_text"], inplace=True)

    return df.to_dict(orient="records")