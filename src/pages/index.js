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
                                        href="https://www.linkedin.com/in/manjeet-malaga-it-deliverymgr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className={styles.icon} /> LinkedIn
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://independent.academia.edu/ManjeetMalaga"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SiAcademia
                                            className={styles.icon}
                                        /> Academia
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://scholar.google.com/citations?user=NQv82nYAAAAJ&hl=en&authuser=1"
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
        name: "Manjeet Malaga",
        title: "Cloud & Big Data: AWS (Lambda, Glue, Athena, EMR, Redshift, S3, API Gateway, SNS, SQS, CloudWatch), Spark, Trino, Presto  Programming & Development: Java, Scala, Python, Go, Node.js, TypeScript, React.js, AngularJS  DevOps & CI/CD: Docker, Kubernetes (EKS, ECS), Jenkins, TeamCity, Git, Terraform  Enterprise & Security: Cloud Security, IAM, HIPAA Compliance, FinTech & RegTech Solutions Data Engineering & Analytics: ETL Pipelines, Data Orchestration, Jupyter Notebooks, Zeppelin Project & Program Management: Agile, Scrum, TPM, Cross-functional Leadership, Cost Optimization Databases & Storage: DynamoDB, Redshift, SQL Server, Oracle, MongoDB, MySQL Enterprise Applications: Financial Dashboards, Market Surveillance Systems, Tax & Compliance Platforms",
        profileImage: "/img/Pic.jpg",
        about: `Technology Leader with deep expertise in cloud architecture, data engineering, and security. Strong background in AWS services, big data processing, DevOps, and full-stack development. Experienced in building, scaling, and securing cloud-based applications while leading cross-functional teams. Skilled in cost optimization, project management, and delivering high-impact technology transformations. Hands-on experience in Java, Scala, Python, Node.js, React.js, and various data processing tools. A results-driven professional known for solving complex technical challenges, improving operational efficiency, and delivering enterprise-grade solutions.`,
    };

    return {
        props: { user },
    };
}
