
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Careers - Join Dev Shree Agro Seeds',
  description: 'Join our team of agrarian experts and contribute to the future of agriculture in Madhya Pradesh.',
};

export default function CareersPage() {
  const whatsappNumber = "917999816154";
  const email = "devshreeagroseeds@gmail.com";

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <section className="bg-primary pt-[200px] pb-[100px] text-center">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <span className="text-secondary uppercase tracking-[0.3em] font-extrabold text-[0.8rem] mb-6 block">Join Our Mission</span>
          <h1 className="text-white text-[clamp(2.5rem,5vw,4.5rem)] mb-8 font-prata max-[768px]:text-[2.2rem]">
            Grow Your <span className="italic text-secondary">Future</span> With Us
          </h1>
          <p className="text-white/70 max-w-[800px] mx-auto text-[1.2rem] leading-[1.8] max-[768px]:text-[1rem]">
            We are always looking for passionate individuals who understand the pulse
            of the farm and the science of the seed.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 max-[768px]:px-6 text-center">
          <div className="max-w-[700px] mx-auto mb-20">
            <h2 className="text-[2.5rem] font-prata mb-6 text-primary max-[768px]:text-[1.8rem]">Open Opportunities</h2>
            <p className="opacity-70 text-[1.1rem]">Whether you are an expert in seed technology or a dedicated field manager, we want to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
            <div className="p-12 border border-black/5 bg-linen text-left flex flex-col items-start group hover:border-secondary transition-all">
              <span className="bg-primary text-white text-[0.6rem] px-3 py-1 mb-6">NEW</span>
              <h3 className="text-[1.8rem] mb-4 font-prata group-hover:text-secondary transition-all">Field Manager</h3>
              <p className="mb-10 opacity-70">Oversee field selection and maintain relationships with farmers. Deep knowledge of crop cycles required.</p>
              <div className="mt-auto pt-8 border-t border-black/10 w-full">
                <p className="font-bold text-primary">Location: Dewas / Indore</p>
              </div>
            </div>

            <div className="p-12 border border-black/5 bg-linen text-left flex flex-col items-start group hover:border-secondary transition-all">
              <span className="bg-primary text-white text-[0.6rem] px-3 py-1 mb-6">NEW</span>
              <h3 className="text-[1.8rem] mb-4 font-prata group-hover:text-secondary transition-all">Seed Technologist</h3>
              <p className="mb-10 opacity-70">Work in our labs to ensure germination rates and genetic purity of every batch.</p>
              <div className="mt-auto pt-8 border-t border-black/10 w-full">
                <p className="font-bold text-primary">Location: Chidawad Facility</p>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-black/5 pt-20">
            <h3 className="text-[2rem] font-prata mb-10 text-primary">Ready to apply?</h3>
            <div className="flex justify-center gap-12 max-[768px]:flex-col max-[768px]:gap-6">
              <a
                href={`mailto:${email}`}
                className="btn btn-primary min-w-[300px]"
              >
                Send Resume via Email
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in joining Dev Shree Agro Seeds team.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 py-5 px-12 bg-secondary text-white text-[0.75rem] font-extrabold uppercase tracking-[0.2em] transition-all hover:bg-primary"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
