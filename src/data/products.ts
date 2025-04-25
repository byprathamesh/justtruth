
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  nutritionRating: number;
  expertRating: number;
  preservativesLevel: 'green' | 'yellow' | 'red';
  budget: '₹' | '₹₹' | '₹₹₹';
  calories: number;
  sugar: number;
  protein: number;
  fat: number;
  additives: string[];
  ingredients: string[];
  source?: string;
  benefits?: string[];
  isJustBrand: boolean;
  alternatives?: string[];
  description?: string;
  testimonials?: {
    name: string;
    rating: number;
    comment: string;
  }[];
}

export const products: Product[] = [
  {
    id: "just-milk",
    name: "JustMilk",
    brand: "JustBrand",
    category: "dairy",
    price: 60,
    image: "/products/just-milk.png",
    nutritionRating: 4.8,
    expertRating: 4.9,
    preservativesLevel: 'green',
    budget: '₹₹',
    calories: 60,
    sugar: 4.8,
    protein: 3.3,
    fat: 3.0,
    additives: [],
    ingredients: ["Pure Milk", "No Preservatives"],
    source: "Local Organic Farms",
    benefits: [
      "No preservatives or additives",
      "Locally sourced from organic farms",
      "Rich in calcium and protein",
      "Supports local farmers"
    ],
    isJustBrand: true,
    alternatives: ["amul-milk", "mother-dairy-milk"],
    description: "100% pure milk with no preservatives or additives. Sourced from local organic farms and delivered fresh to your doorstep.",
    testimonials: [
      {
        name: "Rahul S.",
        rating: 5,
        comment: "Finally a milk brand I can trust! My kids love it and I feel good serving it to them."
      },
      {
        name: "Priya M.",
        rating: 4.5,
        comment: "The difference in taste is noticeable. Much creamier than other brands."
      },
      {
        name: "Amit K.",
        rating: 5,
        comment: "Been using JustMilk for 3 months now. No going back to regular brands."
      }
    ]
  },
  {
    id: "amul-milk",
    name: "Amul Milk",
    brand: "Amul",
    category: "dairy",
    price: 50,
    image: "/products/amul-milk.png",
    nutritionRating: 3.8,
    expertRating: 3.5,
    preservativesLevel: 'yellow',
    budget: '₹',
    calories: 65,
    sugar: 5.1,
    protein: 3.1,
    fat: 3.2,
    additives: ["Stabilizers", "Preservatives"],
    ingredients: ["Milk", "Stabilizers", "Preservatives"],
    isJustBrand: false,
    alternatives: ["just-milk", "mother-dairy-milk"],
    description: "Pasteurized milk available nationwide with a longer shelf life due to added preservatives."
  },
  {
    id: "mother-dairy-milk",
    name: "Mother Dairy Milk",
    brand: "Mother Dairy",
    category: "dairy",
    price: 55,
    image: "/products/mother-dairy-milk.png",
    nutritionRating: 3.9,
    expertRating: 3.7,
    preservativesLevel: 'yellow',
    budget: '₹₹',
    calories: 63,
    sugar: 4.9,
    protein: 3.2,
    fat: 3.1,
    additives: ["Stabilizers", "Preservatives"],
    ingredients: ["Milk", "Stabilizers", "Preservatives"],
    isJustBrand: false,
    alternatives: ["just-milk", "amul-milk"],
    description: "Homogenized milk processed for longer shelf life with standard quality controls."
  },
  {
    id: "just-cheese",
    name: "JustCheese",
    brand: "JustBrand",
    category: "dairy",
    price: 180,
    image: "/products/just-cheese.png",
    nutritionRating: 4.7,
    expertRating: 4.8,
    preservativesLevel: 'green',
    budget: '₹₹',
    calories: 350,
    sugar: 0.5,
    protein: 25,
    fat: 28,
    additives: [],
    ingredients: ["Milk", "Salt", "Enzymes"],
    source: "Local Organic Farms",
    benefits: [
      "No artificial additives",
      "Traditional cheese-making process",
      "Rich in calcium and protein",
      "No artificial colors"
    ],
    isJustBrand: true,
    alternatives: ["amul-cheese", "britannia-cheese"],
    description: "Artisanal cheese made the traditional way with minimal ingredients and maximum flavor.",
    testimonials: [
      {
        name: "Neha T.",
        rating: 5,
        comment: "This cheese is amazing! The taste is so much better than processed varieties."
      },
      {
        name: "Vijay R.",
        rating: 4.7,
        comment: "Great on sandwiches and perfect for cooking. My family loves it."
      }
    ]
  },
  {
    id: "amul-cheese",
    name: "Amul Cheese",
    brand: "Amul",
    category: "dairy",
    price: 120,
    image: "/products/amul-cheese.png",
    nutritionRating: 3.2,
    expertRating: 3.0,
    preservativesLevel: 'red',
    budget: '₹',
    calories: 330,
    sugar: 3.5,
    protein: 20,
    fat: 25,
    additives: ["Emulsifiers", "Preservatives", "Artificial Flavors"],
    ingredients: ["Milk Solids", "Emulsifiers", "Salt", "Preservatives", "Artificial Flavors"],
    isJustBrand: false,
    alternatives: ["just-cheese", "britannia-cheese"],
    description: "Processed cheese with emulsifiers for longer shelf life and consistent texture."
  },
  {
    id: "britannia-cheese",
    name: "Britannia Cheese",
    brand: "Britannia",
    category: "dairy",
    price: 130,
    image: "/products/britannia-cheese.png",
    nutritionRating: 3.3,
    expertRating: 3.1,
    preservativesLevel: 'red',
    budget: '₹₹',
    calories: 335,
    sugar: 2.8,
    protein: 22,
    fat: 26,
    additives: ["Emulsifiers", "Preservatives", "Artificial Flavors"],
    ingredients: ["Milk Solids", "Emulsifiers", "Salt", "Preservatives", "Artificial Flavors"],
    isJustBrand: false,
    alternatives: ["just-cheese", "amul-cheese"],
    description: "Processed cheese slices designed for convenience and flavor consistency."
  },
  {
    id: "just-butter",
    name: "JustButter",
    brand: "JustBrand",
    category: "dairy",
    price: 120,
    image: "/products/just-butter.png",
    nutritionRating: 4.9,
    expertRating: 4.9,
    preservativesLevel: 'green',
    budget: '₹₹',
    calories: 720,
    sugar: 0,
    protein: 0.5,
    fat: 81,
    additives: [],
    ingredients: ["Cream", "Salt"],
    source: "Local Organic Farms",
    benefits: [
      "No palm oil",
      "No artificial colors or flavors",
      "Traditional churning process",
      "Rich in fat-soluble vitamins"
    ],
    isJustBrand: true,
    alternatives: ["amul-butter", "britannia-butter"],
    description: "Pure butter made from organic cream with no palm oil or additives. Churned the traditional way.",
    testimonials: [
      {
        name: "Meera K.",
        rating: 5,
        comment: "The taste is incredible! Like the butter I used to have in my grandmother's village."
      },
      {
        name: "Suresh P.",
        rating: 4.8,
        comment: "My wife uses this for baking and the results are phenomenal. Worth every rupee."
      }
    ]
  },
  {
    id: "amul-butter",
    name: "Amul Butter",
    brand: "Amul",
    category: "dairy",
    price: 90,
    image: "/products/amul-butter.png",
    nutritionRating: 3.5,
    expertRating: 3.4,
    preservativesLevel: 'yellow',
    budget: '₹',
    calories: 730,
    sugar: 0.5,
    protein: 0.5,
    fat: 80,
    additives: ["Artificial Colors", "Preservatives"],
    ingredients: ["Cream", "Salt", "Preservatives", "Artificial Colors"],
    isJustBrand: false,
    alternatives: ["just-butter", "britannia-butter"],
    description: "India's most popular butter brand with consistent flavor and wide availability."
  },
  {
    id: "britannia-butter",
    name: "Britannia Butter",
    brand: "Britannia",
    category: "dairy",
    price: 95,
    image: "/products/britannia-butter.png",
    nutritionRating: 3.6,
    expertRating: 3.5,
    preservativesLevel: 'yellow',
    budget: '₹',
    calories: 728,
    sugar: 0.6,
    protein: 0.4,
    fat: 80,
    additives: ["Artificial Colors", "Preservatives"],
    ingredients: ["Cream", "Salt", "Preservatives", "Artificial Colors"],
    isJustBrand: false,
    alternatives: ["just-butter", "amul-butter"],
    description: "Table butter with consistent texture and flavor for everyday use."
  },
  {
    id: "just-chips",
    name: "JustChips",
    brand: "JustBrand",
    category: "snacks",
    price: 40,
    image: "/products/just-chips.png",
    nutritionRating: 4.2,
    expertRating: 4.3,
    preservativesLevel: 'green',
    budget: '₹₹',
    calories: 150,
    sugar: 0,
    protein: 2,
    fat: 8,
    additives: [],
    ingredients: ["Potatoes", "Cold-pressed Oil", "Rock Salt"],
    source: "Local Farms",
    benefits: [
      "No artificial flavors",
      "No MSG or flavor enhancers",
      "Hand-cut potatoes",
      "Cold-pressed oil for frying"
    ],
    isJustBrand: true,
    alternatives: ["lays-chips", "bingo-chips"],
    description: "Simple potato chips made with just three ingredients: potatoes, cold-pressed oil, and rock salt.",
    testimonials: [
      {
        name: "Deepak J.",
        rating: 4.5,
        comment: "These taste like real potatoes! My kids prefer these over the heavily flavored ones now."
      },
      {
        name: "Ananya P.",
        rating: 5,
        comment: "Love that I can actually pronounce all the ingredients. Great natural taste."
      }
    ]
  },
  {
    id: "lays-chips",
    name: "Lay's Classic",
    brand: "Lay's",
    category: "snacks",
    price: 20,
    image: "/products/lays-chips.png",
    nutritionRating: 2.3,
    expertRating: 2.1,
    preservativesLevel: 'red',
    budget: '₹',
    calories: 170,
    sugar: 1.5,
    protein: 1.8,
    fat: 10,
    additives: ["Flavor Enhancers", "Artificial Flavors", "Preservatives"],
    ingredients: ["Potatoes", "Vegetable Oil", "Salt", "Sugar", "Flavor Enhancers (E621)", "Artificial Flavors"],
    isJustBrand: false,
    alternatives: ["just-chips", "bingo-chips"],
    description: "Popular potato chips with added flavor enhancers for an addictive taste."
  }
];

