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
            to="/getting-started/quickstart">
            Get Started
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
      title="The Sovereign Liquidity Layer"
      description="Crypto debit card, multi-chain wallet, and global payments. Spend any crypto anywhere Visa is accepted. One balance across 9+ blockchains.">
      <HomepageHeader />
      <main>
        <section style={{padding: '4rem 0'}}>
          <div className="container">
            <div className="row">
              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <h3>Crypto Debit Card</h3>
                <p>Spend any crypto anywhere Visa is accepted. Auto-converts your assets to fiat and settles in under 3 seconds.</p>
              </div>
              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <h3>Multi-Chain Wallet</h3>
                <p>One balance across 9+ blockchains. Deposits detected automatically, assets bridged invisibly. No seed phrases.</p>
              </div>
              <div className="col col--4" style={{marginBottom: '2rem'}}>
                <h3>Global Payments</h3>
                <p>Send money anywhere via ACH, PIX, SEPA, or SPEI. Cross-border transfers in minutes, not days.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
