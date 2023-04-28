import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { FaGithub, FaStackOverflow } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { GrLinkedin } from "react-icons/gr";
import AwesomeCard from "@/components/AwesomeCard";
import BootCampCard from "@/components/BootcampCard";
import Showcase from "@/components/Showcase";

function AboutPage() {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="description" content="About me page" />
      </Head>
      <Showcase image="/images/music.jpg" position="top" />
      <section className={styles.about}>
        <div className={styles.about_container}>
          <div className={styles.about_txt_wrapper}>
            <h1>about me..</h1>
            <h3>
              Gospel Artist / Song Writer /Singer / Rapper/ instrumentalist
              
              i am also a contractor, plumber and Builder
        
            </h3>
            <p>
              <strong className={styles.strong}>Music</strong> is one of
              my biggest passion. I first discovered at an early stage in my life. since then i have a burning desire to live and express my lifes ministry through music.
            </p>
          
            <strong className={styles.strong}>Motto:</strong> <p>Christ lifestyle</p> <br/>
            <strong className={styles.strong}>Vision:</strong> <p>Minister to the world through gospel music</p>
            <strong className={styles.strong}>Goal:</strong> <p>To bring the lost souls back to God</p>
            <strong className={styles.strong}>Dream:</strong> <p>To have a music platform where i can raise young talents to the glory of God</p>
         
            <div className={styles.icons}>
           
            </div>
          </div>
          <div className={styles.about_img_wrapper}>
            <Image
              src="/images/admire logo.jpg"
              alt="admire excel logo "
              height={150}
              width={150}
              objectFit="cover"
              quality={100}
              className={styles.about_image}
            />
          </div>
        

        </div>
      </section>
    </>
  );
}

export default AboutPage;