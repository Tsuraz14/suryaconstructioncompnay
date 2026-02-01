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

  return (
    <div lang={locale} className="font-sans">
      {children}
    </div>
  );
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "np" }];
}
