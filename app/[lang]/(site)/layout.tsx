import Header from "@/components/header";
import Footer from "@/components/footer";
import PageFade from "@/components/motion/page-fade";

type SiteLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function SiteLayout({
  children,
  params,
}: SiteLayoutProps) {
  const { lang } = await params;
  const locale = lang === "np" ? "np" : "en";

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={locale} />
      <PageFade className="flex-1">
        <main id="content" className="flex-1">
          {children}
        </main>
      </PageFade>
      <Footer lang={locale} />
    </div>
  );
}
