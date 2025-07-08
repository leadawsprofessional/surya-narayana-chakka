import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { QuickLinks } from "@/components/QuickLinks";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";

export default function Home({ user }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{user.name}</title>
                <meta
                    name="description"
                    content={`Welcome to ${user.name} portfolio`}
                />
            </Head>
            <div className={styles.home}>
                <section className={styles.hero}>
                    <div className={styles.mobileHeroImage}>
                        <img src={user.profileImage} alt="Profile" />
                    </div>
                    <div className={styles.heroTextContainer}>
                        <div className={styles.heroText}>
                            <h1>Hi, I&apos;m {user.name}</h1>
                            <p>{user.title}</p>
                        </div>
                        <div className={styles.linksContainer}>
                            <ul className={styles.linksList}>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://www.linkedin.com/in/narendrakandregula"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className={styles.icon} /> LinkedIn
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://www.researchgate.net/profile/Narendra-Kandregula-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SiAcademia
                                            className={styles.icon}
                                        /> ResearchGate
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=5&hl=en&user=InQ6BDsAAAAJ&authuser=5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGoogleScholar
                                            className={styles.icon}
                                        />{" "} Google Scholar
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.heroImage}>
                        <img src={user.profileImage} alt="Profile" />
                    </div>
                </section>
                <h2 className={styles.aboutTitle}>About Me</h2>
                <div className={styles.mainContent}>
                    <div className={styles.aboutmecontainer}>
                        {/* <div className={styles.aboutmeimg}>
                            <img src={user.profileImage} alt="Profile" />
                        </div> */}
                        <div className={styles.contentPanel}>
                            <section id="about" className={styles.about}>
                                <div className={styles.aboutText}>
                                    
                                    <p>{user.about}</p>
                                </div>
                            </section>
                            <div className={styles.heroButtons}>
                                <Link
                                    href="/about"
                                    className={styles.heroButton}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const user = {
        name: "Narendra Kandregula",
        title: "Experienced Full-Stack Developer and Cloud Solution Architect with over 11 years of expertise in building scalable, distributed, and cloud-native applications across finance, telecom, and technology domains. Proven ability to architect and develop microservices, real-time systems, and responsive user interfaces using Java, Spring Boot, React, and AWS. Adept at integrating cloud services, optimizing performance, and leading Agile teams to deliver high-impact enterprise software. Committed to writing clean, maintainable code and driving technical excellence across the development lifecycle.",
        profileImage: "/img/Pic.jpg",
        about: `I am Narendra Kandregula, a highly skilled and versatile Full-Stack Developer with over 11 years of industry experience in building scalable, cloud-native applications across finance, technology, and telecom sectors. My expertise lies in designing and implementing large-scale distributed systems, cloud-based microservices, and high-performance front-end interfaces using cutting-edge technologies.Throughout my career, I have led the development of complex enterprise platforms, collaborated with cross-functional teams, and delivered impactful digital solutions. From architecting real-time trading systems in investment banking to driving integration platforms at leading tech firms, I bring a deep understanding of both backend logic and frontend usability. I’m passionate about clean code, performance optimization, and mentoring the next generation of developers. With hands-on proficiency in AWS, Java, Spring Boot, React, Kafka, and DevOps tools, I strive to build software that is not only functional but also elegant, scalable, and future-ready.`,
    };

    return {
        props: { user },
    };
}
