import { Inter, Noto_Sans_Devanagari } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-sans",
});

export const dynamicParams = false;

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const lang = (await params)?.lang ?? "en";
  const locale = lang === "np" ? "np" : "en";
  const font = locale === "np" ? devanagari : inter;

  return (
    <div className={`${font.variable} font-sans`}>{children}</div>
  );
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "np" }];
}
