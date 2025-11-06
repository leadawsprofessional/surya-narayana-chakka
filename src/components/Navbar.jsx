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
                <Link href="/">SNC</Link>
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
                <Link href="/news">Award</Link>
                <Link href="/books">Books Authored</Link>
                <Link href="/news">News</Link>
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
                    <Link href="/news" onClick={toggleMenu}>
                        Award
                    </Link>
                    <Link href="/books" onClick={toggleMenu}>
                        Books Authored
                    </Link>
                    <Link href="/news" onClick={toggleMenu}>
                        News
                    </Link>
                </div>
            )}
        </nav>
    );
}
