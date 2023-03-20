import styles from "@/styles/Contact.module.css";
import Head from "next/head";
import FormContact from "@/components/FormContact";
import Item from "@/components/Item";
import { IoMdMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import Showcase from "@/components/Showcase";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Contact me and send me a message.I am glad to here You"
        />
      </Head>
      <Showcase image="/images/music.jpg" position="bottom" />
      <div className={styles.contact_header}>
        <h2>contact me..</h2>
      </div>
      <main className={styles.contact}>
        <div className={styles.contact_container}>
          <Item
            img="/images/phone_001.jpg"
            title="+234 905 698 3228"
            subtitle="Phone Number"
            icon={<FaPhoneSquareAlt size={45} />}
          />
          <Items
            img="/images/mailbox_001.jpg"
            title="Shekwoizaworld@gmail.com"
            subtitle="Email Address"
            icon={<IoMdMail size={45} />}
          />
          <Item
            img="/images/"
            title="Abuja Nigeria"
            subtitle="Address"
            icon={<ImAddressBook size={44} />}
          />
        </div>
        <FormContact />
      </main>
    </>
  );
}

export default ContactPage;
