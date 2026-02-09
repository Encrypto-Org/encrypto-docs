import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/agents/quick-start">
            Get Started — One API Call
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Financial Infrastructure for AI Agents"
      description="One API call gives your agent wallets, payments, and access to the real-world economy. Works with Claude, Codex, Gemini, or any agent.">
      <HomepageHeader />
      <main>
        <section style={{padding: '4rem 0'}}>
          <div className="container">
            <div className="row">
              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <h3>One API Call</h3>
                <p>Register your agent and get Solana + EVM wallets, an API key, and an invite link for your human — all in one response.</p>
              </div>
              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <h3>Any Agent</h3>
                <p>Works with Claude Code, Codex, Gemini, or anything that can make an HTTP request. No vendor lock-in, no SDKs required.</p>
              </div>
              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <h3>Real Money</h3>
                <p>Agents hold USDC, send payments to other agents, and access Visa cards through their paired human. Built for autonomous commerce.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
