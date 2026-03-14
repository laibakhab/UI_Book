import type {ReactNode} from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '\u{1F9BE}',
    title: 'Foundational Hardware Kits',
    description: (
      <>
        From the budget-friendly Economy Jetson Kit to the advanced Physical AI
        Edge Kit and full Robot Lab — hands-on experience with real-world AI and
        robotics hardware.
      </>
    ),
  },
  {
    icon: '\u{1F9E0}',
    title: 'Modular Learning Curriculum',
    description: (
      <>
        Structured modules covering ROS 2, Digital Twins with NVIDIA Isaac,
        computer vision pipelines, and advanced Vision-Language-Action models for
        embodied intelligence.
      </>
    ),
  },
  {
    icon: '\u{2601}\u{FE0F}',
    title: 'Cloud-Native & Digital Twin Labs',
    description: (
      <>
        Scalable cloud simulations and persistent digital twin workstations that
        bridge the gap between virtual prototyping and physical deployment.
      </>
    ),
  },
];

function Feature({icon, title, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.featureIcon}>{icon}</span>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What You'll Build</h2>
        <p className={styles.sectionSubtitle}>
          Everything you need to go from simulation to real-world robotics
        </p>
        <div className={styles.cardGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
