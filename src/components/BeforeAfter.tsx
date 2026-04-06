import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const gallery = [
  { img: ba1, label: "Roof Moss Removal" },
  { img: ba2, label: "Driveway Pressure Washing" },
  { img: ba3, label: "House Exterior Soft Wash" },
];

const BeforeAfter = () => (
  <section id="before-after" className="py-20">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Real Results</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Before &amp; After</h2>
        <p className="text-muted-foreground">See the difference our professional cleaning makes.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {gallery.map((g) => (
          <div key={g.label} className="rounded-2xl overflow-hidden shadow-md border border-border/60">
            <img src={g.img} alt={`Before and after ${g.label}`} className="w-full h-64 object-cover" loading="lazy" width={1024} height={768} />
            <div className="p-4 bg-card text-center">
              <p className="font-serif font-semibold text-foreground">{g.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfter;
