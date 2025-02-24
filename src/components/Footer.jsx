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
                    <h1 className={styles.logo}>Manjeet Malaga</h1>
                    <p className={styles.tagline}>
                    Cloud & Big Data: AWS (Lambda, Glue, Athena, EMR, Redshift, S3, API Gateway, SNS, SQS, CloudWatch), Spark, Trino, Presto
 Programming & Development: Java, Scala, Python, Go, Node.js, TypeScript, React.js, AngularJS
 DevOps & CI/CD: Docker, Kubernetes (EKS, ECS), Jenkins, TeamCity, Git, Terraform
 Enterprise & Security: Cloud Security, IAM, HIPAA Compliance, FinTech & RegTech Solutions
 Data Engineering & Analytics: ETL Pipelines, Data Orchestration, Jupyter Notebooks, Zeppelin
 Project & Program Management: Agile, Scrum, TPM, Cross-functional Leadership, Cost Optimization
 Databases & Storage: DynamoDB, Redshift, SQL Server, Oracle, MongoDB, MySQL
 Enterprise Applications: Financial Dashboards, Market Surveillance Systems, Tax & Compliance Platforms 
                    </p>
                </div>
                <div className={styles.socialSection}>
                    <h3 className={styles.heading}>Connect Me</h3>
                    <div className={styles.socialIcons}>
                        <Link href="https://www.linkedin.com/in/manjeet-malaga-it-deliverymgr/">
                            <FaLinkedin />{" "}
                            {/* <span className={styles.linkText}>LinkedIn</span> */}
                        </Link>
                        <Link href="https://independent.academia.edu/ManjeetMalaga">
                            <SiAcademia /> 
							{/* ResearchGate */}
                        </Link>
                        <Link href="https://scholar.google.com/citations?user=NQv82nYAAAAJ&hl=en&authuser=1">
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
                    &copy; {new Date().getFullYear()} Manjeet Malaga. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};
