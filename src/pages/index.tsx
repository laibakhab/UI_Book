import type {ReactNode} from 'react';
import {useEffect, useRef} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground} />
      <div className={styles.heroGrid} />
      <div className={styles.particles}>
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className={styles.particle} />
        ))}
      </div>
      <div className={styles.heroInner}>
        <span className={styles.heroTagline}>Next-Gen Robotics Education</span>
        <h1 className={styles.heroTitle}>
          Master{' '}
          <span className={styles.heroTitleAccent}>Physical AI</span>
          <br />& Humanoid Robotics
        </h1>
        <p className={styles.heroSubtitle}>
          From ROS and NVIDIA Isaac to Vision-Language-Action models —
          build intelligent embodied systems with hands-on hardware kits
          and cloud-native digital twin labs.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.ctaPrimary} to="/docs/intro">
            Start Learning
          </Link>
          <Link className={styles.ctaSecondary} to="/blog">
            Read the Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInUpVisible);
          }
        });
      },
      {threshold: 0.1},
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const stats = [
    {number: '10+', label: 'Modules'},
    {number: '3', label: 'Hardware Kits'},
    {number: 'ROS 2', label: 'Framework'},
    {number: 'NVIDIA', label: 'Isaac Platform'},
  ];

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.fadeInUp}`} ref={ref}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Physical AI & Humanoid Robotics — Building the Future of Intelligent Embodied Systems">
      <HomepageHeader />
      <main>
        <StatsSection />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
