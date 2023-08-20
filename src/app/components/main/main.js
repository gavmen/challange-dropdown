import Image from 'next/image';
import styles from '../../styles/mainSection.module.scss';

const { 
  mainContainer, 
  mainLeft, 
  mainHeading, 
  mainContent, 
  primaryBtn, 
  logoes, 
  mainRight 
} = styles;

const MainSection = () => {
  return (
    <main className={`${mainContainer} wrapper`}>
      <section className={mainLeft}>
        <h1 className={mainHeading}>
          Make <br />
          remote work
        </h1>
        <p className={mainContent}>
          Get your team in sync, no matter your location. Streamline
          processes, create team rituals, and watch productivity soar.
        </p>
        <button className={primaryBtn}>Learn more</button>
        <div className={logoes}>
          <Image src="/images/client-databiz.svg" alt="Databiz logo" width={100} height={100} />
          <Image src="/images/client-audiophile.svg" alt="Audiophile logo" width={100} height={100} />
          <Image src="/images/client-meet.svg" alt="Meet logo" width={100} height={100} />
          <Image src="/images/client-maker.svg" alt="Maker logo" width={100} height={100} />
        </div>
      </section>
      <aside className={mainRight}>
        <picture>
          <source media="(max-width:800px)" srcSet="/images/image-hero-mobile.png" />
          <img src="/images/image-hero-desktop.png" alt="Hero illustration" />
        </picture>
      </aside>
    </main>
  );
}

export default MainSection;
