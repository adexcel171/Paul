import Head from "next/head";
import styles from "@/styles/Projects.module.css";
import Card from "@/components/Card";
import Showcase from "@/components/Showcase";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Couple of my projects" />
      </Head>
      <Showcase image="/images/music.jpg" position="center" />
      <div className={styles.projects}>
        <h2>my projects..</h2>
      </div>
     
    </>
  );
}

export default ProjectsPage;
