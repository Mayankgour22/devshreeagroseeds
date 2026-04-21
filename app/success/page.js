import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Success Stories - Dev Shree Agro Seeds',
  description: 'Read how our premium seeds have transformed yields and lives for farmers across the region.',
};

const stories = [
  {
    farmer: "Rajesh Kumar",
    location: "Dewas District",
    seed: "HI-1544 Wheat (Purna)",
    result: "65 Quintals per Hectare",
    quote: "Earlier I was struggling with 45-50 quintals. With Dev Shree's HI-1544, my yield increased by 30% and the grain quality was exceptional.",
    image: "https://images.unsplash.com/photo-1595113324005-77a837090885?q=80&w=1000&auto=format&fit=crop"
  },
  {
    farmer: "Sunil Patidar",
    location: "Indore Region",
    seed: "JS 2034 Soybean",
    result: "24 Quintals per Hectare",
    quote: "Even with inconsistent rains, the JS 2034 variety showed amazing resistance. The harvest was bold and shiny, fetching the best market price.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
  },
  {
    farmer: "Manoj Singh",
    location: "Khargone",
    seed: "Vishal Gram (Chana)",
    result: "18 Quintals per Hectare",
    quote: "The germination was near 100%. I've never seen such vigorous growth in the early stages. Dev Shree seeds are truly elite.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function SuccessStories() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="bg-primary pt-[200px] pb-[100px] text-center">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <span className="text-secondary uppercase tracking-[0.3em] font-extrabold text-[0.8rem] mb-6 block">Farmer Reviews</span>
          <h1 className="text-white text-[clamp(2.5rem,5vw,4.5rem)] mb-8 font-prata max-[768px]:text-[2.2rem]">
            Yielding <span className="italic text-secondary">Success</span> In Every Field
          </h1>
          <p className="text-white/70 max-w-[800px] mx-auto text-[1.2rem] leading-[1.8] max-[768px]:text-[1rem]">
            Real results from real farmers. See how Dev Shree seeds are breaking records 
            and bringing prosperity to our agrarian brothers.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <div className="grid grid-cols-1 gap-24">
            {stories.map((story, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-20 max-[992px]:flex-col max-[992px]:gap-12`}>
                <div className="flex-1 h-[600px] max-[768px]:h-[400px] overflow-hidden">
                  <img src={story.image} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" alt={story.farmer} />
                </div>
                <div className="flex-1">
                  <span className="text-secondary font-bold uppercase tracking-[0.2em] text-[0.8rem] mb-4 block">{story.location}</span>
                  <h3 className="text-[3rem] font-prata mb-6 text-primary max-[768px]:text-[2rem]">{story.farmer}</h3>
                  <div className="bg-linen p-10 border-l-4 border-secondary mb-8">
                    <p className="italic text-[1.4rem] leading-[1.6] opacity-90 max-[768px]:text-[1.1rem]">&quot;{story.quote}&quot;</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
                    <div>
                      <span className="section-label">Seed Used</span>
                      <p className="font-bold text-primary">{story.seed}</p>
                    </div>
                    <div>
                      <span className="section-label">Yield Result</span>
                      <p className="font-bold text-primary">{story.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
