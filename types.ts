export type ParentCategory = 'Furniture' | 'Gadget' | 'Clothing' | 'GYM' | 'Food' | 'Place';

export interface CategoryTheme {
  id: ParentCategory;
  label: string;
  colors: {
    primary: string;      // Main text / headings
    secondary: string;    // Subtitles
    accent: string;       // Buttons, highlights
    accentHover: string;  // Button hovers
    background: string;   // Page background tint
    cardBg: string;       // Card background
    badgeBg: string;      // Category badge background
    badgeText: string;    // Category badge text
    ring: string;         // Focus rings / borders
  };
}

export interface Product {
  id: string;
  name: string;
  category: string;     // Sub-category (e.g., "Chair", "Headphones")
  parentCategory: ParentCategory; // Main category for theming
  price: number;
  currency: string;
  description: string;
  dimensions: string; // Or "Specs", "Location" etc.
  material: string;   // Or "Brand", "Cuisine" etc.
  imageSeeds: string[]; // Array of seeds for multiple images
  features: string[];   // "My Favorite Points"
}

export interface StylingAdvice {
  text: string;
  loading: boolean;
  error: string | null;
}