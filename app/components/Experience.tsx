import Image from "next/image";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Master Closer – Lead Generation & Sales Agent",
    description: "Master Closer autonomously sources leads, enriches prospect data via Apollo, and drafts high-converting emails. I configured its core personality, custom skills, and database integrations to streamline outbound sales pipeline execution.",
    icon: "/cards/placeholder-1.svg",
  },
  {
    id: 2,
    title: "Oil Cron – Commodity Research & Prediction Agent",
    description: "Oil Cron tracks market movements, real-time news, and geopolitical events to predict national oil price fluctuations. I engineered web-scraping workflows and analysis pipelines to deliver automated reasoning behind market shifts.",
    icon: "/cards/placeholder-2.svg",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
          Stuff I Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-surface backdrop-blur-sm rounded-xl p-6 border-t-3 border-accent/40 hover:shadow-2xl hover:shadow-black/40 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-foreground/70 text-sm mb-4">
                {card.description}
              </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

