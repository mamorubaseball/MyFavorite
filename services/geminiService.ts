import { GoogleGenAI } from "@google/genai";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client && process.env.API_KEY) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const generateStylingAdvice = async (productName: string, productDesc: string): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "API Key not configured. Please check your environment variables.";
  }

  try {
    const prompt = `
      You are a high-end interior design consultant for a minimalist furniture boutique.
      Give me a sophisticated, 2-sentence tip on how to style the following item in a modern home.
      Focus on color pairing, placement, or lighting. Keep it brief and elegant.
      
      Item: ${productName}
      Description: ${productDesc}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Could not generate advice at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to connect to the design consultant. Please try again later.";
  }
};