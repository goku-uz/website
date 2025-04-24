// filepath: /Users/haywan/Desktop/learning-golang/goku.uz/src/app/handbook/_data.ts
type ChapterSection = {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  isNew?: boolean;
  isUpdated?: boolean;
  isPremium?: boolean;
};

type Chapter = {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  color: string;
  sections: ChapterSection[];
};

export const HANDBOOK_CHAPTERS: Chapter[] = [
  {
    id: "basics",
    title: "Go Asoslari",
    description:
      "Go dasturlash tili bo'yicha asosiy ma'lumotlar va ko'nikmalar",
    slug: "basics",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
    color: "#3B82F6",
    sections: [
      {
        title: "Go ga Kirish",
        description:
          "Go dasturlash tiliga umumiy kirish, uning o'rnatilishi va birinchi dastur",
        slug: "introduction",
        keywords: ["go", "golang", "installation", "setup", "hello world"],
        isNew: true,
      },
      {
        title: "O'zgaruvchilar va Ma'lumot Turlari",
        description: "Go dagi o'zgaruvchilar va asosiy ma'lumot turlari haqida",
        slug: "variables-and-data-types",
        keywords: ["variables", "data types", "int", "string", "float", "bool"],
      },
      {
        title: "Operatorlar va Ifodalar",
        description: "Go da operatorlar va ifodalar bilan ishlash",
        slug: "operators-and-expressions",
        keywords: [
          "operators",
          "expressions",
          "arithmetic",
          "logical",
          "comparison",
        ],
      },
      {
        title: "Shart operatorlari",
        description: "If, else, switch kabi shart operatorlari",
        slug: "conditionals",
        keywords: ["if", "else", "switch", "conditions"],
      },
      {
        title: "Takrorlanish operatorlari",
        description: "For, range, loop kabi takrorlanish operatorlari",
        slug: "loops",
        keywords: ["for", "range", "loop", "iteration"],
      },
    ],
  },
  {
    id: "func-structs",
    title: "Funksiyalar va Strukturalar",
    description: "Go da funksiyalar, metodlar va strukturalar bilan ishlash",
    slug: "functions-and-structs",
    icon: "M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z M11 4a1 1 0 10-2 0v7.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V4z",
    color: "#F59E0B",
    sections: [
      {
        title: "Funksiyalar",
        description: "Go funksiyalari, parameterlar va qaytarish qiymatlari",
        slug: "functions",
        keywords: ["functions", "parameters", "return values", "variadic"],
      },
      {
        title: "Strukturalar (Struct)",
        description: "Go da strukturalar va ularni yaratish",
        slug: "structs",
        keywords: ["struct", "types", "custom types"],
      },
      {
        title: "Metodlar",
        description: "Strukturalar uchun metodlar yaratish",
        slug: "methods",
        keywords: ["methods", "receiver", "struct methods"],
      },
      {
        title: "Interface",
        description: "Go da interface va ularni ishlatish",
        slug: "interfaces",
        keywords: ["interface", "polymorphism", "implementation"],
        isUpdated: true,
      },
      {
        title: "Paketlar va Modullar",
        description:
          "Go paketlaridan foydalanish va o'z modullaringizni yaratish",
        slug: "packages-and-modules",
        keywords: ["package", "module", "import", "go mod"],
      },
    ],
  },
  {
    id: "concurrency",
    title: "Parallellik",
    description: "Go da goroutines va kanallar orqali parallel dasturlash",
    slug: "concurrency",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "#10B981",
    sections: [
      {
        title: "Goroutines",
        description: "Go da yengil vazn threadlar bilan ishlash",
        slug: "goroutines",
        keywords: ["goroutine", "concurrency", "parallel"],
      },
      {
        title: "Kanallar (Channels)",
        description: "Kanallar orqali goroutinlar o'rtasida ma'lumot almashish",
        slug: "channels",
        keywords: ["channel", "communication", "synchronization"],
      },
      {
        title: "Select Operatori",
        description:
          "Select orqali bir nechta kanal operatsiyalarini boshqarish",
        slug: "select",
        keywords: ["select", "multiple channels", "non-blocking"],
      },
      {
        title: "Sync paketi",
        description: "Go ning sync paketi bilan ishlash (mutex, waitgroup)",
        slug: "sync-package",
        keywords: ["mutex", "waitgroup", "atomic", "once"],
      },
      {
        title: "Parallel Patternlar",
        description: "Go da parallel dasturlash patternlari",
        slug: "concurrency-patterns",
        keywords: ["worker pool", "pipeline", "fan-out", "fan-in"],
        isNew: true,
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web Dasturlash",
    description: "Go bilan web dasturlash va API ishlab chiqish",
    slug: "web-development",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "#8B5CF6",
    sections: [
      {
        title: "HTTP Server",
        description: "Go da HTTP server yaratish",
        slug: "http-server",
        keywords: ["http", "server", "net/http", "handler"],
      },
      {
        title: "Routing",
        description: "HTTP so'rovlarini marshrutlash",
        slug: "routing",
        keywords: ["router", "mux", "endpoints"],
      },
      {
        title: "Middleware",
        description: "HTTP middleware yaratish va ishlatish",
        slug: "middleware",
        keywords: ["middleware", "handler chaining", "logging"],
      },
      {
        title: "REST API",
        description: "Go da REST API yaratish",
        slug: "rest-api",
        keywords: ["rest", "api", "json", "endpoints"],
        isUpdated: true,
      },
      {
        title: "Ma'lumotlar bazasi bilan ishlash",
        description:
          "Go da ma'lumotlar bazalariga ulanish va so'rovlar yuborish",
        slug: "database-connectivity",
        keywords: ["sql", "database", "query", "orm"],
      },
    ],
  },
  {
    id: "advanced",
    title: "Ilg'or Go",
    description: "Go ning ilg'or xususiyatlari va keng qo'llanilishi",
    slug: "advanced",
    icon: "M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z",
    color: "#EC4899",
    sections: [
      {
        title: "Refleksiya",
        description: "Go da runtime refleksiyadan foydalanish",
        slug: "reflection",
        keywords: ["reflect", "runtime", "type", "value"],
        isPremium: true,
      },
      {
        title: "Go Generiklar",
        description: "Go 1.18+ da generik dasturlash",
        slug: "generics",
        keywords: ["generics", "type parameters", "constraints"],
        isNew: true,
      },
      {
        title: "Context",
        description: "Go context paketi bilan ishlash",
        slug: "context",
        keywords: ["context", "cancellation", "deadline", "value"],
      },
      {
        title: "Testlash",
        description: "Go da birlik va integratsion testlarni yozish",
        slug: "testing",
        keywords: ["testing", "unit tests", "benchmark", "mocking"],
      },
      {
        title: "Profiling va Optimizatsiya",
        description: "Go dasturlarini profilaydlash va optimizatsiya qilish",
        slug: "profiling",
        keywords: ["pprof", "profiling", "optimization", "performance"],
        isPremium: true,
      },
    ],
  },
];

export const ADDITIONAL_RESOURCES = [
  {
    title: "Go Standart Kutubxonasi",
    description: "Go ning standart kutubxonalariga batafsil qo'llanma",
    url: "/resources/standard-library",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "#2563EB",
  },
  {
    title: "Go Dasturiy Pattern-lar",
    description: "Golang uchun eng yaxshi amaliyotlar va dasturiy pattern-lar",
    url: "/resources/design-patterns",
    icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5",
    color: "#8B5CF6",
  },
  {
    title: "Go Ecosystem",
    description: "Go ekosistemasi va muhim uchinchi tomon paketlari haqida",
    url: "/resources/ecosystem",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    color: "#F59E0B",
  },
  {
    title: "Go Bilan Microservice Arxitekturasi",
    description: "Go da microservice-lar ishlab chiqish bo'yicha qo'llanma",
    url: "/resources/microservices",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    color: "#10B981",
  },
];

export const AUTHORS = [
  {
    name: "Abdurahmon Mamadiyorov",
    image: "/logo.jpeg",
    profile: "https://github.com/abdurahmon27",
    role: "Go Uzbekistan asoschisi",
    chapters: ["basics", "func-structs"],
  },
  {
    name: "Go Master",
    image: "/logo.jpeg",
    profile: "https://github.com/gomaster",
    role: "Senior Go dasturchi",
    chapters: ["concurrency", "advanced"],
  },
  {
    name: "Backend Ninja",
    image: "/logo.jpeg",
    profile: "https://github.com/backendninja",
    role: "Dasturchi va Texnik yozuvchi",
    chapters: ["web-dev"],
  },
];

export const READING_PROGRESS = {
  total: HANDBOOK_CHAPTERS.reduce(
    (acc, chapter) => acc + chapter.sections.length,
    0
  ),
  completed: 0,
  nextRecommendation: {
    chapterId: "basics",
    sectionSlug: "introduction",
    title: "Go ga Kirish",
  },
};
