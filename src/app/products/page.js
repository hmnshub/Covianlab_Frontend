import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Products | CovianLab",
  description: "Explore our digital products and innovations.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-white flex flex-col justify-between">
      <Navbar activePage="products" />
      
      {/* Blank Content Area */}
      <div className="flex-1 flex items-center justify-center py-32 px-8">
        <div className="text-center max-w-lg mx-auto">
          <span className="text-xs font-label uppercase tracking-widest text-cyan-400 font-bold block mb-3">
            CovianLab Ecosystem
          </span>
          <h1 className="text-5xl font-headline font-black tracking-tight text-white mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            Products
          </h1>
          <p className="text-slate-400 text-sm tracking-wide">
            Our suite of purpose-built digital products is currently under development. Check back soon.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}