import string
from nltk.stem import WordNetLemmatizer
import nltk

try:
    nltk.data.find("corpora/wordnet")
except LookupError:
    nltk.download("wordnet")
    nltk.download("omw-1.4")
import nltk

try:
    nltk.data.find("corpora/wordnet")
except LookupError:
    nltk.download("wordnet")
    nltk.download("omw-1.4")

lemmatizer = WordNetLemmatizer()

def remove_pun(txt):
    return txt.translate(str.maketrans('', '', string.punctuation))

def remove_num(txt):
    new = ""
    for i in txt:
        if not i.isdigit():
            new += i
    return new

def remove_emo(txt):
    new = ""
    for i in txt:
        if i.isascii():
            new += i
    return new

def lemmatize_text(text):
    words = text.split()
    words = [lemmatizer.lemmatize(word) for word in words]
    return " ".join(words)

def preprocess(text):
    text = text.lower()
    text = remove_pun(text)
    text = remove_num(text)
    text = remove_emo(text)
    text = lemmatize_text(text)
    return text