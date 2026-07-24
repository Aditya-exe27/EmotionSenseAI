/**
 * EmotionSense AI — API integration layer
 * ------------------------------------------------------------------
 * This file intentionally contains NO model, NO backend, and NO fake
 * predictions. Every function below is a placeholder that documents
 * the contract the future backend should fulfil. Wire each one up to
 * a real HTTP client (fetch/axios) once the inference service exists.
 * ------------------------------------------------------------------
 */

// TODO(backend): set the real base URL, e.g. via import.meta.env.VITE_API_URL
export const API_BASE_URL = "https://emotionsense-api.onrender.com";

export const ENDPOINTS = {
  // TODO(backend): POST { text: string } -> { emotion, confidence, scores[] }
  predictText: `${API_BASE_URL}/predict`,
  // TODO(backend): POST multipart/form-data { file: csv } -> { jobId }
  predictDataset: `${API_BASE_URL}/predict-dataset`,
  // TODO(backend): GET ?jobId= -> { status, progress, resultUrl }
  datasetJobStatus: `${API_BASE_URL}/predict/dataset/status`,
  // TODO(backend): GET -> { totalPredictions, classDistribution[], confidenceTrend[] }
  analyticsSummary: `${API_BASE_URL}/analytics/summary`,
};

/**
 * TODO(backend): Replace this stub with a real request to ENDPOINTS.predictText.
 * Expected response shape:
 * {
 *   emotion: "joy" | "sadness" | "anger" | "fear" | "surprise" | "neutral",
 *   confidence: number, // 0-1
 *   scores: { emotion: string, confidence: number }[]
 * }
 */
export async function predictText(text) {

  const response = await fetch(ENDPOINTS.predictText, {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      text: text,
    }),
  });

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return await response.json();
}

/**
 * TODO(backend): Replace this stub with a real upload to ENDPOINTS.predictDataset.
 * Expected response shape: { jobId: string }
 */
export async function predictDataset(file) {

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    ENDPOINTS.predictDataset,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Dataset prediction failed");
  }

  return await response.json();
}

/**
 * TODO(backend): Replace this stub with a real request to ENDPOINTS.analyticsSummary.
 */
export async function fetchAnalyticsSummary() {
  throw new Error(
    "fetchAnalyticsSummary() is not implemented. Connect this function to ENDPOINTS.analyticsSummary."
  );
}
