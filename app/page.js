import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductSection from '@/components/ProductSection';
import Contact from '@/components/Contact';
import QualityAssurance from '@/components/QualityAssurance';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dev Shree Agro Seeds | Premium Soybean, Wheat & Gram Seeds by Devendra Palatiya',
  description: 'Dev Shree Agro Seeds, founded by Devendra Palatiya in Dewas, M.P., specializes in high-yield soybean (JS 2303, JS 2433, NRC 150), wheat (HI-1544, HI-1650), and gram varieties. Certified quality for Indian farmers.',
  keywords: 'Devendra Palatiya seeds, soybean variety JS 2433, JS 2303 soybean, NRC 150 seeds, certified wheat seeds Dewas, agro seeds Madhya Pradesh, high yield gram seeds, agriculture seeds company India',
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
                As a leading name for <strong>premium agro seeds in India</strong>, Dev Shree Agro Seeds (founded by Devendra Palatiya) provides the foundation for your livestock and livelihood. 
                Our selection process for the <strong>best seeds in MP</strong> is a meticulous blend of ancestral wisdom and modern agrarian science, 
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
      <QualityAssurance />
      <Contact />
      <Footer />

    </main>
  );
}