export const featuredComparisons = [
  {
    id: "milk-comparison",
    title: "Amul Milk vs JustMilk",
    products: ["amul-milk", "just-milk"],
    highlights: [
      "60% fewer preservatives",
      "No artificial additives",
      "Higher protein content",
      "Fresher taste"
    ]
  },
  {
    id: "chips-comparison",
    title: "Lay's vs JustChips",
    products: ["lays-chips", "just-chips"],
    highlights: [
      "No MSG or flavor enhancers",
      "80% less sodium",
      "Natural rock salt",
      "Cold-pressed oil"
    ]
  },
  {
    id: "cheese-comparison",
    title: "Amul Cheese vs JustCheese",
    products: ["amul-cheese", "just-cheese"],
    highlights: [
      "No emulsifiers",
      "Traditional production",
      "No artificial flavors",
      "Higher calcium content"
    ]
  }
];

export const categories = [
  { id: "dairy", name: "Dairy Products", image: "/categories/dairy.png" },
  { id: "snacks", name: "Snacks", image: "/categories/snacks.png" },
  { id: "beverages", name: "Beverages", image: "/categories/beverages.png" },
  { id: "bread", name: "Bread & Bakery", image: "/categories/bread.png" },
  { id: "sweets", name: "Sweets", image: "/categories/sweets.png" }
];

