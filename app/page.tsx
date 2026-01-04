export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          🚧 Website Under Development
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          We are currently working on something amazing.
          <br />
          Our new website will be launching soon.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="tel:+9779856014022"
            className="rounded-xl bg-orange-600 px-6 py-3 text-white font-semibold hover:bg-orange-700 transition"
          >
            Call Us
          </a>

          <a
            href="https://wa.me/+9779856014022"
            target="_blank"
            className="rounded-xl border border-orange-600 px-6 py-3 text-orange-500 font-semibold hover:bg-orange-600 hover:text-white transition"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-12 text-sm text-slate-500">
          © {new Date().getFullYear()} Surya Construction Company
        </p>
      </div>
    </main>
  );
}
