import OpenAI from "openai";
console.log(process.env.OPENAI_API_KEY ? "API key loaded" : "API key missing");
console.log("Base URL:", process.env.OPENAI_BASE_URL);
console.log("Model:", process.env.OPEN_AI_MODEL);
const ai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
});

export default ai
