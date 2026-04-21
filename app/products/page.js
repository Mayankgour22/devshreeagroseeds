import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Seed Catalog - Dev Shree Agro Seeds',
  description: 'Explore our premium selection of high-yield Wheat, Gram, and Soybean seeds. Certified quality for a masterful harvest.',
};

const products = [
  {
    id: 1,
    name: "HI-1544 (Purna) Wheat",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.41.jpeg",
    description: "High yield, early maturing variety. Renowned for its golden grains and excellent chapati quality.",
    tag: "Most Popular"
  },
  {
    id: 2,
    name: "HI-1669 (Pusa Gehun Kranti)",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.23 (2).jpeg",
    description: "Modern variety with high resistance to rust. Exceptional protein content and yield potential.",
    tag: "High Protein"
  },
  {
    id: 3,
    name: "HI-8713 (Pusa Mangal)",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.25 (1).jpeg",
    description: "Excellent for pasta and semolina. Drought and heat tolerant with bold amber grains.",
    tag: "Premium Quality"
  },
  {
    id: 4,
    name: "VISHAL Gram (Chana)",
    category: "Gram",
    image: "/images/WhatsApp Image 2026-04-21 at 11.01.56.jpeg",
    description: "Superior bold seed size with high germination rate. Perfect for commercial cultivation.",
    tag: "Best Seller"
  },
  {
    id: 5,
    name: "Pusa Manav (20211) Gram",
    category: "Gram",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.23 (1).jpeg",
    description: "Highly resistant to wilt. Delivers consistent results across various soil types.",
    tag: "New Variety"
  },
  {
    id: 6,
    name: "HI-1650 (Pusa Ojaswi) Wheat",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.28 (1).jpeg",
    description: "Biofortified variety rich in Zinc and Iron. Masterfully selected for health and yield.",
    tag: "Biofortified"
  },
  {
    id: 7,
    name: "HI-1634 (Pusa Ahilya) Wheat",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.40 (1).jpeg",
    description: "Strong straw and non-lodging variety. Excellent response to irrigation and fertilizers.",
    tag: "Stable Yield"
  },
  {
    id: 8,
    name: "DBW-303 (Karan Vaishnavi)",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.23.jpeg",
    description: "Latest high-yield variety with exceptional height and grain count. Disease resistant.",
    tag: "Farmer's Choice"
  },
  {
    id: 9,
    name: "Lokwan Wheat",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.37.jpeg",
    description: "The traditional choice for premium quality. Bold grains and unmatched market value.",
    tag: "Traditional"
  },
  {
    id: 10,
    name: "HD-3385 Wheat",
    category: "Wheat",
    image: "/images/WhatsApp Image 2026-04-21 at 11.24.28.jpeg",
    description: "Temperature tolerant variety with higher tillering capacity. Breakthrough in yield.",
    tag: "New Arrival"
  }
];

export default function ProductsPage() {
  const whatsappNumber = "918349798177";

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="bg-primary pt-[200px] pb-[100px] text-center max-[768px]:pt-[150px] max-[768px]:pb-[60px]">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          <span className="text-secondary uppercase tracking-[0.3em] font-extrabold text-[0.8rem] mb-6 block fade-in">The Collection</span>
          <h1 className="text-white text-[clamp(2rem,6vw,4.5rem)] mb-8 font-prata fade-in max-[768px]:text-[2.5rem]">
            Masterfully <span className="italic text-secondary">Selected</span> Seeds
          </h1>
          <p className="text-white/70 max-w-[700px] mx-auto text-[1.1rem] leading-[1.8] fade-in max-[768px]:text-[0.95rem]">
            From the fertile soils of Madhya Pradesh to your fields, we bring you the most 
            refined varieties of Wheat, Gram, and Soybean.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-20 max-[768px]:py-12">
        <div className="container mx-auto px-8 max-[768px]:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-[1200px]:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white border border-black/5 flex flex-col h-full hover:shadow-2xl transition-all duration-500 overflow-hidden fade-in">
                
                {/* Product Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 max-[768px]:top-4 max-[768px]:left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[0.65rem] font-extrabold uppercase tracking-[0.2em] px-4 py-2 border border-primary/10">
                      {product.category}
                    </span>
                  </div>
                  {product.tag && (
                    <div className="absolute top-6 right-6 max-[768px]:top-4 max-[768px]:right-4">
                      <span className="bg-secondary text-white text-[0.6rem] font-bold uppercase tracking-[0.1em] px-3 py-1">
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Content */}
                <div className="p-8 flex flex-col flex-grow max-[768px]:p-6">
                  <h3 className="text-[1.8rem] mb-4 font-prata group-hover:text-secondary transition-colors duration-300 max-[768px]:text-[1.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-textBody/70 text-[0.95rem] mb-8 leading-[1.6] max-[768px]:mb-6">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=Hi, I am interested in ${product.name} seeds. Please provide more details.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-3 py-5 bg-primary text-white text-[0.75rem] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-secondary max-[768px]:py-4"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 4l-2.1 4.6z" />
                      </svg>
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-24 text-center max-[768px]:mt-16">
            <p className="text-textBody italic font-prata text-[1.2rem] max-[768px]:text-[1rem]">
              More varieties arriving with the change of seasons.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
