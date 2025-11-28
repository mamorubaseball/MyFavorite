import { Product, CategoryTheme, ParentCategory } from './types';

export const CATEGORY_THEMES: Record<ParentCategory, CategoryTheme> = {
  Furniture: {
    id: 'Furniture',
    label: 'Furniture',
    colors: {
      primary: 'text-amber-950',
      secondary: 'text-amber-700/60',
      accent: 'bg-amber-900',
      accentHover: 'hover:bg-amber-800',
      background: 'bg-[#FDFBF7]', // Warm off-white
      cardBg: 'bg-white',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      ring: 'ring-amber-200',
    }
  },
  Gadget: {
    id: 'Gadget',
    label: 'Gadget',
    colors: {
      primary: 'text-slate-900',
      secondary: 'text-slate-500',
      accent: 'bg-slate-900',
      accentHover: 'hover:bg-slate-800',
      background: 'bg-[#F8FAFC]', // Cool gray
      cardBg: 'bg-white',
      badgeBg: 'bg-slate-100',
      badgeText: 'text-slate-700',
      ring: 'ring-slate-200',
    }
  },
  Clothing: {
    id: 'Clothing',
    label: 'Clothing',
    colors: {
      primary: 'text-violet-950',
      secondary: 'text-violet-900/50',
      accent: 'bg-violet-900',
      accentHover: 'hover:bg-violet-800',
      background: 'bg-[#FDFBFF]', // Very light violet tint
      cardBg: 'bg-white',
      badgeBg: 'bg-violet-100',
      badgeText: 'text-violet-900',
      ring: 'ring-violet-200',
    }
  },
  GYM: {
    id: 'GYM',
    label: 'GYM',
    colors: {
      primary: 'text-emerald-950',
      secondary: 'text-emerald-700/60',
      accent: 'bg-emerald-800',
      accentHover: 'hover:bg-emerald-700',
      background: 'bg-[#F0FDF4]', // Mint tint
      cardBg: 'bg-white',
      badgeBg: 'bg-emerald-100',
      badgeText: 'text-emerald-800',
      ring: 'ring-emerald-200',
    }
  },
  Food: {
    id: 'Food',
    label: 'Food',
    colors: {
      primary: 'text-orange-950',
      secondary: 'text-orange-800/60',
      accent: 'bg-orange-700',
      accentHover: 'hover:bg-orange-600',
      background: 'bg-[#FFF7ED]', // Orange tint
      cardBg: 'bg-white',
      badgeBg: 'bg-orange-100',
      badgeText: 'text-orange-800',
      ring: 'ring-orange-200',
    }
  },
  Place: {
    id: 'Place',
    label: 'Place',
    colors: {
      primary: 'text-cyan-950',
      secondary: 'text-cyan-800/60',
      accent: 'bg-cyan-800',
      accentHover: 'hover:bg-cyan-700',
      background: 'bg-[#ECFEFF]', // Cyan tint
      cardBg: 'bg-white',
      badgeBg: 'bg-cyan-100',
      badgeText: 'text-cyan-800',
      ring: 'ring-cyan-200',
    }
  }
};

