import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Master Closer – Autonomous Sales Pipeline Agent",
    description: "Designed for B2B teams needing automated outreach. Master Closer gathers leads, enriches profiles with Apollo, and writes personalized emails using proven sales frameworks. It delivers end-to-end automation, reducing SDR workload while maintaining high response rates.",
    image: "/projects/master-closer.png",
    githubUrl: "https://github.com/mayansohail2009-creator/hunt-leads",
  },
  {
    id: 2,
    title: "Oil Cron – Real-Time Market Intelligence Agent",
    description: "Built for analysts tracking regional energy trends. Oil Cron fetches live web data, monitors government policy updates, and evaluates global conflict impacts to accurately predict oil price trends and explain real-time market volatility.",
    image: "/projects/oil-cron.png",
    githubUrl: "https://github.com/mayansohail2009-creator/oil-cron-prompt",
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
                  {/* Description Card */}
                  <div>
                    <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg">
                      <p className="text-foreground/90 text-base lg:text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent/90 transition-all"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View on GitHub
                        </a>
                      )}
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

