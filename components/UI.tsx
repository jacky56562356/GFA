
import React, { useState, useRef, useEffect } from 'react';

// Card component with optional interactivity and Hollywood-style borders
export const Card: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <div 
    className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-300 ${onClick ? 'cursor-pointer hover:border-gold/30 hover:bg-zinc-900/80 active:scale-[0.99]' : ''} ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);

// High-fidelity Button component with GFA branding
export const Button: React.FC<{ 
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }) => {
  const base = "px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:active:scale-100 whitespace-nowrap";
  const variants = {
    primary: "bg-gold text-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]",
    secondary: "bg-white text-black hover:bg-zinc-200",
    outline: "bg-transparent border border-zinc-700 text-white hover:border-gold hover:text-gold",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50"
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};

// Polished Badge component for skills and status labels - updated to support className prop to fix Dashboard errors
export const Badge: React.FC<{ children: React.ReactNode; color?: string; onRemove?: () => void; className?: string }> = ({ children, color = 'gold', onRemove, className = '' }) => {
  const colors: Record<string, string> = {
    gold: "bg-gold/10 text-gold border-gold/30",
    green: "bg-green-500/10 text-green-500 border-green-500/30",
    blue: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    red: "bg-red-500/10 text-red-500 border-red-500/30",
    zinc: "bg-zinc-500/10 text-zinc-400 border-zinc-500/30"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-wider transition-all duration-200 ${colors[color] || colors.zinc} ${className}`}>
      {children}
      {onRemove && (
        <button 
          onClick={(e) => { e.stopPropagation(); onRemove(); }} 
          className="ml-1 hover:text-white transition-colors focus:outline-none"
          aria-label="Remove skill"
        >
          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      )}
    </span>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input 
    {...props}
    className={`w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all placeholder:text-zinc-600 ${props.className || ''}`}
  />
);

interface TagInputProps {
  tags: string[];
  suggestions: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

// Improved TagInput with dropdown positioning and GFA theme
export const TagInput: React.FC<TagInputProps> = ({ tags, suggestions, onChange, placeholder = "Add skill..." }) => {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = suggestions.filter(s => 
    s.toLowerCase().includes(input.toLowerCase()) && !tags.includes(s)
  );

  const addTag = (tag: string) => {
    const trimmed = tag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
    }
    setInput('');
    setShowSuggestions(false);
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter(t => t !== tag));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div 
        className="flex flex-wrap gap-2 min-h-[52px] p-3 bg-zinc-950/50 border border-zinc-800 rounded-xl focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 transition-all cursor-text"
        onClick={() => containerRef.current?.querySelector('input')?.focus()}
      >
        {tags.map(tag => (
          <Badge key={tag} onRemove={() => removeTag(tag)} color="gold">{tag}</Badge>
        ))}
        <input
          className="flex-1 bg-transparent border-none outline-none text-sm px-1 py-1 min-w-[140px] text-white"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && input) {
              e.preventDefault();
              addTag(input);
            } else if (e.key === 'Backspace' && !input && tags.length > 0) {
              removeTag(tags[tags.length - 1]);
            }
          }}
          placeholder={tags.length === 0 ? placeholder : "Add more..."}
        />
      </div>

      {showSuggestions && (input || filteredSuggestions.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-[200] max-h-56 overflow-y-auto custom-scrollbar">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map(s => (
              <button
                key={s}
                className="w-full text-left px-4 py-2.5 text-sm hover:bg-gold hover:text-black transition-colors font-medium border-b border-zinc-800 last:border-none"
                onClick={() => addTag(s)}
              >
                {s}
              </button>
            ))
          ) : input && (
            <button
              className="w-full text-left px-4 py-2.5 text-sm hover:bg-zinc-800 hover:text-gold transition-colors italic text-zinc-400"
              onClick={() => addTag(input)}
            >
              Add custom skill: <span className="font-bold text-white">"{input}"</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
