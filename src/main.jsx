import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Send, ShieldCheck, Code2,
  Layers3, WalletCards, TestTube2, ExternalLink, Menu, X,
  CheckCircle2, Mail
} from "lucide-react";
import "./styles.css";

const socials = {
  github: "https://github.com/jacobscup",
  linkedin: "https://www.linkedin.com/in/olawale-israel-200315304",
  x: "https://x.com/JacobConcierge",
  email: "mailto:isrealolawale315@gmail.com"
};

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">OI</span>
          <span>Olawale Israel</span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#security" onClick={closeMenu}>Security</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="nav-cta" href={socials.email}>Let's work <ArrowUpRight size={16}/></a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> Available for Web3 opportunities</div>
            <h1>Full-Stack <span>Blockchain</span> Developer.</h1>
            <p className="hero-text">
              I build smart contracts, Web3 applications, and blockchain integrations
              with a strong focus on testing, security, and reliable transaction logic.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">View my work <ArrowUpRight size={17}/></a>
              <a className="button secondary" href={socials.email}>Contact me <Mail size={17}/></a>
            </div>
            <div className="hero-links">
              <a href={socials.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
              <a href={socials.x} target="_blank" rel="noreferrer"><span className="x-icon">𝕏</span> X</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="code-card">
              <div className="window-bar"><i/><i/><i/><span>RealEstateTrust.sol</span></div>
              <pre><code>{`contract RealEstateTrust {

  mapping(address => uint256)
    public escrowBalance;

  function fundEscrow(
    uint256 amount
  ) external {
    // verify + account funds
  }

  function resolveDispute(
    uint256 transactionId
  ) external onlyArbitrator {
    // controlled resolution
  }
}`}</code></pre>
              <div className="code-footer">
                <span><CheckCircle2 size={15}/> Security-tested</span>
                <span>Solidity</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div><strong>58</strong><span>Security-focused tests</span></div>
          <div><strong>2+</strong><span>Blockchain projects</span></div>
          <div><strong>EVM</strong><span>Primary hands-on focus</span></div>
          <div><strong>24/7</strong><span>Builder mindset</span></div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <div>
              <p className="kicker">SELECTED WORK</p>
              <h2>Projects built to solve real problems.</h2>
            </div>
            <p>Code, product logic, integrations, and security testing — not just UI.</p>
          </div>

          <article className="project-feature">
            <div className="project-visual ezco-visual">
              <div className="chain-grid" />
              <div className="floating-token">Ξ</div>
              <div className="project-window">
                <div className="mini-bar"><span/> <span/> <span/></div>
                <div className="property-ui">
                  <div className="property-image" />
                  <div className="property-lines"><b/><i/><i/><em/></div>
                  <div className="escrow-pill"><ShieldCheck size={14}/> Escrow protected</div>
                </div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tag">FEATURED PROJECT</div>
              <h3>EZCO</h3>
              <h4>Decentralized real-estate transaction platform</h4>
              <p>
                A Web3 platform designed around property verification, blockchain-based
                escrow, dispute resolution, multi-party confirmation, and on-chain
                transaction records.
              </p>
              <div className="tag-list">
                <span>Solidity</span><span>EVM</span><span>Hardhat</span><span>Web3</span><span>Security</span>
              </div>
              <div className="project-proof">
                <div><ShieldCheck size={19}/><div><b>58 security-focused tests</b><small>Transaction, escrow, dispute, access-control and payment flows.</small></div></div>
                <div><Code2 size={19}/><div><b>Security-first engineering</b><small>State transitions, accounting, token interactions and authorization.</small></div></div>
              </div>
              <div className="case-study">
                <div className="case-study-label">ENGINEERING FOCUS</div>
                <div className="case-study-grid">
                  <span>Access control</span>
                  <span>State transitions</span>
                  <span>Escrow accounting</span>
                  <span>ERC20 boundaries</span>
                  <span>Dispute restrictions</span>
                  <span>Regression testing</span>
                </div>
              </div>
              <div className="project-actions">
                <a className="button primary" href="https://ezco-three.vercel.app/" target="_blank" rel="noreferrer">Live demo <ExternalLink size={15}/></a>
                <a className="button secondary" href="https://github.com/jacobscup/-EZCO-" target="_blank" rel="noreferrer">Repository <Github size={15}/></a>
              </div>
            </div>
          </article>

          <article className="project-secondary">
            <div>
              <p className="kicker">SECOND PROJECT</p>
              <h3>AfroBridge</h3>
              <p>Another blockchain project in my development portfolio. Details and technical documentation will be expanded here as the project case study is prepared.</p>
            </div>
            <a href={socials.github} target="_blank" rel="noreferrer" className="text-link">View GitHub <ArrowUpRight size={16}/></a>
          </article>
        </section>

        <section id="security" className="section security-section">
          <div className="section-heading">
            <div>
              <p className="kicker">SECURITY & ENGINEERING</p>
              <h2>I don't just build contracts. I test how they fail.</h2>
            </div>
            <p>My approach combines manual review, automated analysis, and targeted regression tests.</p>
          </div>

          <div className="security-grid">
            {[
              ["Access control", "Verify privileged roles, authorization boundaries, and restricted operations.", ShieldCheck],
              ["State transitions", "Test valid and invalid transaction states and prevent unintended progression.", Layers3],
              ["Escrow accounting", "Trace funding, completion, disputes, fees, balances, and rollback behavior.", WalletCards],
              ["Token interactions", "Test ERC20 boundaries, failed operations, and their effect on transaction state.", Code2],
              ["Regression testing", "Turn identified risks into focused tests so fixes remain protected.", TestTube2],
              ["Existing codebases", "Understand architecture and intended behavior before changing production logic.", CheckCircle2]
            ].map(([title, text, Icon]) => (
              <div className="security-card" key={title}>
                <div className="icon-box"><Icon size={19}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="workflow section">
          <div className="section-heading">
            <div>
              <p className="kicker">HOW I WORK</p>
              <h2>Understand first. Change carefully. Test what matters.</h2>
            </div>
            <p>A practical workflow for existing EVM codebases and new smart-contract work.</p>
          </div>
          <div className="workflow-grid">
            <div><span>01</span><h3>Understand</h3><p>Map architecture, intended behavior, dependencies, roles, and fund flows.</p></div>
            <div><span>02</span><h3>Review</h3><p>Trace trust boundaries, state transitions, authorization, accounting, and external calls.</p></div>
            <div><span>03</span><h3>Test</h3><p>Turn risky paths and edge cases into focused tests and regression coverage.</p></div>
            <div><span>04</span><h3>Improve</h3><p>Make targeted changes, preserve expected behavior, and verify the result.</p></div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <div>
              <p className="kicker">WHAT I CAN HELP WITH</p>
              <h2>From contract logic to the dApp layer.</h2>
            </div>
          </div>

          <div className="services-grid">
            {[
              ["01", "Smart Contract Development", "Build and maintain Solidity contracts around clear business and transaction logic."],
              ["02", "Web3 dApp Development", "Connect blockchain logic to practical frontend experiences and user flows."],
              ["03", "Wallet & Web3 Integration", "Integrate wallet interactions, contract calls, transaction handling, and Web3 flows."],
              ["04", "Testing & Security", "Review contract behavior and build focused tests around security and failure cases."],
              ["05", "EVM Codebase Support", "Review and improve existing Solidity/EVM systems without unnecessary architectural changes."],
              ["06", "Escrow & Payment Logic", "Work on transaction, escrow, accounting, fee, and token-payment workflows."]
            ].map(([num, title, text]) => (
              <div className="service-card" key={num}>
                <span>{num}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={18}/>
              </div>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <div className="skills-copy">
            <p className="kicker">TECHNICAL FOCUS</p>
            <h2>Strongest in EVM. Expanding into Solana.</h2>
            <p>
              My strongest hands-on experience is with EVM/Solidity development,
              smart contracts, Web3 integrations, and full-stack dApps. I'm also
              building hands-on experience with Solana, Rust, and Anchor.
            </p>
          </div>
          <div className="skill-cloud">
            {["Solidity", "EVM", "Smart Contracts", "Hardhat", "Web3", "dApps", "ERC20", "JavaScript", "React", "Vite", "Solana", "Rust", "Anchor"].map(s => <span key={s}>{s}</span>)}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow" />
          <p className="kicker">LET'S BUILD</p>
          <h2>Have a Web3 project that needs development help?</h2>
          <p>I'm open to contract work, freelance projects, and full-time opportunities.</p>
          <div className="hero-actions">
            <a className="button primary" href={socials.email}>Start a conversation <Send size={16}/></a>
            <a className="button secondary" href={socials.github} target="_blank" rel="noreferrer">View GitHub <Github size={16}/></a>
          </div>
          <a className="email-link" href={socials.email}>isrealolawale315@gmail.com</a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Olawale Israel</span>
        <span>Full-Stack Blockchain Developer</span>
        <div className="footer-links">
          <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={socials.x} target="_blank" rel="noreferrer">X</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
