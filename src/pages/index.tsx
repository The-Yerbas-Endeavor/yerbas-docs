/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from 'framer-motion';
import styles from './index.module.css';
import Button from '../components/Button';

// import HomepageFeatures from '../components/HomepageFeatures';
import YerbasLogo from '../components/YerbasLogo';
import YerbasTextLogo from '../components/YerbasTextLogo';

const variants: any = {
  click: { y: [0, 3, 0], scale: [1, 1.25, 1], transition: { duration: 0.5 } },
  unclick: {
    y: [0, 3, 0],
    scale: [1, 1.1, 1],
    rotate: [0, 2, -2, 0],
    transition: { duration: 0.5 },
  },
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <></>
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div>
    //     {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}

    //     <div className={clsx('container', styles.container)}>
    //       <img
    //         src="img/yerbas_logo.png"
    //         height="128"
    //         width="128"
    //         alt="Yerbas"
    //       />
    //       <h1 className="hero__title">Yerbas</h1>
    //       <div className="row padding-bottom--lg">
    //         <div className="col col--2 padding-top--lg margin-top--sm">
    //           <Button type="wallet" />
    //         </div>
    //         <div className="col col--2 padding-top--lg margin-top--sm">
    //           <Button type="mining" />
    //         </div>
    //         <div className="col col--2 padding-top--lg margin-top--sm">
    //           <Button type="papers" />
    //         </div>
    //         <div className="col col--2 padding-top--lg margin-top--sm">
    //           <Button type="smartnodes" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}

function NavMenu() {
  return (
    <>
      <div>
        <div
          className={clsx('container', styles.container, styles.padding_bottom)}
        >
          <div className={styles.primaryHeader}>
            <div className={styles.container}>
              { <img
              src="img/YerbasLogo.png"
              height="400"
              width="400"
              alt="Yerb"
            /> }
            </div>
          </div>
          <div className={styles.svgcontainer}>
             <br/><br/><br/>
            {  <h1 className="hero__title">Yerbas</h1> }
          </div> 
        </div>
        <div className="row padding-bottom--lg padding-top--lg">
          <div className="col col--2 padding-top--lg margin-top--sm" />
          <div className="col col--2 padding-top--lg margin-top--sm">
            <Button type="wallet" />
          </div>
          <div className="col col--2 padding-top--lg margin-top--sm">
            <Button type="assets" />
          </div>
          <div className="col col--2 padding-top--lg margin-top--sm">
            <Button type="smartnodes" />
          </div>
          <div className="col col--2 padding-top--lg margin-top--sm">
            <Button type="papers" />
          </div>
        </div>
        <div className="col col--2 padding-top--lg margin-top--sm" />
      </div>
    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig, siteMetadata } = useDocusaurusContext();
  // console.log(siteConfig);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Yerbas Blockchain Documents"
    >
      <main>
        <HomepageHeader />
        <NavMenu />

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
