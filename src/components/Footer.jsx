import React from "react";
import styles from "@/styles/Footer.module.css";
import { FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <h1 className={styles.logo}>Narendra Kandregula</h1>
                    <p className={styles.tagline}>
                    Languages: Java, JavaScript, Python, SQL, C
                    Frontend: ReactJS, Redux, HTML5, CSS3, JavaScript, JSP
                    Backend: Spring Boot, J2EE, Flask, Hibernate, JPA, Spring AOP
                    Databases: Oracle, MySQL, MS SQL Server, Cassandra, Sybase, MongoDB
                    Cloud: AWS (EC2, S3, Lambda, SQS), Private Cloud
                    DevOps & Tools: Git, Jenkins, Jira, Bitbucket, Maven, Docker, SonarQube
                    Testing: JUnit, Selenium, Mockito, Jest, Enzyme, Puppeteer, Cucumber
                    Big Data & Messaging: Kafka, KDB, Informatica
                    Workflow & Design: Figma (UX/UI), Spring State Machine, Highcharts
                    Others: Elastic Search, Autosys, AWS CI/CD, Swagger, Liferay, JSF, Portlets 
                    </p>
                </div>
                <div className={styles.socialSection}>
                    <h3 className={styles.heading}>Connect Me</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.linkedin.com/in/narendrakandregula">
                            <FaLinkedin />{" "}
                            {/* <span className={styles.linkText}>LinkedIn</span> */}
                        </Link>
                        <Link href="https://www.researchgate.net/profile/Narendra-Kandregula-2">
                            {/* <SiAcademia />  */}
							ResearchGate
                        </Link>
                        <Link href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=5&hl=en&user=InQ6BDsAAAAJ&authuser=5">
                            <FaGoogleScholar />{" "}
                            {/* <span className={styles.linkText}> */}
                                {/* Google Scholar */}
                            {/* </span> */}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>
                    &copy; {new Date().getFullYear()} Narendra Kandregula. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};
