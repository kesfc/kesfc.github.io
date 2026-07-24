import Image from "next/image";

const researchTracks = [
  {
    lane: "R1",
    field: "Federated agent systems",
    title: "FedAgentKE: Federated Semantic Knowledge Evolution for Heterogeneous Agents",
    summary:
      "Enabling heterogeneous agent frameworks to evolve and transfer reusable reasoning abstractions through federated semantic distillation — without sharing raw reasoning trajectories.",
    contribution:
      "Led the problem formulation, system design, multi-framework evaluation, and paper development.",
    stack: ["arXiv:2607.21361", "cs.MA", "Federated agents"],
    status: "Public preprint",
    role: "Co-first author",
    authors: "Weihao Li · Jun Bai · Ziyang Song",
    href: "https://arxiv.org/abs/2607.21361",
  },
  {
    lane: "R2",
    field: "Clinical language models",
    title:
      "Can Post-Training Turn LLMs into Good Medical Coders? An Empirical Study of Generative ICD Coding",
    summary:
      "Building evaluation and post-training pipelines for language models that map long clinical narratives to structured medical codes.",
    contribution:
      "Training infrastructure, distributed inference, evaluation design, and CUDA-level troubleshooting across open-weight model families.",
    stack: ["PyTorch", "Hugging Face", "LoRA", "PPO / GRPO"],
    status: "Manuscript in review",
    role: "Second author",
  },
  {
    lane: "R3",
    field: "Representation learning",
    title: "SMI: Semantic Medical ID for Hierarchy-Aware Concept Representation",
    summary:
      "Studying how hierarchical knowledge can improve representations of medical concepts, especially where examples are scarce.",
    contribution:
      "Ontology construction, multi-level concept alignment, embedding aggregation, and structure-aware analysis.",
    stack: ["Medical ontologies", "Embeddings", "Long-tail learning"],
    status: "Manuscript in review",
    role: "Fourth author",
  },
];

