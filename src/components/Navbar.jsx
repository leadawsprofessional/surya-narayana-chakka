import { useState, useEffect, useRef } from "react";
import styles from "@/styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    const handleResize = () => {
        if (window.innerWidth > 1040) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">MM</Link>
            </div>
            <div
                className={`${styles.navLinks} ${
                    isMenuOpen ? styles.hideLinks : ""
                }`}
                ref={menuRef}
            >
                <Link href="/">Home</Link>
                <Link href="/articles">Articles</Link>
                <Link href="/about">About</Link>
                {/* <Link href="/">Award</Link>
                <Link href="/">Books Authored</Link>
                <Link href="/">News</Link> */}
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                {isMenuOpen ? <RxCross1 /> : <GiHamburgerMenu />}
            </div>
            {isMenuOpen && (
                <div className={styles.mobileMenu} ref={menuRef}>
                    <Link href="/" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/articles" onClick={toggleMenu}>
                        Articles
                    </Link>
                    <Link href="/about" onClick={toggleMenu}>
                        About
                    </Link>
                    {/* <Link href="/" onClick={toggleMenu}>
                        Award
                    </Link>
                    <Link href="/" onClick={toggleMenu}>
                        Books Authored
                    </Link>
                    <Link href="/" onClick={toggleMenu}>
                        News
                    </Link> */}
                </div>
            )}
        </nav>
    );
}
