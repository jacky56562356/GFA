import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Use a helper method to ensure we always use the required initialization pattern
  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateTalentSummary(profile: any) {
    try {
      const ai = this.getClient();
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a professional actor bio for ${profile.nameEn}. 
        Skills: ${profile.skills.join(', ')}. 
        Location: ${profile.location}. 
        Height: ${profile.height}cm.
        Write it in a Hollywood casting director's style, focusing on marketability. Limit to 3 sentences.`,
      });
      // Correctly access .text property from GenerateContentResponse
      return response.text || "Talent profile successfully updated.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Unable to generate summary at this time.";
    }
  }

  async analyzeAudition(submissionData: string) {
    try {
      const ai = this.getClient();
      // Using gemini-3-pro-preview for complex reasoning tasks like audition analysis
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `As an experienced Hollywood Casting Director, provide constructive feedback on this audition submission: ${submissionData}. Highlight 2 specific performance strengths and 1 area for improvement. Keep it professional, insightful, and realistic.`,
        config: {
          thinkingConfig: { thinkingBudget: 2000 } // Reserve tokens for reasoning
        }
      });
      // Correctly access .text property from GenerateContentResponse
      return response.text || "AI review is currently being processed.";
    } catch (error) {
      console.error("Gemini Analysis Error:", error);
      return "Constructive feedback unavailable at this moment.";
    }
  }
}

export const gemini = new GeminiService();