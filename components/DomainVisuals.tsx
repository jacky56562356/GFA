
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const DOMAINS = [
  { id: 'film', prompt: 'A professional cinematic film set with high-end cameras, lighting equipment, and a director chair, in a dramatic gold and black aesthetic.' },
  { id: 'commercial', prompt: 'A modern commercial photography studio with softbox lights, a product display, and a clean professional atmosphere, gold accents.' },
  { id: 'model', prompt: 'A high-fashion runway or modeling photoshoot with spotlights, elegant backdrops, and a sense of prestige, gold and dark theme.' },
  { id: 'talent', prompt: 'A professional talent development workshop or acting class with a stage, scripts, and a supportive educational environment, cinematic lighting.' }
];

const DomainVisuals: React.FC = () => {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const generateImage = async (domainId: string, prompt: string) => {
    setLoading(prev => ({ ...prev, [domainId]: true }));
    try {
      const apiKey = typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : '';
      if (!apiKey) {
        throw new Error('Gemini API key is not configured');
      }
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
          },
        },
      });

      let imageUrl = '';
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          imageUrl = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (imageUrl) {
        setImages(prev => ({ ...prev, [domainId]: imageUrl }));
      } else {
        throw new Error('No image generated');
      }
    } catch (err) {
      console.error(`Error generating image for ${domainId}:`, err);
      setError('Failed to generate some visuals. Please ensure your API key is configured.');
    } finally {
      setLoading(prev => ({ ...prev, [domainId]: false }));
    }
  };

  useEffect(() => {
    DOMAINS.forEach(domain => {
      generateImage(domain.id, domain.prompt);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {DOMAINS.map(domain => (
        <div key={domain.id} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group">
          {loading[domain.id] ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gfa-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : images[domain.id] ? (
            <img 
              src={images[domain.id]} 
              alt={domain.id} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm italic">
              Visual for {domain.id}
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-xs font-bold uppercase tracking-widest text-gfa-gold">{domain.id}</span>
          </div>
        </div>
      ))}
      {error && (
        <div className="col-span-full text-center text-red-400 text-xs mt-4">
          {error}
        </div>
      )}
    </div>
  );
};

export default DomainVisuals;
