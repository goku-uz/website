"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.jpeg"
                width={24}
                height={24}
                alt="Go Uzbekistan"
                className="rounded-full"
              />
              <h4 className="font-bold text-gray-800">GoKu.uz</h4>
            </div>
            <p className="text-gray-600 text-sm">
              O&apos;zbek dasturchilar uchun Go qo&apos;llanmasi
            </p>
          </div>

          {[
            {
              title: "Qo'llanma",
              links: [
                { text: "Asoslar", href: "/handbook/basics" },
                { text: "Murakkab mavzular", href: "/handbook/advanced" },
                { text: "Loyihalar", href: "/handbook/projects" },
                { text: "Qo'shimcha manbalar", href: "/handbook/resources" },
              ],
            },
            {
              title: "Jamiyat",
              links: [
                {
                  text: "Telegram",
                  href: "https://t.me/golang_uzbek_community",
                  external: true,
                },
                {
                  text: "GitHub",
                  href: "https://github.com/goku-uz",
                  external: true,
                },
                { text: "Tadbirlar", href: "/events" },
                { text: "Hissa qo'shganlar", href: "/contributors" },
              ],
            },
            {
              title: "Bog'lanish",
              links: [
                { text: "Biz haqimizda", href: "/about" },
                { text: "Aloqa", href: "/contact" },
                { text: "Hissa qo'shish", href: "/contribute" },
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h5 className="font-semibold text-gray-800 mb-3 text-sm">
                {section.title}
              </h5>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} GoKu.uz - O&apos;zbekiston Go dasturlash
            tili jamoasi
          </p>
        </div>
      </div>
    </footer>
  );
}