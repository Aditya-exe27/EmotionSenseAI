import { createContext, useContext, useState } from "react";

const AnalysisContext = createContext();

export function AnalysisProvider({ children }) {

  const [results, setResults] = useState([]);

  return (
    <AnalysisContext.Provider
      value={{
        results,
        setResults,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  return useContext(AnalysisContext);
}