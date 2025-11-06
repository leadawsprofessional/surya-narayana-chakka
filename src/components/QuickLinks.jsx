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
                    <Link href="http://www.linkedin.com/in/suryanchakka">
                        <FaLinkedin /> LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="https://www.researchgate.net/profile/Surya-Chakka-3">
                        <SiAcademia /> ResearchGate
                    </Link>
                </li>
                <li>
                    <Link href="https://scholar.google.com/citations?hl=en&user=jjca4rYAAAAJ&authuser=5&scilu=&scisig=ACUpqDcAAAAAaGReblSVbj91-t-4kKtM9KnPx28&gmla=AH8HC4y1lHJmsc9nLJTEtW4MtFdWez6f9JTsJs9MGvJaVk2V-E-ze1rVs6VBo-74FOm0tt40RxCawZ6oBm3EC1ngPiTyDovaLmEyslo&sciund=10308550989155682432&gmla=AH8HC4yhdQztYKcH5_4qzr5ROqLp0tTX6dkFNBrJ_xHsBg89Fe6nmQ5Bs1lUtp2nEy12eBQJvgvfYOPR6cxZa1chAva06_tWcJ64ry8oDm8&sciund=4779118739417550724&gmla=AH8HC4zuOMs6pgyuDmj5LyGrQ3jrgOM_ocPFvWxM19vP7Onqgix3fDpHjJA1vqn70MyR41FAx5JOCeUxHGajNm8-yNTFLfwJ_UZUEiJWjKE&sciund=548984557609940444">
                        <FaGoogleScholar /> Google Scholar
                    </Link>
                </li>
            </div>
        </div>
    );
};
