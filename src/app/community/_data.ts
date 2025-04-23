const TELEGRAM_CHANNELS = [
  {
    name: "Go Uzbekistan",
    username: "@golang_uzbek_community",
    members: "2.5K+",
    description: "Rasmiy O'zbek Go dasturchilar hamjamiyati",
    link: "https://t.me/golang_uzbek_community",
    isOfficial: true,
  },
  {
    name: "Go Jobs UZ",
    username: "@gojobs_uz",
    members: "850+",
    description: "Go bilan bog'liq vakansiyalar va frilanserlar",
    link: "https://t.me/gojobs_uz",
    isOfficial: false,
  },
  {
    name: "Soutpaw's Mindscape🦅",
    username: "@abdurahmon_mamadiyorov",
    members: "300+",
    description: "Go tilidagi eng so'nggi yangiliklar va maqolalar",
    link: "https://t.me/abdurahmon_mamadiyorov",
    isOfficial: false,
  },
];

const YOUTUBE_CHANNELS = [
  {
    name: "Go Uzbekistan",
    subscribers: "5.2K+",
    thumbnailUrl: "/youtube-gopher.png",
    url: "https://www.youtube.com/channel/UC6j51JFDtA1AsUyPMbG81Xg",
    description: "Rasmiy O'zbek Go dasturlash tili bo'yicha video darsliklar",
  },
  {
    name: "Go Backend Show",
    subscribers: "3.8K+",
    thumbnailUrl: "/youtube-gopher.png",
    url: "https://youtube.com/@gobackendshow",
    description: "Go bilan backend ishlab chiqish bo'yicha video kontent",
  },
  {
    name: "Go Praktikum",
    subscribers: "4.1K+",
    thumbnailUrl: "/youtube-gopher.png",
    url: "https://youtube.com/@gopraktikum",
    description: "Go bilan amaliy loyihalar qurishni o'rganish",
  },
];

const GITHUB_CONTRIBUTORS = [
  {
    name: "Abdurahmon",
    avatarUrl: "/logo.jpeg",
    username: "abdurahmon27",
    contributions: 78,
  },
  {
    name: "Go Master",
    avatarUrl: "/logo.jpeg",
    username: "gomaster",
    contributions: 64,
  },
  {
    name: "Gopher UZ",
    avatarUrl: "/logo.jpeg",
    username: "gopheruz",
    contributions: 52,
  },
  {
    name: "Backend Ninja",
    avatarUrl: "/logo.jpeg",
    username: "backendninja",
    contributions: 47,
  },
  {
    name: "Code Queen",
    avatarUrl: "/logo.jpeg",
    username: "codequeen",
    contributions: 41,
  },
  {
    name: "API Wizard",
    avatarUrl: "/logo.jpeg",
    username: "apiwizard",
    contributions: 38,
  },
];

const DONATION_OPTIONS = [
  {
    name: "Patreon",
    color: "#FF424D",
    icon: "M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21zM2 21.6h3.5V2.41H2V21.6z",
    description: "Muntazam homiylik orqali qo'llab-quvvatlang",
    buttonText: "Homiy bo'lish",
    url: "https://patreon.com/gouz",
  },
  {
    name: "Xalq Bank",
    color: "#0088CC",
    icon: "M3.16113 8.40231C3.16113 6.96271 3.96041 5.65307 5.20333 5.00414L16.9358 0.313701C19.1293 -0.671533 21.5895 0.841522 21.5895 3.26048V8.40231V14.4979V19.7398C21.5895 22.1587 19.1293 23.6718 16.9358 22.6866L5.20333 17.9961C3.96041 17.3472 3.16113 16.0376 3.16113 14.598V8.40231Z",
    description: "UzCard va Humo karta orqali qo'llab-quvvatlash",
    buttonText: "Pul o'tkazish",
    url: "https://payment.xb.uz/gouz",
  },
];

export {
  TELEGRAM_CHANNELS,
  YOUTUBE_CHANNELS,
  GITHUB_CONTRIBUTORS,
  DONATION_OPTIONS,
};
