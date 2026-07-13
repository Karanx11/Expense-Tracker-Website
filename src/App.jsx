// App.jsx

import {
  Download,
  Wallet,
  Bell,
  PieChart,
  ShieldCheck,
  Smartphone,
  ArrowRight,
  Github,
} from "lucide-react";

function App() {
  const downloadApk = () => {
    window.location.href = "/app-release.apk";
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-[#606F49] opacity-20 blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-500 opacity-10 blur-[160px]" />
      </div>

      {/* NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/expense.png"
            alt="Expense Tracker"
            className="w-10 h-10 rounded-xl"
          />

          <div>
            <h1 className="font-bold text-lg tracking-wide">
              Expense Tracker
            </h1>

            <p className="text-xs text-gray-400">
              Smart Budget Management
            </p>
          </div>
        </div>

        <button
          onClick={downloadApk}
          className="hidden md:flex items-center gap-2 bg-[#606F49] hover:bg-[#4f5c3c] transition px-5 py-3 rounded-xl font-medium shadow-lg hover:scale-105"
        >
          <Download size={18} />
          Download APK
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-gray-300 mb-6 backdrop-blur-md">
            <ShieldCheck size={16} className="text-[#606F49]" />
            Trusted Expense Tracking App
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Manage Your
            <span className="text-[#606F49] block">
              Expenses Smarter
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
            Automatically detect bank transactions from SMS, analyze your
            spending habits, track monthly budgets, and stay financially
            organized with powerful insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={downloadApk}
              className="group bg-[#606F49] hover:bg-[#4f5c3c] px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3 transition hover:scale-105 shadow-2xl"
            >
              <Download size={22} />
              Download APK
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>

            <a
              href="https://github.com/Karanx11/Expense-Tracker"
              target="_blank"
              className="border border-white/10 hover:border-white/20 bg-white/5 px-8 py-4 rounded-2xl text-lg font-medium flex items-center justify-center gap-3 transition hover:bg-white/10"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-5 mt-12">
            <Stat number="100%" label="Secure" />
            <Stat number="24/7" label="Tracking" />
            <Stat number="Smart" label="Analytics" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          {/* Glow */}
          <div className="absolute w-[300px] h-[300px] bg-[#606F49] opacity-30 blur-[120px]" />

          {/* Phone */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-[42px]" />

            <div className="bg-black p-3 rounded-[42px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full border border-white/5" />

              <img
                src="/app.png"
                alt="Expense Tracker App"
                className="w-[260px] md:w-[320px] rounded-[34px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#606F49] uppercase tracking-[4px] text-sm mb-3">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A powerful expense management application designed to simplify
            budgeting and financial tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          <FeatureCard
            icon={<Wallet />}
            title="Expense Tracking"
            text="Track daily expenses manually or automatically through SMS transaction detection."
          />

          <FeatureCard
            icon={<Bell />}
            title="Smart Alerts"
            text="Get notified instantly when your monthly budget exceeds your limit."
          />

          <FeatureCard
            icon={<PieChart />}
            title="Analytics"
            text="Visual charts and insights help understand spending habits easily."
          />

          <FeatureCard
            icon={<Smartphone />}
            title="Mobile Optimized"
            text="Clean Flutter UI with smooth performance and responsive experience."
          />
        </div>
      </section>

      {/* SCREENSHOT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-14 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#606F49] uppercase tracking-[4px] text-sm mb-3">
                App Preview
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Beautiful & Clean Interface
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Designed with simplicity and productivity in mind. Monitor
                spending, view expense history, and analyze monthly budgets
                effortlessly.
              </p>

              <button
                onClick={downloadApk}
                className="bg-[#606F49] hover:bg-[#4f5c3c] transition px-7 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3"
              >
                <Download size={20} />
                Download Now
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="/app.png"
                alt="Expense Tracker Screenshot"
                className="w-[250px] md:w-[330px] rounded-[32px] shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-[#606F49]/10 border border-[#606F49]/20 rounded-3xl p-10 md:p-14 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Managing Expenses Today
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Download the Android APK directly and take control of your personal
            finances with smart expense tracking.
          </p>

          <button
            onClick={downloadApk}
            className="bg-[#606F49] hover:bg-[#4f5c3c] px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3 mx-auto transition hover:scale-105 shadow-xl"
          >
            <Download size={22} />
            Download APK
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-bold text-lg">Expense Tracker</h3>

            <p className="text-gray-500 text-sm mt-1">
              Built with React, Tailwind CSS & Flutter
            </p>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>
              © 2026 Karan Sharma
            </p>

            <p className="mt-1">
              Flutter Developer • Full Stack Developer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="group bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-[#606F49]/30 rounded-3xl p-7 transition duration-300 hover:-translate-y-2 backdrop-blur-xl">
      <div className="w-14 h-14 rounded-2xl bg-[#606F49]/15 text-[#606F49] flex items-center justify-center mb-5 group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm">
        {text}
      </p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-xl">
      <h3 className="text-2xl md:text-3xl font-bold text-[#606F49]">
        {number}
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        {label}
      </p>
    </div>
  );
}

export default App;