import Image from "next/image";

interface Credential {
  title: string;
  date: string;
  link?: string;
}

interface CredentialGroup {
  id: number;
  issuer: string;
  logo: string;
  credentials: Credential[];
}

const credentialGroups: CredentialGroup[] = [
  {
    id: 1,
    issuer: "Google",
    logo: "/credentials/google.png",
    credentials: [
      {
        title: "Gen AI: Beyond the Chatbot",
        date: "Dec 2025",
        link: "https://www.skills.google/public_profiles/238786ae-b3ea-4cd0-9e0b-26819e60a012/badges/21272468",
      },
      {
        title: "Gen AI: Unlock Foundational Concepts",
        date: "Jan 2026",
        link: "https://www.skills.google/public_profiles/238786ae-b3ea-4cd0-9e0b-26819e60a012/badges/21339151",
      },
      {
        title: "Gen AI: Navigate the Landscape",
        date: "Jan 2026",
        link: "https://www.skills.google/public_profiles/238786ae-b3ea-4cd0-9e0b-26819e60a012/badges/21446711",
      },
      {
        title: "Gen AI Apps: Transform Your Work",
        date: "Jan 2026",
        link: "https://www.skills.google/public_profiles/238786ae-b3ea-4cd0-9e0b-26819e60a012/badges/21540512",
      },
      {
        title: "Gen AI Agents: Transform Your Organization",
        date: "Jan 2026",
        link: "https://www.skills.google/public_profiles/238786ae-b3ea-4cd0-9e0b-26819e60a012/badges/21725598",
      },
    ],
  },
  {
    id: 2,
    issuer: "Panaversity",
    logo: "/credentials/panaversity.webp",
    credentials: [
      {
        title: "Agentic AI: OpenClaw with General Agents (AI-50)",
        date: "Jul 2026",
        link: "https://panaversity.org/p/muhammadayansohail_xtyws3/c/11615",
      },
    ],
  },
];

export default function Credentials(): React.JSX.Element {
  return (
    <section id="credentials" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
          Credentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentialGroups.map((group) => (
            <div
              key={group.id}
              className="bg-surface backdrop-blur-sm rounded-xl p-6 border-t-3 border-accent/40 hover:shadow-2xl hover:shadow-black/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-8 w-28 shrink-0">
                  <Image
                    src={group.logo}
                    alt={group.issuer}
                    fill
                    sizes="112px"
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {group.issuer}
                </h3>
              </div>
              <ul className="space-y-3">
                {group.credentials.map((credential) => (
                  <li
                    key={credential.title}
                    className="flex items-center justify-between gap-3 border-t border-border/40 pt-3 first:border-t-0 first:pt-0"
                  >
                    <div>
                      <p className="text-foreground/90 text-sm font-medium">
                        {credential.title}
                      </p>
                      <p className="text-foreground/50 text-xs">{credential.date}</p>
                    </div>
                    {credential.link && (
                      <a
                        href={credential.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs font-medium text-accent border border-accent/40 rounded-full px-3 py-1.5 hover:bg-accent/10 transition-colors"
                      >
                        Verify Credential
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
