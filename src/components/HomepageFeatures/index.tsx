import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;     
};

const FeatureList: FeatureItem[] = [ 
  {
    title: 'Foundational Hardware Kits',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore our range of hardware kits, from the budget-friendly Economy Jetson Kit 
        to the advanced Physical AI Edge Kit and full Robot Lab. Each is designed to provide 
        hands-on experience with real-world AI and robotics.
      </>
    ),
  },
  {
    title: 'Modular Learning Curriculum',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dive into our structured learning modules covering everything from ROS (Robot Operating System) 
        and Digital Twins with NVIDIA Isaac to advanced Visual Language and Action models.
      </>
    ),
  },
  {
    title: 'Cloud-Native & Digital Twin Labs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Leverage our Cloud-Native Lab for scalable simulations or build and test 
        in a persistent virtual environment with a Digital Twin Workstation, 
        bridging the gap between simulation and reality.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
