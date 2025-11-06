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
                    <h1 className={styles.logo}>Surya Narayana Chakka</h1>
                    <p className={styles.tagline}>
                    Languages: ABAP (basic), SQL, Shell Scripting
                    Frontend: SAP Fiori / UI5, SAP GUI, SAP Portal
                    Backend: SAP S/4HANA, SAP ECC (SD / MM / LE / CS / VC), BAPI, RFC, IDoc
                    Databases: SAP HANA, Oracle, SQL Server
                    Cloud: AWS, SAP BTP, Azure (working knowledge)
                    DevOps & Tools: SAP Solution Manager (ChaRM), Jira, ServiceNow, Git
                    Testing: HP ALM, SAP Test Workbench, JIRA Test Management
                    Big Data & Analytics: SAP BW/BI, SAC (Analytics Cloud)
                    Workflow & Integration: EDI, ALE, PI/PO, REST/SOAP APIs
                    Others: SAP Activate Methodology, Variant Configuration, Business Process Harmonization, Global Rollout Leadership 
                    </p>
                </div>
                <div className={styles.socialSection}>
                    <h3 className={styles.heading}>Connect Me</h3>
                    <div className={styles.socialIcons}>
                        <Link href="http://www.linkedin.com/in/suryanchakka">
                            <FaLinkedin />{" "}
                            {/* <span className={styles.linkText}>LinkedIn</span> */}
                        </Link>
                        <Link href="https://www.researchgate.net/profile/Surya-Chakka-3">
                            {/* <SiAcademia />  */}
							ResearchGate
                        </Link>
                        <Link href="https://scholar.google.com/citations?hl=en&user=jjca4rYAAAAJ&authuser=5&scilu=&scisig=ACUpqDcAAAAAaGReblSVbj91-t-4kKtM9KnPx28&gmla=AH8HC4y1lHJmsc9nLJTEtW4MtFdWez6f9JTsJs9MGvJaVk2V-E-ze1rVs6VBo-74FOm0tt40RxCawZ6oBm3EC1ngPiTyDovaLmEyslo&sciund=10308550989155682432&gmla=AH8HC4yhdQztYKcH5_4qzr5ROqLp0tTX6dkFNBrJ_xHsBg89Fe6nmQ5Bs1lUtp2nEy12eBQJvgvfYOPR6cxZa1chAva06_tWcJ64ry8oDm8&sciund=4779118739417550724&gmla=AH8HC4zuOMs6pgyuDmj5LyGrQ3jrgOM_ocPFvWxM19vP7Onqgix3fDpHjJA1vqn70MyR41FAx5JOCeUxHGajNm8-yNTFLfwJ_UZUEiJWjKE&sciund=548984557609940444">
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
                    &copy; {new Date().getFullYear()} Surya Narayana Chakka. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};
