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
                    <h1 className={styles.logo}>Rahul Modak</h1>
                    <p className={styles.tagline}>
                    Languages: Python, Java, SQL, Shell Scripting
                    Frontend: React.js, Angular, HTML5, CSS3, JavaScript
                    Backend: Java (Spring Boot, Microservices), Python (Flask, FastAPI), Node.js
                    Databases: Snowflake, Oracle, MySQL, PostgreSQL, MongoDB
                    Cloud: AWS (EC2, S3, Lambda, Redshift, SageMaker), Azure, GCP
                    DevOps & Tools: Docker, Kubernetes, Jenkins, Git, Terraform, CI/CD, Jira
                    Testing: JUnit, PyTest, Postman, Selenium
                    Big Data & Analytics: Spark, Hadoop, Hive, Databricks, Kafka, Airflow
                    Workflow & Integration: Apache Airflow, Kafka, RESTful APIs, ETL Pipelines
                    Others: ElasticSearch, Tableau, Power BI, MLflow, TensorFlow, Scikit-learn 
                    </p>
                </div>
                <div className={styles.socialSection}>
                    <h3 className={styles.heading}>Connect Me</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.linkedin.com/in/rahul-modak-14443441">
                            <FaLinkedin />{" "}
                            {/* <span className={styles.linkText}>LinkedIn</span> */}
                        </Link>
                        <Link href="https://www.researchgate.net/profile/Rahul-Modak-4?ev=hdr_xprf">
                            {/* <SiAcademia />  */}
							ResearchGate
                        </Link>
                        <Link href="https://scholar.google.com/citations?hl=en&user=hLG6k8QAAAAJ&scilu=&scisig=ACUpqDcAAAAAaEVcbUThSY1E34TK9DmHVyZAfvQ&gmla=AH8HC4zeSViiqobF-r-f_pfeVBcEBqWHxm0guJ-rboUkxNL8r7f4MjQjt4yxPE11D37yhPC0FzlONpRLdGXvPzpyEMNM61Xpu0c2NQI&sciund=1090311730389284311&gmla=AH8HC4zMWEis13AyDGF9uD-7uhn-ezTxh1W0a4H8gFHPyvs8wj742FUODjGs_5j36WgKZoNf1UziGu4_zegX8lVUnoi6n8rqiy1es3ZZhh8&sciund=18417712584777429016&gmla=AH8HC4x1uXOm6Qi_mGn1X2Ou7L8ccIOPIC6E1eOr3NfBGTaKeBUFygVlHhK9KEWM2QGB7Wz_OZI3pZ6PCnUZXVdADjyxsThZIwg6IA7uhAg&sciund=6461340445237614903&gmla=AH8HC4zN1LqYf-8haGC1KRq0Osb2Ed8rkRoRxxdbSSh28ktECsEzqEepWeuhKATH-n1K1R0IEwbTEdi8-OxQ0CY3fpq5JG_SdvLOmDP7BHU&sciund=10341401432337321755&gmla=AH8HC4zf2y4MVCGsZ_MpNeIm0s3npvqjI9LOy5IRh71M4ncq_LnxC_xR6samgU7b78SHhhysycsupJT7aX9BD1afjek299bS8OVmHum35wk&sciund=13854706460157834700">
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
                    &copy; {new Date().getFullYear()} Rahul Modak. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};
