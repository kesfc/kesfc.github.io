const researchTracks = [
  {
    index: "01",
    eyebrow: "Clinical language models",
    title: "Reliable medical coding after post-training",
    summary:
      "Building evaluation and post-training pipelines for language models that map long clinical narratives to structured medical codes.",
    contribution:
      "Training infrastructure, distributed inference, evaluation design, and CUDA-level troubleshooting across open-weight model families.",
    stack: ["PyTorch", "Hugging Face", "LoRA", "PPO / GRPO"],
  },
  {
    index: "02",
    eyebrow: "Representation learning",
    title: "Medical concepts that understand their hierarchy",
    summary:
      "Studying how hierarchical knowledge can improve representations of medical concepts, especially where examples are scarce.",
    contribution:
      "Ontology construction, multi-level concept alignment, embedding aggregation, and structure-aware analysis.",
    stack: ["Medical ontologies", "Embeddings", "Long-tail learning"],
  },
];

const experience = [
  {
    period: "2024",
    role: "Algorithm Engineering Intern",
    company: "Beijing Starworld Technology",
    detail:
      "Worked across 2D detection and 3D reconstruction: YOLOv5 experiments, NeRF, 3D Gaussian Splatting, NeuS, and technical evaluation for model selection.",
  },
  {
    period: "2023",
    role: "Software Engineering Intern",
    company: "Beijing Tongfang Software",
    detail:
      "Built PostgreSQL-backed query interfaces and packaged existing business capabilities as documented WebService APIs.",
  },
  {
    period: "2022 - 2024",
    role: "Computer Science Mentor",
    company: "Rensselaer Polytechnic Institute",
    detail:
      "Mentored students for five semesters across introductory CS, data structures, software design, and computational biology labs.",
  },
];

const skills = [
  {
    label: "Languages",
    items: "Python, C/C++, Java, TypeScript, JavaScript, SQL",
  },
  {
    label: "ML systems",
    items: "PyTorch, Hugging Face, LlamaFactory, LoRA, PPO, GRPO, CUDA",
  },
  {
    label: "Product & backend",
    items: "React, Firebase, FastAPI, Git, Linux, Figma, Axure",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Weihao Li, back to top">
          <span className="wordmark-mark">WL</span>
          <span>Weihao Li</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-contact" href="mailto:weihaoli2027@u.northwestern.edu">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-dot dot-one" />
          <span className="orbit-dot dot-two" />
          <span className="orbit-dot dot-three" />
        </div>
        <div className="hero-kicker reveal delay-one">
          <span className="status-dot" />
          MS CS @ Northwestern · Evanston, IL
        </div>
        <h1 className="reveal delay-two">
          I follow <em>curiosity</em> from research papers to working products.
        </h1>
        <div className="hero-bottom reveal delay-three">
          <p>
            I&apos;m Weihao — a computer science graduate student at Northwestern.
            My path moves between AI research, software products, teaching,
            and competitive golf.
          </p>
          <a className="hero-cta" href="#research">
            Explore my work
            <span className="cta-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-index" aria-label="Highlights">
          <div>
            <strong>4.0</strong>
            <span>MS GPA</span>
          </div>
          <div>
            <strong>5</strong>
            <span>semesters mentoring</span>
          </div>
          <div>
            <strong>3D</strong>
            <span>vision to language models</span>
          </div>
        </div>
      </section>

      <section className="research section" id="research">
        <div className="section-heading">
          <span className="section-number">01 / Research</span>
          <h2>Current questions,<br />carefully shared.</h2>
          <p>
            My current manuscripts are under peer review. This public view
            focuses on the problems I work on and the systems I build — not
            unpublished titles, results, or collaborator details.
          </p>
        </div>

        <div className="research-list">
          {researchTracks.map((track) => (
            <article className="research-card" key={track.index}>
              <div className="card-topline">
                <span>{track.index}</span>
                <span className="review-badge">Manuscript in review</span>
              </div>
              <p className="card-eyebrow">{track.eyebrow}</p>
              <h3>{track.title}</h3>
              <p className="card-summary">{track.summary}</p>
              <details>
                <summary>My contribution <span aria-hidden="true">+</span></summary>
                <p>{track.contribution}</p>
              </details>
              <div className="tag-row">
                {track.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>

        <aside className="research-note">
          <span className="note-icon" aria-hidden="true">✦</span>
          <div>
            <strong>Why the intentional blur?</strong>
            <p>
              Good research communication respects the review process. I&apos;m
              happy to discuss my role and technical decisions in a conversation
              where the context is appropriate.
            </p>
          </div>
          <a href="mailto:weihaoli2027@u.northwestern.edu?subject=Research%20conversation">
            Start a conversation ↗
          </a>
        </aside>
      </section>

      <section className="public-work section" id="work">
        <div className="section-heading compact">
          <span className="section-number">02 / Public work</span>
          <h2>Things you can open.</h2>
        </div>
        <div className="project-grid">
          <a
            className="project-card project-blue"
            href="https://github.com/hack-rpi/HackRPI-Mobile"
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-type">Mobile · Team lead</span>
            <h3>HackRPI Mobile</h3>
            <p>
              Led a two-person team building schedules, live mentor queues, and
              authentication for the HackRPI event experience.
            </p>
            <div className="project-footer">
              <span>React · Java · Firebase</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
          <a
            className="project-card project-coral"
            href="https://github.com/shashwot2/Engrave"
            target="_blank"
            rel="noreferrer"
          >
            <span className="project-type">AI product · Full stack</span>
            <h3>Engrave</h3>
            <p>
              A personalized language-learning app with vocabulary sets,
              bilingual examples, and AI-assisted translation workflows.
            </p>
            <div className="project-footer">
              <span>React Native · TypeScript · Firebase</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
          </a>
        </div>
      </section>

      <section className="experience section">
        <div className="section-heading compact">
          <span className="section-number">03 / Experience</span>
          <h2>From pixels to products.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.role}`}>
              <span className="timeline-period">{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-copy">
          <span className="section-number">04 / Beyond the model</span>
          <h2>A few things<br />that <em>shaped me.</em></h2>
          <p>
            Before Northwestern, I studied computer science at RPI, made the
            Dean&apos;s Honor List every semester, mentored fellow students, and
            competed on the varsity golf team.
          </p>
        </div>
        <div className="education-panel">
          <div className="education-item">
            <span>2025 — 2027</span>
            <h3>Northwestern University</h3>
            <p>MS in Computer Science · GPA 4.0 / 4.0</p>
          </div>
          <div className="education-item">
            <span>2021 — 2025</span>
            <h3>Rensselaer Polytechnic Institute</h3>
            <p>BS in Computer Science · GPA 3.81 / 4.0</p>
          </div>
          <div className="golf-card">
            <span className="golf-ball" aria-hidden="true" />
            <div>
              <strong>Varsity golf</strong>
              <p>Liberty League team champion · All-Academic Team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section">
        <span className="section-number">05 / Toolkit</span>
        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.label}>
              <h3>{skill.label}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section">
        <p className="contact-kicker">Thanks for stopping by.</p>
        <h2>There&apos;s always more<br /><em>to explore.</em></h2>
        <a href="mailto:weihaoli2027@u.northwestern.edu">
          weihaoli2027@u.northwestern.edu <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-meta">
          <span>李伟豪 · Weihao Li</span>
          <span>Evanston, IL / Chongqing, China</span>
          <span>© 2026</span>
        </div>
      </section>
    </main>
  );
}
