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
                                        href="http://www.linkedin.com/in/suryanchakka"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className={styles.icon} /> LinkedIn
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://www.researchgate.net/profile/Surya-Chakka-3"
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
                                        href="https://scholar.google.com/citations?hl=en&user=jjca4rYAAAAJ&authuser=5&scilu=&scisig=ACUpqDcAAAAAaGReblSVbj91-t-4kKtM9KnPx28&gmla=AH8HC4y1lHJmsc9nLJTEtW4MtFdWez6f9JTsJs9MGvJaVk2V-E-ze1rVs6VBo-74FOm0tt40RxCawZ6oBm3EC1ngPiTyDovaLmEyslo&sciund=10308550989155682432&gmla=AH8HC4yhdQztYKcH5_4qzr5ROqLp0tTX6dkFNBrJ_xHsBg89Fe6nmQ5Bs1lUtp2nEy12eBQJvgvfYOPR6cxZa1chAva06_tWcJ64ry8oDm8&sciund=4779118739417550724&gmla=AH8HC4zuOMs6pgyuDmj5LyGrQ3jrgOM_ocPFvWxM19vP7Onqgix3fDpHjJA1vqn70MyR41FAx5JOCeUxHGajNm8-yNTFLfwJ_UZUEiJWjKE&sciund=548984557609940444"
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
        name: "Surya Narayana Chakka",
        title: "SAP S/4HANA Solution Architect | Order-to-Cash & Supply Chain Transformation Expert",
        profileImage: "/img/Pic.jpg",
        about: `"I am Surya Narayana Chakka, a Senior SAP Solution Architect with over 20 years of global consulting experience in leading complex end-to-end SAP implementations, S/4HANA migration programs, system integration, and enterprise digital transformation. I specialize in SAP S/4HANA Sales & Distribution (SD/OTC), Supply Chain Management, Customer Service, Variant Configuration, and Logistics Execution, delivering scalable, enterprise-wide solutions across Manufacturing, Pharma, Consumer Goods, Automotive, Medical Devices, and Chemical industries.",
  "With deep expertise in SAP ECC → S/4HANA transition strategies, business process harmonization, solution blueprinting, and cross-functional stakeholder collaboration, I help organizations modernize core business processes and achieve measurable operational efficiency. I have successfully led multiple global rollouts, migrations, upgrades, and support engagements across multi-country SAP landscapes.",
  "I am known for bridging the gap between business and technology — working closely with business leaders, process owners, and technical teams to design SAP architectures that align with organizational goals, ensure compliance, reduce cost, and maximize long-term scalability. My leadership approach prioritizes clarity, governance, knowledge enablement, risk-controlled delivery, and high-performance team culture.",
  "I am certified in SAP S/4HANA Sales, Order Fulfillment, and Central Finance, and I continue to stay aligned with evolving SAP innovations such as FIORI, SAP Activate methodology, Advanced ATP, BRF+, Event-Based Revenue Recognition, and next-generation integration architectures. I am passionate about helping enterprises accelerate transformation, enhance customer experience, and drive profitable business growth."`,
    };

    return {
        props: { user },
    };
}
