import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CircleCheck,
  CircleDot,
  Command,
  ExternalLink,
  FileCode2,
  FolderTree,
  GitBranch,
  Github,
  Layers3,
  ListChecks,
  Menu,
  Play,
  Rocket,
  ScanLine,
  SearchCode,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react';
import './index.css';

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function Logo() {
  return (
    <span className="cp-logo" data-testid="text-brand-logo">
      <span className="cp-logo-mark"><Command /></span>
      <span>CodePilot <span style={{ color: 'hsl(var(--primary))' }}>AI</span></span>
    </span>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [annual, setAnnual] = useState(true);
  const [demoRan, setDemoRan] = useState(false);
  const [notice, setNotice] = useState('');

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 3600);
  };

  const handleNav = (id: string) => {
    scrollToId(id);
    setMobileOpen(false);
  };

  const startBuilding = () => {
    scrollToId('workspace');
    showNotice('Your command center is ready when you are.');
  };

  return (
    <main className="cp-page">
      <div className="cp-grain" aria-hidden="true" />

      <header className="cp-header">
        <div className="cp-container">
          <nav className="cp-nav" aria-label="Primary navigation">
            <a href="#top" onClick={() => setMobileOpen(false)} data-testid="link-brand-home"><Logo /></a>
            <div className="cp-nav-links">
              <a href="#workspace" onClick={() => handleNav('workspace')} data-testid="link-nav-workspace">Workspace</a>
              <a href="#capabilities" onClick={() => handleNav('capabilities')} data-testid="link-nav-capabilities">Capabilities</a>
              <a href="#method" onClick={() => handleNav('method')} data-testid="link-nav-method">Method</a>
              <a href="#pricing" onClick={() => handleNav('pricing')} data-testid="link-nav-pricing">Pricing</a>
            </div>
            <div className="cp-nav-actions">
              <a className="cp-text-link" href="#pricing" onClick={() => handleNav('pricing')} data-testid="link-nav-sign-in">Sign in</a>
              <button className="cp-button cp-button-primary" onClick={startBuilding} data-testid="button-nav-start">
                Start building <ArrowUpRight size={14} />
              </button>
            </div>
            <button
              className="cp-menu-button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </nav>
          <div className={`cp-mobile-menu ${mobileOpen ? 'open' : ''}`}>
            <a href="#workspace" onClick={() => handleNav('workspace')} data-testid="link-mobile-workspace">Workspace</a>
            <a href="#capabilities" onClick={() => handleNav('capabilities')} data-testid="link-mobile-capabilities">Capabilities</a>
            <a href="#method" onClick={() => handleNav('method')} data-testid="link-mobile-method">Method</a>
            <a href="#pricing" onClick={() => handleNav('pricing')} data-testid="link-mobile-pricing">Pricing</a>
            <button className="cp-button cp-button-primary" onClick={startBuilding} data-testid="button-mobile-start">Start building <ArrowUpRight size={14} /></button>
          </div>
        </div>
      </header>

      <section className="cp-hero" id="top">
        <div className="cp-container cp-hero-content">
          <div className="cp-hero-grid">
            <div>
              <div className="cp-eyebrow cp-reveal">The command center for serious builders</div>
              <h1 className="cp-reveal cp-delay-1">Make the leap from <em>intent</em> to shipped.</h1>
              <p className="cp-hero-copy cp-reveal cp-delay-2">
                CodePilot AI thinks across your entire codebase, turns a rough brief into an executable plan, and keeps every change reviewable from first branch to production.
              </p>
              <div className="cp-hero-actions cp-reveal cp-delay-3">
                <button className="cp-button cp-button-primary" onClick={startBuilding} data-testid="button-hero-start">
                  Start building <ArrowRight className="cp-arrow" size={15} />
                </button>
                <button className="cp-button cp-button-ghost" onClick={() => scrollToId('workspace')} data-testid="button-hero-see-workspace">
                  <Play size={14} /> See the workspace
                </button>
              </div>
              <div className="cp-hero-meta cp-reveal cp-delay-3">
                <span className="cp-pulse" aria-hidden="true" />
                <span>Private beta is open</span>
                <span>·</span>
                <span>For teams shipping weekly</span>
              </div>
            </div>
            <div className="cp-hero-art cp-reveal cp-delay-2" aria-label="CodePilot AI system overview illustration" data-testid="visual-hero-system">
              <div className="cp-orbit" aria-hidden="true" />
              <div className="cp-hero-console">
                <div className="cp-window-bar">
                  <span className="cp-window-dot" /><span className="cp-window-dot" /><span className="cp-window-dot" />
                  <span className="cp-window-label">pilot / main · workspace</span>
                </div>
                <div className="cp-terminal">
                  <div className="cp-terminal-row"><span className="cp-prompt">›</span><span className="cp-code">understand <strong>payments/checkout</strong></span></div>
                  <div className="cp-terminal-row"><span className="cp-prompt">›</span><span className="cp-code">propose a safer retry strategy</span></div>
                  <div className="cp-terminal-divider">──────────────────────────</div>
                  <div className="cp-terminal-row"><span className="cp-prompt">↳</span><span className="cp-code">indexed 284 files · 19 symbols</span></div>
                  <div className="cp-terminal-row"><span className="cp-prompt">↳</span><span className="cp-code">found 3 dependent services</span></div>
                  <div className="cp-terminal-status"><CircleCheck size={13} /> plan ready for your review</div>
                </div>
              </div>
              <div className="cp-hero-tag"><b>6m 42s</b>saved on the last review</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-proof-bar" aria-label="Teams building with CodePilot">
        <div className="cp-container cp-proof-inner">
          <span className="cp-proof-title">Trusted by teams with taste</span>
          <div className="cp-logos" data-testid="list-social-proof">
            <span>Northstar</span>
            <span>Vela Labs</span>
            <span>ORBITAL / SYS</span>
            <span>kinetic</span>
            <span>FIELDWORK</span>
          </div>
        </div>
      </section>

      <section className="cp-section cp-workspace-section" id="workspace">
        <div className="cp-container">
          <div className="cp-section-heading">
            <div>
              <div className="cp-eyebrow">01 / The workspace</div>
              <h2>Less prompting.<br /><em>More steering.</em></h2>
            </div>
            <p>Your entire engineering context in one focused surface. The agent moves fast; you stay in control of what ships.</p>
          </div>

          <div className="cp-workspace-shell" data-testid="panel-workspace-preview">
            <aside className="cp-workspace-sidebar">
              <div className="cp-workspace-brand"><span className="cp-logo-mark"><Command /></span> CodePilot</div>
              <span className="cp-side-label">Workspace</span>
              <button className="cp-side-link active" onClick={() => showNotice('Overview is already in focus.')} data-testid="button-workspace-overview"><Layers3 /> Overview</button>
              <button className="cp-side-link" onClick={() => showNotice('Plan queue: 3 decisions are waiting for your signal.')} data-testid="button-workspace-plan"><ListChecks /> Plan queue</button>
              <button className="cp-side-link" onClick={() => showNotice('Review trail is clean — no unresolved findings.')} data-testid="button-workspace-review"><ShieldCheck /> Review</button>
              <span className="cp-side-label" style={{ display: 'block', marginTop: 28 }}>Repositories</span>
              <button className="cp-side-link" onClick={() => showNotice('pilot-web is the active repository.')} data-testid="button-repository-pilot"><Github /> pilot-web</button>
              <button className="cp-side-link" onClick={() => showNotice('core-services is indexed and ready.')} data-testid="button-repository-core"><GitBranch /> core-services</button>
            </aside>
            <div className="cp-workspace-main">
              <div className="cp-workspace-top">
                <span>pilot-web / sprint-24</span>
                <span className="cp-live">AGENT ONLINE</span>
              </div>
              <div className="cp-workspace-body">
                <div className="cp-workspace-title">
                  <div>
                    <h3>Checkout reliability</h3>
                    <p>Active mission · updated 34 seconds ago</p>
                  </div>
                  <div className="cp-status-chip">reviewable state</div>
                </div>
                <div className="cp-workspace-grid">
                  <div className="cp-panel">
                    <div className="cp-panel-heading"><strong>Repository map</strong><span>284 files</span></div>
                    <div className="cp-tree">
                      <div className="cp-tree-line current"><FolderTree /> payments/</div>
                      <div className="cp-tree-nested">
                        <div className="cp-tree-line"><FileCode2 /> checkout.ts</div>
                        <div className="cp-tree-line current"><FileCode2 /> retry-policy.ts</div>
                        <div className="cp-tree-line"><FileCode2 /> webhook.spec.ts</div>
                      </div>
                      <div className="cp-tree-line"><FolderTree /> services/</div>
                      <div className="cp-tree-line"><FolderTree /> infra/</div>
                    </div>
                    <div className="cp-agent-card">
                      <div className="cp-agent-label"><Sparkles /> Agent finding</div>
                      <p>Retry state is duplicated across 3 services. I can centralize policy without changing the public contract.</p>
                    </div>
                  </div>
                  <div className="cp-panel">
                    <div className="cp-panel-heading"><strong>Mission plan</strong><span>3 / 5</span></div>
                    <div className="cp-progress"><i /></div>
                    <div className="cp-progress-note">agent is waiting for your signal</div>
                    <div className="cp-file-line"><Check size={12} /> map retry paths <b>done</b></div>
                    <div className="cp-file-line"><Check size={12} /> model failure states <b>done</b></div>
                    <div className="cp-file-line"><CircleDot size={12} /> draft policy change <b>next</b></div>
                    <div className="cp-file-line"><CircleDot size={12} /> generate tests <b>queued</b></div>
                    <div className="cp-workspace-actions">
                      <button className="cp-workspace-action" onClick={() => setDemoRan(true)} data-testid="button-run-agent"><Play size={12} /> {demoRan ? 'Running' : 'Run agent'}</button>
                      <button className="cp-workspace-action" onClick={() => showNotice('Plan link copied to your clipboard.')} data-testid="button-copy-plan"><ExternalLink size={12} /> Share</button>
                    </div>
                    {demoRan && <div className="cp-demo-result" data-testid="status-demo-result">Agent is tracing 3 service boundaries… plan will update in a moment.</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-section" id="capabilities">
        <div className="cp-container">
          <div className="cp-section-heading">
            <div>
              <div className="cp-eyebrow">02 / The edge</div>
              <h2>Built for the part<br />after the <em>autocomplete.</em></h2>
            </div>
            <p>CodePilot is opinionated about the work that usually gets lost between a ticket and a pull request.</p>
          </div>
          <div className="cp-feature-grid">
            <article className="cp-feature" data-testid="card-capability-intelligence">
              <span className="cp-feature-num">A / 03</span>
              <div className="cp-eyebrow">Codebase intelligence</div>
              <h3>It reads the room before it writes.</h3>
              <p className="cp-feature-copy">Symbol-aware search, dependency paths, conventions and history — indexed into a living map your agent can actually reason over.</p>
              <div className="cp-feature-icon"><SearchCode /></div>
            </article>
            <article className="cp-feature" data-testid="card-capability-planning">
              <span className="cp-feature-num">B / 03</span>
              <div className="cp-eyebrow">Agentic planning</div>
              <h3>Plans that survive contact with the code.</h3>
              <p className="cp-feature-copy">Turn one sentence into sequenced work, with decisions, risks and checkpoints visible before a line changes.</p>
              <div className="cp-feature-icon"><BrainCircuit /></div>
            </article>
            <article className="cp-feature" data-testid="card-capability-confidence">
              <span className="cp-feature-num">C / 03</span>
              <div className="cp-eyebrow">Shipping confidence</div>
              <h3>Review the reasoning, not just the diff.</h3>
              <p className="cp-feature-copy">Every proposed change arrives with context, affected surfaces and a verification trail. You get the leverage; your standards stay intact.</p>
              <div className="cp-scan-lines" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="cp-feature-icon"><ShieldCheck /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="cp-section cp-process" id="method">
        <div className="cp-container">
          <div className="cp-section-heading">
            <div>
              <div className="cp-eyebrow">03 / The method</div>
              <h2>From loose thought<br />to <em>clean launch.</em></h2>
            </div>
            <p>Keep the messy thinking. Lose the expensive ambiguity. CodePilot gives every decision somewhere to land.</p>
          </div>
          <div className="cp-process-grid">
            <article className="cp-step" data-testid="card-method-intent">
              <div className="cp-step-no">01 / FRAME</div>
              <h3>Start with what you mean.</h3>
              <p>Drop in a brief, an issue, or a half-formed hunch. CodePilot asks the questions your future self would ask.</p>
              <div className="cp-step-mark"><Terminal /></div>
            </article>
            <article className="cp-step" data-testid="card-method-plan">
              <div className="cp-step-no">02 / SHAPE</div>
              <h3>See the work before it starts.</h3>
              <p>Inspect the plan, constraints and blast radius. Adjust the route while changing direction is still cheap.</p>
              <div className="cp-step-mark"><ScanLine /></div>
            </article>
            <article className="cp-step" data-testid="card-method-ship">
              <div className="cp-step-no">03 / SHIP</div>
              <h3>Merge with your name on it.</h3>
              <p>Review a coherent change set, run the right checks, and send a confident signal to production.</p>
              <div className="cp-step-mark"><Rocket /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="cp-section cp-quote-section" aria-label="Customer story">
        <div className="cp-container">
          <div className="cp-quote">
            <div className="cp-quote-mark" aria-hidden="true">“</div>
            <div>
              <blockquote>“The difference is not that it writes more code. It is that I can finally hold the <em>whole change</em> in my head before I approve it.”</blockquote>
              <div className="cp-quote-by">
                <div className="cp-avatar">RS</div>
                <div><strong>Rina Sato</strong><span>VP Engineering · Vela Labs</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-section cp-pricing" id="pricing">
        <div className="cp-container">
          <div className="cp-pricing-heading">
            <div>
              <div className="cp-eyebrow">04 / Access</div>
              <h2>Pick your<br />altitude.</h2>
            </div>
            <div className="cp-billing">
              <span>Monthly</span>
              <button className={`cp-toggle ${annual ? 'annual' : ''}`} onClick={() => setAnnual((value) => !value)} aria-label="Toggle annual billing" aria-pressed={annual} data-testid="button-pricing-toggle"><i /></button>
              <span>Annual</span>
              <span className="cp-save">save 18%</span>
            </div>
          </div>
          <div className="cp-price-grid">
            <article className="cp-price-card" data-testid="card-pricing-solo">
              <div className="cp-eyebrow">Solo</div>
              <h3>For the one-person strike team.</h3>
              <p>Full context for independent builders who move quickly and review everything.</p>
              <div className="cp-price">{annual ? '$24' : '$29'} <small>/ user / mo</small></div>
              <ul><li><Check size={13} /> 3 active repositories</li><li><Check size={13} /> 200 agent runs / month</li><li><Check size={13} /> Plan and review mode</li></ul>
              <button className="cp-button cp-button-ghost" onClick={() => showNotice('Solo access is reserved — we will keep your seat warm.')} data-testid="button-pricing-solo">Join the private beta <ArrowRight size={14} /></button>
            </article>
            <article className="cp-price-card featured" data-testid="card-pricing-studio">
              <div className="cp-eyebrow">Studio / Most chosen</div>
              <h3>For small teams with a big surface area.</h3>
              <p>Shared missions, team context and the guardrails to ship at a higher cadence.</p>
              <div className="cp-price">{annual ? '$58' : '$69'} <small>/ user / mo</small></div>
              <ul><li><Check size={13} /> Unlimited repositories</li><li><Check size={13} /> 1,000 agent runs / month</li><li><Check size={13} /> Team memory and review trails</li></ul>
              <button className="cp-button cp-button-primary" onClick={startBuilding} data-testid="button-pricing-studio">Start with Studio <ArrowRight size={14} /></button>
            </article>
            <article className="cp-price-card" data-testid="card-pricing-command">
              <div className="cp-eyebrow">Command</div>
              <h3>For teams where nothing gets casual.</h3>
              <p>Custom controls, private deployment and a direct line to the product team.</p>
              <div className="cp-price">Custom</div>
              <ul><li><Check size={13} /> Unlimited agent runs</li><li><Check size={13} /> SSO, audit and controls</li><li><Check size={13} /> Dedicated enablement</li></ul>
              <button className="cp-button cp-button-ghost" onClick={() => showNotice('Tell us what you are building — hello@codepilot.ai')} data-testid="button-pricing-command">Talk to the team <ArrowUpRight size={14} /></button>
            </article>
          </div>
          <p className="cp-pricing-note">Every plan starts with a 14-day full-context trial. No credit card. No generated toy projects.</p>
        </div>
      </section>

      <footer className="cp-footer">
        <div className="cp-container">
          <div className="cp-footer-top">
            <div className="cp-footer-brand">
              <a href="#top" data-testid="link-footer-brand"><Logo /></a>
              <p>The considered layer between what your team means and what your systems become.</p>
            </div>
            <div className="cp-footer-links">
              <div><h4>Explore</h4><a href="#workspace" data-testid="link-footer-workspace">Workspace</a><a href="#capabilities" data-testid="link-footer-capabilities">Capabilities</a><a href="#pricing" data-testid="link-footer-pricing">Pricing</a></div>
              <div><h4>Read</h4><a href="#method" data-testid="link-footer-method">Our method</a><a href="#top" data-testid="link-footer-stories">Builder stories</a><a href="#top" data-testid="link-footer-changelog">Changelog</a></div>
              <div><h4>Connect</h4><a href="mailto:hello@codepilot.ai" data-testid="link-footer-email">hello@codepilot.ai</a><a href="#top" data-testid="link-footer-status">System status</a><a href="#top" data-testid="link-footer-github">GitHub <ExternalLink size={11} style={{ display: 'inline', marginLeft: 3 }} /></a></div>
            </div>
          </div>
          <div className="cp-footer-bottom"><span>© 2025 CodePilot AI, Inc.</span><span>Built for people who care what ships.</span></div>
        </div>
      </footer>
      {notice && <div className="cp-toast" role="status" data-testid="status-toast"><strong>CodePilot / </strong>{notice}</div>}
    </main>
  );
}

export default App;