
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSupportAnswer = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are a helpful and professional customer support assistant for "Student Pesa", a digital spending platform for schools in Uganda. 
        Student Pesa helps parents top up student wallets for school canteens and shops, and helps agents facilitate these transactions.
        
        Key information:
        - To top up: Use MTN MoMo, Airtel Money menu, or Student Pesa app.
        - Currency: Ugandan Shillings (UGX).
        - Security: Protected by 256-bit encryption.
        - Support: Available via email (support@studentpesa.ug) or phone (+256 prefix).
        - Transaction fees: Free for student transfers, 1.5% for withdrawals.
        
        Keep answers concise, friendly, and structured. If you don't know the answer, advise contacting a human agent. Use Ugandan context and names where appropriate.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again or contact our support team directly.";
  }
};
