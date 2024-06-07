// src/utils/csvParser.js
import Papa from 'papaparse';

export const fetchCsvData = async (csvFilePath) => {
  const response = await fetch(csvFilePath);
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};
