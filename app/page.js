import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dev Shree Agro Seeds - Masterful Cultivation',
  description: 'Premium agricultural seeds for Kharif and Rabi seasons. High-yield, certified seeds for farmers in Madhya Pradesh. Buy Soybean, Wheat, Gram, and more.',
  keywords: 'agro seeds, dewas seeds, chidawad agro, soybean seeds, wheat seeds, rabi seeds, kharif seeds, dev shree seeds',
  icons: {
    icon: '/images/Logo.jpeg',
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* Redesigned About Section: Architectural Narrative */}
      <section id="about" className="bg-white py-24 max-[768px]:py-16 px-0">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <div className="grid grid-cols-12 gap-16 max-[1200px]:gap-12 max-[992px]:flex max-[992px]:flex-col">
            
            <div className="col-span-7 fade-in">
              <span className="section-label">Our Philosophy</span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-8 font-prata leading-[1.1] max-[768px]:text-[2.2rem]">
                Cultivating <span className="italic text-secondary">Trust</span> Through <br />
                Masterful Selection
              </h2>
              <p className="text-[1.2rem] mb-10 leading-[1.8] max-[768px]:text-[1rem] max-[768px]:mb-8">
                Dev Shree Agro Seeds does not just sell products; we provide the foundation for your livestock and livelihood. 
                Our selection process is a meticulous blend of ancestral wisdom and modern agrarian science, 
                ensuring that every seed carries the potential for an elite harvest.
              </p>
              
              <div className="flex flex-wrap gap-12 max-[768px]:gap-8 mt-16 border-t border-black/10 pt-12 max-[768px]:mt-10 max-[768px]:pt-8">
                <div>
                  <h4 className="text-[2rem] text-primary font-prata max-[768px]:text-[1.8rem]">15+</h4>
                  <p className="text-[0.7rem] font-extrabold uppercase text-secondary tracking-[0.1em]">Years in Soil</p>
                </div>
                <div>
                  <h4 className="text-[2rem] text-primary font-prata max-[768px]:text-[1.8rem]">10k</h4>
                  <p className="text-[0.7rem] font-extrabold uppercase text-secondary tracking-[0.1em]">Daily Cultivations</p>
                </div>
                <div>
                  <h4 className="text-[2rem] text-primary font-prata max-[768px]:text-[1.8rem]">100%</h4>
                  <p className="text-[0.7rem] font-extrabold uppercase text-secondary tracking-[0.1em]">Genetic Purity</p>
                </div>
              </div>
            </div>

            <div className="col-span-5 relative h-[600px] max-[1200px]:h-[500px] max-[992px]:h-[400px] fade-in">
              <div className="absolute top-0 right-0 w-full h-[90%] bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center sepia-[0.2]"></div>
              <div className="absolute bottom-0 left-[-10%] w-[60%] h-[40%] bg-primary p-10 flex flex-col justify-center text-white max-[992px]:left-0 max-[992px]:w-3/4 max-[768px]:p-6">
                <h4 className="text-white font-prata text-[1.5rem] mb-[10px] max-[768px]:text-[1.2rem]">Quality First</h4>
                <p className="text-white/70 text-[0.8rem]">Every batch is tested for germination and vigor.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ProductSection />
      <Contact />
      <Footer />

      {/* Floating WhatsApp Action: Artisanal Style */}
      <a 
        href="https://wa.me/918349798177" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-10 right-10 max-[768px]:bottom-6 max-[768px]:right-6 bg-primary text-white w-[70px] h-[70px] max-[768px]:w-[60px] max-[768px]:h-[60px] flex items-center justify-center shadow-2xl z-[999] border-2 border-secondary"
        aria-label="Connect on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" className="max-[768px]:w-[24px] max-[768px]:h-[24px]">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-2.1 4.6z" />
        </svg>
      </a>
    </main>
  );
}

