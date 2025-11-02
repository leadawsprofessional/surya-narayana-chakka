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
                                        href="https://www.linkedin.com/in/rahul-modak-14443441"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className={styles.icon} /> LinkedIn
                                    </a>
                                </li>
                                <li className={styles.linkItem}>
                                    <a
                                        href="https://www.researchgate.net/profile/Rahul-Modak-4?ev=hdr_xprf"
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
                                        href="https://scholar.google.com/citations?hl=en&user=hLG6k8QAAAAJ&scilu=&scisig=ACUpqDcAAAAAaEVcbUThSY1E34TK9DmHVyZAfvQ&gmla=AH8HC4zeSViiqobF-r-f_pfeVBcEBqWHxm0guJ-rboUkxNL8r7f4MjQjt4yxPE11D37yhPC0FzlONpRLdGXvPzpyEMNM61Xpu0c2NQI&sciund=1090311730389284311&gmla=AH8HC4zMWEis13AyDGF9uD-7uhn-ezTxh1W0a4H8gFHPyvs8wj742FUODjGs_5j36WgKZoNf1UziGu4_zegX8lVUnoi6n8rqiy1es3ZZhh8&sciund=18417712584777429016&gmla=AH8HC4x1uXOm6Qi_mGn1X2Ou7L8ccIOPIC6E1eOr3NfBGTaKeBUFygVlHhK9KEWM2QGB7Wz_OZI3pZ6PCnUZXVdADjyxsThZIwg6IA7uhAg&sciund=6461340445237614903&gmla=AH8HC4zN1LqYf-8haGC1KRq0Osb2Ed8rkRoRxxdbSSh28ktECsEzqEepWeuhKATH-n1K1R0IEwbTEdi8-OxQ0CY3fpq5JG_SdvLOmDP7BHU&sciund=10341401432337321755&gmla=AH8HC4zf2y4MVCGsZ_MpNeIm0s3npvqjI9LOy5IRh71M4ncq_LnxC_xR6samgU7b78SHhhysycsupJT7aX9BD1afjek299bS8OVmHum35wk&sciund=13854706460157834700"
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
        name: "Rahul Modak",
        title: "Data & AI Solutions Architect | Cloud Transformation Leader | Innovator in Intelligent Systems",
        profileImage: "/img/Pic.jpeg",
        about: `I am Rahul Modak, a seasoned Data, AI/ML, and Cloud Solutions Leader with over 20 years of experience, including more than a decade in architecting and leading enterprise-scale data and AI initiatives across financial, healthcare, and technology domains. My expertise spans multi-cloud architectures, big data engineering, advanced analytics, and generative AI, where I have designed and delivered high-performing, cost-effective solutions that drive measurable business outcomes. Throughout my career, I have led cross-functional teams in building award-winning AI/ML applications, scalable data platforms, and intelligent automation systems. My leadership at LPL Financial, PayPal, and CVS has centered around enabling organizations to transform their data ecosystems, improve operational efficiency, and harness the power of AI-driven insights for decision-making. As a Celent Model Wealth Manager Award Winner and a Globee Awards Judge for Artificial Intelligence, I remain passionate about driving innovation in AI, LLMs, and cloud-native architectures. I believe in fostering collaboration, mentoring talent, and aligning technology vision with business strategy to create impactful digital transformations. When not leading technology transformations, I enjoy exploring emerging advancements in AI safety, edge intelligence, and responsible machine learning—continuing my commitment to pushing the boundaries of innovation with purpose.`,
    };

    return {
        props: { user },
    };
}
