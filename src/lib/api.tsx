const { GoogleGenerativeAI } = require("@google/generative-ai");

class API {
    genAI: any;

    constructor() {
        this.genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    }

    async generate(
        prompt: string,
    ) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            return response.text();
        }
        catch (e) {
            console.error(e);
            return "Error converting code. Please try again.";
        }
    }
}

const api = new API();
export default api;