// src/components/MovieCategories.tsx
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import { RiTelegramLine } from "react-icons/ri";

const years = [
  { label: "2017-yil", href: "#" },
  { label: "2018-yil", href: "#" },
  { label: "2019-yil", href: "#" },
  { label: "2020-yil", href: "#" },
  { label: "2021-yil", href: "#" },
  { label: "2022-yil", href: "#" },
  { label: "2023-yil", href: "#" },
  { label: "2024-yil", href: "#" },
  { label: "2025-yil", href: "#" },
  { label: "2026-yil", href: "#" },
];

export default function MovieCategories() {
  return (
    <footer className="relative bg-linear-to-b from-zinc-950 via-black to-zinc-950 text-zinc-200">
      <div className="mx-auto w-full container  px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Clapperboard className="h-6 w-6 text-[orange]" strokeWidth={1.8} />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold tracking-tight text-white">TOP</span>
                <span className="text-2xl font-extrabold tracking-tight text-[orange]">Kino</span>
                <span className="text-2xl font-extrabold tracking-tight text-white">.NET</span>
              </div>
            </div>

            <p className="mt-5 max-w-xl leading-7 text-zinc-400">
              Filmlarga bo&apos;lgan huquq ularning mualliflariga tegishli. Barcha filmlar
              faqat ma&apos;lumot olish uchun mo&apos;ljallangan.
              <br />
              <br />
              Foydalanuvchilar joylashtirgan noqonuniy materiallar uchun ma&apos;muriyat
              javobgar emas! Har qanday film mualliflik huquqi egasining iltimosiga binoan olib tashlanadi.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white">
                  Yil bo&apos;yicha seriallar
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-400">
                  {years.map((y) => (
                    <li key={`series-${y.label}`}>
                      <Link
                        href={y.href}
                        className="hover:text-white transition-colors"
                      >
                        {y.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-wide text-white">
                  Yil bo&apos;yicha kinolar
                </h3>
                <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-400">
                  {years.map((y) => (
                    <li key={`movies-${y.label}`}>
                      <Link
                        href={y.href}
                        className="hover:text-white transition-colors"
                      >
                        {y.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-white">Aloqa / Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Telegram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  DMCA
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Правообладателям
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © 2021-2026 Freekino.net — Barcha huquqlar himoyalangan.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">
              Foydalanish shartlari
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Maxfiylik
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      <Link
        href="#"
        aria-label="Telegram"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl" />
          <div className="grid h-16 w-16 place-items-center rounded-full bg-white/5 ring-1 ring-white/15 backdrop-blur hover:bg-white/10 transition-colors">
            <RiTelegramLine className="text-3xl text-cyan-300" />
          </div>
          <div className="pointer-events-none absolute -inset-3 rounded-full ring-1 ring-cyan-300/10" />
        </div>
      </Link>
    </footer>
  );
}