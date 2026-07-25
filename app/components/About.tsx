const techStack = [
  "OpenClaw",
  "Claude Code",
  "OpenCode",
  "Claude",
  "Gemini",
  "Python",
  "GitHub",
  "Markdown",
  "HTML",
  "CSS",
  "JS",
];

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
            Seeking freelance opportunities as an <span className="text-accent">independent Forward Deployed Engineer</span><br/> <span className="text-sm">
            to build custom AI workflows</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {techStack.map((tag) => (
            <span
              key={tag}
              className="text-sm font-medium text-foreground border border-border rounded-full px-4 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

