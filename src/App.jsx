import { Download, Wallet, PieChart, Bell } from "lucide-react";

function App() {

  const downloadApk = () => {
    window.location.href = "/app-release.apk";
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
            Expense Tracker
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-7 max-w-md leading-relaxed">
            Track spending, detect bank transactions from SMS,
            analyze expenses and stay within your monthly budget.
          </p>

          <button
            onClick={downloadApk}
            className="flex items-center gap-2 bg-[#606F49] hover:bg-[#4e5c3a] px-7 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition hover:scale-105 shadow-lg"
          >
            <Download size={20}/>
            Download APK
          </button>

        </div>


        {/* RIGHT SIDE PHONE MOCKUP */}
        <div className="relative flex justify-center">

          {/* Glow background */}
          <div className="absolute w-72 h-72 bg-[#606F49] blur-[120px] opacity-20"></div>

          {/* Phone Body */}
          <div className="relative bg-black p-3 rounded-[40px] shadow-2xl animate-float">

            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-gray-800 rounded-full"></div>

            {/* Screen */}
            <img
              src="/app.png"
              alt="App Screenshot"
              className="w-[220px] md:w-[300px] rounded-[30px]"
            />

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 tracking-wide">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <Feature
            icon={<Wallet />}
            title="Expense Tracking"
            text="Add expenses manually or detect transactions automatically from SMS."
          />


          <Feature
            icon={<Bell />}
            title="Smart Notifications"
            text="Get alerts when your monthly budget limit is exceeded."
          />

        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center pb-8 text-gray-500 text-sm px-6">

        Built by <span className="text-white font-semibold">Karan Sharma</span>

      </footer>

    </div>
  );
}


function Feature({ icon, title, text }) {
  return (
    <div className="bg-[#111827] p-6 rounded-xl transition transform hover:scale-105 hover:-translate-y-1 duration-300 shadow-lg hover:shadow-xl border border-[#606F49]/20">

      <div className="text-[#606F49] mb-4 flex justify-center md:justify-start">
        {icon}
      </div>

      <h3 className="font-semibold text-lg mb-2 text-center md:text-left tracking-wide">
        {title}
      </h3>

      <p className="text-gray-400 text-sm text-center md:text-left leading-relaxed">
        {text}
      </p>

    </div>
  );
}

export default App;