import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Master Closer – Autonomous Sales Pipeline Agent",
    description: "Designed for B2B teams needing automated outreach. Master Closer gathers leads, enriches profiles with Apollo, and writes personalized emails using proven sales frameworks. It delivers end-to-end automation, reducing SDR workload while maintaining high response rates.",
    image: "/projects/placeholder-1.svg",
  },
  {
    id: 2,
    title: "Oil Cron – Real-Time Market Intelligence Agent",
    description: "Built for analysts tracking regional energy trends. Oil Cron fetches live web data, monitors government policy updates, and evaluates global conflict impacts to accurately predict oil price trends and explain real-time market volatility.",
    image: "/projects/placeholder-2.svg",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-foreground/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

