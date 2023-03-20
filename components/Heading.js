import styles from "@/styles/Heading.module.css";
import { FaGithub, FaFacebook,FaTwitter, FaYoutube} from "react-icons/fa";
import { GiMailbox, GrLinkedin } from "react-icons/gi";
import Link from "next/link";

function Header() {
  return (
    <main className={styles.header}>
      <h1 className="lg-heading">
      Shekwoiza 
        <span className={styles.textSecondary}>  world</span>
      </h1>
      <h2 className="sm-heading">
      Singer / Musician
      </h2>
      <div className={styles.icons}>
        <Link href="">
          <a target="_blank" rel="noreferrer">
            <FaYoutube className={styles.icon} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100083278344085
">
          <a target="_blank" rel="noreferrer">
            <FaFacebook className={styles.icon} />
          </a>
        </Link>
        
        
        <Link href="https://twitter.com/shekwodizaworld?t=IgCeJv0Yn_Jq-uqoukR7_A&s=08">
          <a>
            <FaTwitter className={styles.icon} />
          </a>
        </Link>
       
      </div>
    </main>
  );
}

export default Header;
