import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: '#F9FAFB',
  			foreground: '#111827',
  			card: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#111827'
  			},
  			popover: {
  				DEFAULT: '#FFFFFF',
  				foreground: '#111827'
  			},
  			primary: {
  				DEFAULT: '#1E3A8A', // Bleu cobalt
  				foreground: '#FFFFFF'
  			},
  			secondary: {
  				DEFAULT: '#22D3EE', // Turquoise doux
  				foreground: '#111827'
  			},
  			muted: {
  				DEFAULT: '#E5E7EB', // Gris clair
  				foreground: '#6B7280' // Gris moyen
  			},
  			accent: {
  				DEFAULT: '#22D3EE', // Turquoise
  				foreground: '#111827'
  			},
  			destructive: {
  				DEFAULT: '#EF4444', // Rouge vif
  				foreground: '#FFFFFF'
  			},
        success: {
          DEFAULT: '#10B981', // Vert émeraude
          foreground: '#FFFFFF'
        },
        info: {
          DEFAULT: '#6366F1', // Indigo clair
          foreground: '#FFFFFF'
        },
  			border: '#E5E7EB',
  			input: '#E5E7EB',
  			ring: '#1E3A8A',
  			chart: {
  				'1': '#1E3A8A', // Bleu cobalt
  				'2': '#22D3EE', // Turquoise
  				'3': '#10B981', // Vert
  				'4': '#6366F1', // Indigo
  				'5': '#EF4444'  // Rouge
  			}
  		},
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
  	}
  },
  plugins: [animate],
};
export default config;
