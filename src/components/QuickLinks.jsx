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
                    <Link href="https://www.linkedin.com/in/narendrakandregula">
                        <FaLinkedin /> LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="https://www.researchgate.net/profile/Narendra-Kandregula-2">
                        <SiAcademia /> ResearchGate
                    </Link>
                </li>
                <li>
                    <Link href="https://scholar.google.com/citations?view_op=list_works&hl=en&authuser=5&hl=en&user=InQ6BDsAAAAJ&authuser=5">
                        <FaGoogleScholar /> Google Scholar
                    </Link>
                </li>
            </div>
        </div>
    );
};
