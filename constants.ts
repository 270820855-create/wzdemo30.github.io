
import { NavLink, Category, PetSkin, BuiltInGame } from './types';

// Custom Pixel Art SVG Icons for Categories
export const PIXEL_ICONS: Record<string, string> = {
  ALL: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M7 0h2v2H7V0zM5 2h6v2H5V2zM3 4h10v2H3V4zM1 6h14v6H1V6zm2 6h10v2H3v-2zm2 2h6v2H5v-2z" /></svg>`,
  COLLECTION: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M7 2h2v2H7V2zM5 4h6v2H5V4zM3 6h10v2H3V6zM1 8h14v2H1V8zm2 2h10v2H3v-2zm2 2h6v2H5v-2zm2 2h2v2H7v-2z" /></svg>`,
  AI: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 0h8v2H4V0zM2 2h12v2H2V2zM0 4h16v8H0V4zm2 8h12v2H2v-2zm2 2h8v2H4v-2zm1-8h2v2H5V6zm4 0h2v2H9V6zm-4 4h6v2H5v-2z" /></svg>`,
  DESIGN: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M10 0h4v2h-4V0zM8 2h4v2H8V2zM6 4h4v2H6V4zM4 6h4v2H4V6zM2 8h4v2H2V8zM0 10h4v6H0v-6zm12 2h4v4h-4v-4z" /></svg>`,
  FRONTEND: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 2h16v12H0V2zm2 2v8h12V4H2zm2 1h2v2H4V5zm0 4h2v2H4V9zm4-4h4v2H8V5zm0 4h4v2H8V9z" /></svg>`,
  MEDIA: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h12v8H2V2zm0 10h12v2H2v-2zM4 4h4v4H4V4zm6 0h2v2h-2V4zm0 4h2v2h-2V8z" /></svg>`,
  TOOLS: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M10 0h6v6h-2V2h-4V0zM0 0h6v2H2v4H0V0zm0 10h2v4h4v2H0v-6zm10 6v-2h4v-4h2v6h-6zM6 6h4v4H6V6z" /></svg>`,
  GAME: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M3 4h10v6H3V4zm-2 2h2v2H1V6zm12 0h2v2h-2V6zm-9 6h8v2H4v-2z" /></svg>`,
};

export const COLORS = [
  'bg-jinx-pink',
  'bg-jinx-blue',
  'bg-neon-green',
  'bg-purple-500',
  'bg-yellow-400',
  'bg-gray-800',
  'bg-red-500',
  'bg-blue-500',
];

export const CATEGORIES: { id: Category; icon: string }[] = [
  { id: 'ALL', icon: PIXEL_ICONS.ALL },
  { id: 'COLLECTION', icon: PIXEL_ICONS.COLLECTION },
  { id: 'AI', icon: PIXEL_ICONS.AI },
  { id: 'DESIGN', icon: PIXEL_ICONS.DESIGN },
  { id: 'FRONTEND', icon: PIXEL_ICONS.FRONTEND },
  { id: 'MEDIA', icon: PIXEL_ICONS.MEDIA },
  { id: 'TOOLS', icon: PIXEL_ICONS.TOOLS },
  { id: 'GAME', icon: PIXEL_ICONS.GAME },
];

export const PET_SKINS: PetSkin[] = [
  { id: 'girl-white', name: '暴走蓝发', avatarColor: '#00E5FF', description: '蓝发双马尾的疯狂少女' },
  { id: 'girl-pink', name: '星之使者', avatarColor: '#0F172A', description: '披着白袍的神秘少女' },
  { id: 'goth-bunny', name: '暗夜兔', avatarColor: '#18181B', description: '酷酷的暗黑系兔耳少女' },
  { id: 'cat-orange', name: '墨水猫', avatarColor: '#FDBA74', description: '打翻了墨水瓶' },
];

export const BUILT_IN_GAMES: BuiltInGame[] = [
  { id: 'tetris3d', name: '微型积木', description: 'BUILDER', icon: '🧱', color: 'bg-yellow-400' },
  { id: 'snake', name: '贪吃蛇', description: 'CLASSIC', icon: '🐍', color: 'bg-neon-green' },
  { id: '2048', name: '2048', description: 'PUZZLE', icon: '🔢', color: 'bg-orange-400' },
  { id: 'minesweeper', name: '扫雷', description: 'LOGIC', icon: '💣', color: 'bg-gray-600' },
];

