import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Process - Dev Shree Agro Seeds',
  description: 'How we prepare the highest quality seeds through meticulous selection, cleaning, and testing.',
};

export default function ProcessPage() {
  const steps = [
    {
      title: "Field Selection",
      desc: "Our journey begins in the best fields. We identify farmers whose crops show exceptional health, genetic purity, and high-yield potential.",
      icon: "🌾"
    },
    {
      title: "Elite Procurement",
      desc: "We procure only the 'top-tier' produce from these selected fields. Only the boldest and healthiest seeds make it to our facility.",
      icon: "🚜"
    },
    {
      title: "Scientific Cleaning",
      desc: "Using state-of-the-art grading machines, we remove impurities, dust, and immature grains. Every seed goes through a multi-stage purification process.",
      icon: "⚙️"
    },
    {
      title: "Quality Testing",
      desc: "In our labs, we test for germination rates, moisture content, and genetic vigor. We only pack seeds that meet the 98% vitality benchmark.",
      icon: "🔬"
    },
    {
      title: "Certification & Packing",
      desc: "Once certified, the seeds are masterfully packed in high-grade moisture-proof bags to ensure they remain fresh until they reach your soil.",
      icon: "🗳️"
    }
  ];

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      <section className="bg-primary pt-[200px] pb-[100px] text-center border-b border-secondary/20">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <span className="text-secondary uppercase tracking-[0.3em] font-extrabold text-[0.8rem] mb-6 block">Our Craft</span>
          <h1 className="text-white text-[clamp(2.5rem,5vw,4.5rem)] mb-8 font-prata max-[768px]:text-[2.2rem]">
            How We <span className="italic text-secondary">Prepare</span> Perfection
          </h1>
          <p className="text-white/70 max-w-[800px] mx-auto text-[1.2rem] leading-[1.8] max-[768px]:text-[1rem]">
            From identifying the strongest plants to the final sealed bag—discover the 
            rigorous process that makes Dev Shree seeds the choice of champions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <div className="grid grid-cols-1 gap-12 max-w-[900px] mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-10 items-start p-10 border border-black/5 bg-linen hover:shadow-xl transition-all group max-[768px]:flex-col max-[768px]:gap-6 max-[768px]:p-8">
                <div className="text-[3rem] opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-[1.8rem] font-prata mb-4 text-primary max-[768px]:text-[1.5rem]">{idx + 1}. {step.title}</h3>
                  <p className="text-textBody/80 leading-[1.8] text-[1.1rem] max-[768px]:text-[0.95rem]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-linen">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <div className="grid grid-cols-2 gap-20 items-center max-[992px]:grid-cols-1 max-[992px]:gap-12">
            <div className="h-[500px] max-[768px]:h-[300px]">
              <img src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.3] shadow-2xl" alt="Seed Processing" />
            </div>
            <div>
              <h2 className="text-[3rem] font-prata mb-8 leading-[1.1] max-[768px]:text-[2rem]">Commitment to <span className="italic text-secondary">Science</span></h2>
              <p className="text-[1.2rem] opacity-80 leading-[1.8] mb-10 max-[768px]:text-[1rem]">
                We believe that every farm is a laboratory and every farmer is a scientist. 
                By providing seeds that have undergone such intense scrutiny, we ensure 
                that your hard work is never in vain.
              </p>
              <div className="w-[100px] h-[1px] bg-secondary"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
