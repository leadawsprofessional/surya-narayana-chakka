import React from "react";
import styles from "../styles/QuickLinks.module.css";
import { FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiAcademia } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from "next/link";

export const QuickLinks = () => {
    return (
        <div className={styles.quickLinks}>
            <h1>Quick Links</h1>
            <div>
                <li>
                    <Link href="https://www.linkedin.com/in/manjeet-malaga-it-deliverymgr/">
                        <FaLinkedin /> LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="https://independent.academia.edu/ManjeetMalaga">
                        <SiAcademia /> ResearchGate
                    </Link>
                </li>
                <li>
                    <Link href="https://scholar.google.com/citations?user=NQv82nYAAAAJ&hl=en&authuser=1">
                        <FaGoogleScholar /> Google Scholar
                    </Link>
                </li>
            </div>
        </div>
    );
};