export const educationalContent = [
  {
    id: "maltodextrin",
    title: "What is Maltodextrin?",
    thumbnail: "/education/maltodextrin.png",
    videoUrl: "/videos/maltodextrin-explained.mp4",
    relatedProducts: ["lays-chips"],
    description: "Maltodextrin is a common food additive used as a thickener, filler, or preservative. Learn about its effects on blood sugar levels and why it's so prevalent in processed foods."
  },
  {
    id: "hidden-sugar",
    title: "How to Spot Hidden Sugar",
    thumbnail: "/education/hidden-sugar.png",
    videoUrl: "/videos/hidden-sugar.mp4",
    relatedProducts: ["amul-milk", "britannia-cheese"],
    description: "Many products contain hidden sugars under different names. Learn how to identify them on ingredient lists and understand their impact on your health."
  },
  {
    id: "preservatives",
    title: "Preservatives Decoded",
    thumbnail: "/education/preservatives.png",
    videoUrl: "/videos/preservatives-decoded.mp4",
    relatedProducts: ["amul-milk", "lays-chips", "britannia-butter"],
    description: "Understand the different types of preservatives used in food products, their purpose, and potential health implications."
  },
  {
    id: "palm-oil",
    title: "The Problem with Palm Oil",
    thumbnail: "/education/palm-oil.png",
    videoUrl: "/videos/palm-oil-impact.mp4",
    relatedProducts: ["amul-butter", "britannia-butter"],
    description: "Palm oil is in countless products but has environmental and health concerns. Learn why and how to identify products that use sustainable alternatives."
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getJustBrandProducts(): Product[] {
  return products.filter(product => product.isJustBrand);
}

export function getComparisonById(id: string) {
  return featuredComparisons.find(comparison => comparison.id === id);
}

export function getComparisonProducts(comparisonId: string): Product[] {
  const comparison = getComparisonById(comparisonId);
  if (!comparison) return [];
  
  return comparison.products.map(productId => {
    const product = getProductById(productId);
    return product!;
  });
}

export function getMostSearchedProducts(): Product[] {
  // This would normally be based on actual search data
  // For now, just return a subset of products as "most searched"
  return [
    getProductById("just-milk")!,
    getProductById("amul-cheese")!,
    getProductById("just-butter")!,
    getProductById("lays-chips")!,
  ];
}