export const SEARCH_ENGINES = [
  { id: 'google', name: 'GO', url: 'https://www.google.com/search?q=', color: '#4285F4' },
  { id: 'baidu', name: 'DU', url: 'https://www.baidu.com/s?wd=', color: '#2932E1' },
  { id: 'bilibili', name: 'BILI', url: 'https://search.bilibili.com/all?keyword=', color: '#FB7299' },
  { id: 'github', name: 'GIT', url: 'https://github.com/search?q=', color: '#171515' },
];

export const DEFAULT_LINKS: NavLink[] = [
  // --- AI ZONE ---
  { id: 'ai-1', title: '豆包', url: 'https://www.doubao.com', color: 'bg-jinx-pink text-white', icon: '👾', category: 'AI' },
  { id: 'ai-2', title: '文心一言', url: 'https://yiyan.baidu.com', color: 'bg-jinx-pink text-white', icon: '👾', category: 'AI' },
  { id: 'ai-3', title: '讯飞星火', url: 'https://xinghuo.xfyun.cn', color: 'bg-jinx-pink text-white', icon: '⚡', category: 'AI' },
  { id: 'ai-4', title: '通义千问', url: 'https://tongyi.aliyun.com', color: 'bg-jinx-pink text-white', icon: '👾', category: 'AI' },
  { id: 'ai-8', title: 'ChatGPT', url: 'https://chat.openai.com', color: 'bg-neon-green text-black', icon: '👾', category: 'AI' },
  { id: 'ai-13', title: 'midjourney', url: 'https://midjourney.com', color: 'bg-jinx-pink text-white', icon: '🎨', category: 'AI' },
  { id: 'ai-17', title: 'HuggingFace', url: 'https://huggingface.co', color: 'bg-jinx-pink text-white', icon: '🤗', category: 'AI' },

  // --- DESIGN ZONE ---
  { id: 'des-1', title: 'Figma', url: 'https://www.figma.com', color: 'bg-purple-600 text-white', icon: '📐', category: 'DESIGN' },
  { id: 'des-4', title: '猫趣', url: 'https://catfun.org', color: 'bg-jinx-pink text-white', icon: '🐱', category: 'DESIGN' },

  // --- FRONTEND ZONE ---
  { id: 'fe-2', title: 'Github', url: 'https://github.com', color: 'bg-black text-white', icon: '👾', category: 'FRONTEND' },
  { id: 'fe-4', title: '菜鸟工具', url: 'https://cainiaojc.com', color: 'bg-green-500 text-white', icon: '🛠️', category: 'FRONTEND' },

  // --- MEDIA ZONE ---
  { id: 'med-1', title: 'Bilibili', url: 'https://www.bilibili.com', color: 'bg-blue-400 text-white', icon: '📺', category: 'MEDIA' },
  { id: 'med-2', title: 'YouTube', url: 'https://www.youtube.com', color: 'bg-red-600 text-white', icon: '▶️', category: 'MEDIA' },
  { id: 'med-3', title: '樱花动漫', url: 'http://hyys19.com', color: 'bg-jinx-pink text-white', icon: '🌸', category: 'MEDIA' },

  // --- TOOLS ZONE ---
  { id: 'tool-2', title: '中午吃什么', url: 'https://chishenme.xyz', color: 'bg-gray-200 text-black', icon: '🍱', category: 'TOOLS' },
  { id: 'tool-6', title: 'Mikutap', url: 'https://aidn.jp', color: 'bg-jinx-pink text-white', icon: '🎵', category: 'TOOLS' },

  // --- GAME ZONE ---
  { id: 'game-4', title: 'crazygames', url: 'https://crazygames.com', color: 'bg-purple-600 text-white', icon: '🕹️', category: 'GAME' },
  { id: 'game-5', title: '在线 DOS 游戏', url: 'https://dos.zcrc.cz', color: 'bg-black text-white', icon: '💾', category: 'GAME' },
];
