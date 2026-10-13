import { GoogleGenAI } from '@google/genai';

// Your API key integrated directly
const apiKey = process.env.GEMINI_API_KEY;

async function runTest() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Explain how AI works in a few words',
    });
    console.log("AI Response:", response.text);
  } catch (error) {
    console.error("Error connecting to Gemini:", error);
  }
}

runTest();