const publicWork = [
  {
    lane: "P1",
    type: "Mobile · Team lead",
    title: "HackRPI Mobile",
    summary:
      "Led a two-person team building schedules, live mentor queues, and authentication for the HackRPI event experience.",
    stack: "React · Java · Firebase",
    href: "https://github.com/hack-rpi/HackRPI-Mobile",
  },
  {
    lane: "P2",
    type: "AI product · Full stack",
    title: "Engrave",
    summary:
      "A personalized language-learning app with vocabulary sets, bilingual examples, and AI-assisted translation workflows.",
    stack: "React Native · TypeScript · Firebase",
    href: "https://github.com/shashwot2/Engrave",
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
    period: "2022 — 2024",
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
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Weihao Li, back to top">
          <span className="wordmark__mark" aria-hidden="true">WL</span>
          <span>Weihao Li · 李伟豪</span>
        </a>
        <a className="header-contact" href="mailto:weihaoli2027@u.northwestern.edu">
          Email <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="top">
        <section className="profile-intro" aria-labelledby="profile-title">
          <div className="profile-ledger">
            <h1 id="profile-title">Weihao Li · 李伟豪</h1>
            <span>Computer science</span>
            <span>Evanston, IL</span>
          </div>

          <div className="profile-intro__body">
            <p className="profile-intro__lede">
              I&apos;m Weihao Li, a computer scientist from Chongqing, China,
              now based in Evanston.
            </p>
            <figure className="profile-portrait">
              <Image
                className="profile-portrait__image"
                src="/weihao-portrait.webp"
                alt="Portrait of Weihao Li."
                width={1024}
                height={1280}
                sizes="(min-width: 60rem) 24vw, (min-width: 40rem) 38vw, 100vw"
                priority
              />
              <figcaption>
                <span>Weihao Li · 2026</span>
                <span>Chongqing → Evanston</span>
              </figcaption>
            </figure>
            <div className="profile-intro__aside">
              <p>
                I earned my BS in Computer Science at Rensselaer Polytechnic
                Institute and am pursuing an MS in Computer Science at
                Northwestern University. My work moves between research,
                software, teaching, and varsity golf.
              </p>
              <nav className="jump-links" aria-label="Page sections">
                <a href="#research">Research</a>
                <a href="#work">Public work</a>
                <a href="#experience">Experience</a>
                <a href="#about">About</a>
              </nav>
            </div>
          </div>

          <div className="record-strip" aria-label="Profile highlights">
            <div>
              <strong>Chongqing</strong>
              <span>China · Where I&apos;m from</span>
            </div>
            <div>
              <strong>RPI &apos;25</strong>
              <span>BS · Computer Science</span>
            </div>
            <div>
              <strong>NU &apos;27</strong>
              <span>MS · Computer Science</span>
            </div>
          </div>

          <div className="pace-rule" aria-hidden="true">
            {Array.from({ length: 10 }, (_, index) => <span key={index} />)}
          </div>
        </section>

        <section className="index-section" id="research" aria-labelledby="research-title">
          <header className="section-inline">
            <h2 id="research-title">Research</h2>
            <p>
              One preprint is public and linked in full. Two ongoing manuscripts
              are named here, while their results, venues, and collaborator
              details remain private during peer review.
            </p>
          </header>

          <div className="research-index">
            {researchTracks.map((track) => (
              <article className="research-row" key={track.lane}>
                <span className="lane-code">{track.lane}</span>
                <div className="research-row__main">
                  <div className="row-topline">
                    <span>{track.field}</span>
                    <span className={`research-status ${track.href ? "is-public" : ""}`}>
                      {track.status}
                    </span>
                  </div>
                  <h3>
                    {track.href ? (
                      <a href={track.href} target="_blank" rel="noreferrer">
                        {track.title}
                      </a>
                    ) : track.title}
                  </h3>
                  <p className="paper-authors">
                    {track.role}
                    {track.authors ? ` · ${track.authors}` : null}
                  </p>
                  <p>{track.summary}</p>
                  {track.href ? (
                    <a className="paper-link" href={track.href} target="_blank" rel="noreferrer">
                      Read on arXiv <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  <details>
                    <summary>
                      My contribution
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{track.contribution}</p>
                  </details>
                </div>
                <ul className="stack-list" aria-label="Methods and tools">
                  {track.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <aside className="review-note">
            <p>
              <strong>Public when it can be, private when it should be.</strong>
              FedAgentKE is linked in full above. For work still in review, I
              share the title and my contribution without exposing unpublished
              results or collaborator details.
            </p>
            <a href="mailto:weihaoli2027@u.northwestern.edu?subject=Research%20conversation">
              Start a research conversation <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>

        <section className="index-section" id="work" aria-labelledby="work-title">
          <header className="section-inline">
            <h2 id="work-title">Public work</h2>
            <p>Things you can open, inspect, and run.</p>
          </header>

          <div className="project-index">
            {publicWork.map((project) => (
              <a
                className="project-row"
                href={project.href}
                key={project.lane}
                target="_blank"
                rel="noreferrer"
              >
                <span className="lane-code">{project.lane}</span>
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
                <div className="project-meta">
                  <span>{project.stack}</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="index-section" id="experience" aria-labelledby="experience-title">
          <header className="section-inline">
            <h2 id="experience-title">Experience</h2>
            <p>A season log: pixels, products, and people.</p>
          </header>

          <ol className="season-log">
            {experience.map((item, index) => (
              <li key={`${item.period}-${item.role}`}>
                <span className="season-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="season-period">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="season-company">{item.company}</p>
                </div>
                <p className="season-detail">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="index-section about-section" id="about" aria-labelledby="about-title">
          <header className="section-inline">
            <h2 id="about-title">Away from the screen</h2>
            <p>
              A few places and teams that shaped how I work.
            </p>
          </header>

          <div className="about-grid">
            <div className="education-list">
              <article>
                <span>2025 — 2027</span>
                <h3>Northwestern University</h3>
                <p>MS in Computer Science · GPA 4.0 / 4.0</p>
              </article>
              <article>
                <span>2021 — 2025</span>
                <h3>Rensselaer Polytechnic Institute</h3>
                <p>BS in Computer Science · GPA 3.81 / 4.0</p>
              </article>
            </div>

            <figure className="golf-feature">
              <Image
                className="golf-feature__image"
                src="/weihao-golf-poster.png"
                alt="Weihao Li finishing a golf swing on a sunset course in his RPI varsity uniform."
                width={1672}
                height={941}
                sizes="(min-width: 60rem) 56vw, 100vw"
              />
              <figcaption>
                <span>RPI varsity golf</span>
                <span>Liberty League champion · All-Academic Team</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="toolkit" aria-labelledby="toolkit-title">
          <div className="toolkit__title">
            <h2 id="toolkit-title">Toolkit</h2>
            <p>What I reach for.</p>
          </div>
          <div className="toolkit__rows">
            {skills.map((skill) => (
              <div className="toolkit-row" key={skill.label}>
                <h3>{skill.label}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-statement">Still curious. Still in play.</p>
        <a className="footer-email" href="mailto:weihaoli2027@u.northwestern.edu">
          weihaoli2027@u.northwestern.edu <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-meta">
          <span>Weihao Li · 李伟豪</span>
          <span>Evanston, IL / Chongqing, China</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}