export const PRODUCTS: Product[] = [
  // Furniture
  {
    id: "F001",
    name: "Lounge Chair 01",
    category: "Seating",
    parentCategory: "Furniture",
    price: 158000,
    currency: "JPY",
    description: "ミッドセンチュリーにインスパイアされたラウンジチェア。低めの重心と広い座面が特徴で、読書の時間に没頭できます。",
    dimensions: "W75 x D80 x H70 cm",
    material: "Oak, Linen",
    imageSeeds: ["chair_wood", "chair_texture", "chair_room"],
    features: [
        "長時間座っても疲れない絶妙な傾斜",
        "経年変化を楽しめるオーク無垢材のアーム",
        "どんなラグにも合わせやすいリネン生地"
    ]
  },
  {
    id: "F002",
    name: "Walnut Coffee Table",
    category: "Table",
    parentCategory: "Furniture",
    price: 98000,
    currency: "JPY",
    description: "有機的なカーブを描くウォールナット無垢材のコーヒーテーブル。リビングルームに温かみと高級感を与えてくれます。",
    dimensions: "Ø90 x H35 cm",
    material: "American Walnut",
    imageSeeds: ["coffee_table", "wood_detail", "living_room"],
    features: [
        "角のない丸みのあるデザインで子供がいても安心",
        "オイル仕上げによるしっとりとした木肌",
        "ソファ前にちょうど良い高さ35cm"
    ]
  },
  
  // Gadget
  {
    id: "G001",
    name: "HHKB Professional",
    category: "Keyboard",
    parentCategory: "Gadget",
    price: 36800,
    currency: "JPY",
    description: "プログラマーに愛されるミニマルなキーボード。静電容量無接点方式による「スコスコ」という独特の打鍵感が病みつきになります。",
    dimensions: "60% Layout",
    material: "PBT Plastic",
    imageSeeds: ["keyboard_mech", "keycaps_detail", "desk_setup"],
    features: [
        "指への負担が極限まで少ないキースイッチ",
        "無駄を削ぎ落とした合理的なキー配列",
        "持ち運びも可能なコンパクトサイズ"
    ]
  },
  {
    id: "G002",
    name: "Analog Rangefinder",
    category: "Photography",
    parentCategory: "Gadget",
    price: 320000,
    currency: "JPY",
    description: "マニュアル操作の楽しさを教えてくれるレンジファインダーカメラ。一枚一枚丁寧にシャッターを切る体験が得られます。",
    dimensions: "35mm Full Frame",
    material: "Magnesium Alloy",
    imageSeeds: ["leica_camera", "camera_lens", "street_photo"],
    features: [
        "所有欲を満たす金属の質感と重量感",
        "直感的なマニュアルフォーカス操作",
        "フィルムのような粒状感のある描写"
    ]
  },

  // Clothing
  {
    id: "C001",
    name: "Raw Denim Jacket",
    category: "Outerwear",
    parentCategory: "Clothing",
    price: 38000,
    currency: "JPY",
    description: "14オンスの日本製セルビッチデニムを使用したジャケット。最初は硬いですが、着込むほどに体に馴染み、世界に一つだけの一着になります。",
    dimensions: "Size M (Regular)",
    material: "100% Cotton",
    imageSeeds: ["denim_jacket", "denim_texture", "outfit_mirror"],
    features: [
        "岡山県産の高品質なセルビッチデニム",
        "ヴィンテージライクな銅製リベット",
        "育てる楽しみがあるリジッド（未洗い）仕様"
    ]
  },
  {
    id: "C002",
    name: "Leather Chelsea Boots",
    category: "Footwear",
    parentCategory: "Clothing",
    price: 65000,
    currency: "JPY",
    description: "美しいシルエットと耐久性を兼ね備えたチェルシーブーツ。グッドイヤーウェルト製法で作られており、ソール交換をして長く履けます。",
    dimensions: "US 9.5",
    material: "Full Grain Leather",
    imageSeeds: ["boots_leather", "leather_detail", "shoes_shelf"],
    features: [
        "脱ぎ履きがスムーズなサイドゴア",
        "雨の日でも安心なダイナイトソール",
        "足首が細く見えるスマートな木型"
    ]
  },

  // GYM
  {
    id: "GY001",
    name: "Iron Kettlebell",
    category: "Equipment",
    parentCategory: "GYM",
    price: 12000,
    currency: "JPY",
    description: "機能的なトレーニングに欠かせないケトルベル。全身の連動性を高めるスイングやゲットアップに最適です。",
    dimensions: "24kg",
    material: "Cast Iron",
    imageSeeds: ["kettlebell", "gym_floor", "workout_hand"],
    features: [
        "滑りにくいパウダーコート仕上げ",
        "握りやすいハンドルの太さ",
        "一生使える頑丈な鋳鉄製"
    ]
  },
  
  // Food
  {
    id: "FD001",
    name: "Ethiopian Yirgacheffe",
    category: "Coffee",
    parentCategory: "Food",
    price: 3200,
    currency: "JPY",
    description: "ベルガモットやレモンのような華やかな香りが特徴の浅煎りコーヒー豆。午後のリラックスタイムに最適です。",
    dimensions: "200g",
    material: "Whole Bean",
    imageSeeds: ["coffee_beans", "coffee_drip", "cafe_morning"],
    features: [
        "紅茶のように透き通ったクリーンな味わい",
        "注文後に焙煎される鮮度の高さ",
        "ジッパー付きで保存しやすいパッケージ"
    ]
  },
  {
    id: "FD002",
    name: "Craft Gin Bottle",
    category: "Spirits",
    parentCategory: "Food",
    price: 5800,
    currency: "JPY",
    description: "柚子や山椒などの和素材を使用したクラフトジン。ソーダ割りにするだけで、居酒屋とは一味違う贅沢な一杯になります。",
    dimensions: "700ml",
    material: "Glass, Cork",
    imageSeeds: ["gin_bottle", "cocktail_glass", "bar_counter"],
    features: [
        "鼻に抜ける爽やかな柑橘の香り",
        "ロックでも楽しめるまろやかな口当たり",
        "インテリアとして飾れる美しいボトルデザイン"
    ]
  },

  // Place
  {
    id: "P001",
    name: "City Central Library",
    category: "Public Space",
    parentCategory: "Place",
    price: 0,
    currency: "JPY",
    description: "都会の喧騒を忘れさせてくれる静寂な空間。高い天井と無限に続く本棚が、知的好奇心を刺激してくれます。",
    dimensions: "Downtown",
    material: "Concrete, Glass",
    imageSeeds: ["library_interior", "bookshelf_wall", "reading_nook"],
    features: [
        "電源とWi-Fi完備の快適な作業スペース",
        "自然光が降り注ぐ大きな窓",
        "週末でも比較的空いている穴場スポット"
    ]
  }
];