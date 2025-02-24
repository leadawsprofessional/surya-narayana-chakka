import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";
import Link from "next/link";

export default function Awards({ articles = [] }) {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Manjeet Malaga</title>
                <meta name="author" content="Your Name" />
            </Head>
            <div className={styles.articleContent}>
                <h1>Awards</h1>
                <div className={styles.articlelist}>
                    {articles.length > 0 ? (
                        articles.map((item, index) => (
                            <div className={styles.card} key={index}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        className={styles.cardImage}
                                        src={item.image}
                                        alt={`Article: ${item.title}`}
                                    />
                                </div>
                                <div className={styles.cardText}>
                                    <p className={styles.title}>{item.title}</p>
                                    {/* <div className={styles.linkBox}>
										<span>Read Article:</span>
										<Link
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{item.link}
										</Link>
									</div> */}

                                    <p className={styles.year}>
                                        {item.content}
                                    </p>
                                    <a href={item.link}>
                                        <button
                                            className={styles.readMoreButton}
                                        >
                                            Read more
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No articles available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const articles = [
            {
                title: "Title",
                link: "#",
                image: "img/award.png",
                content:
                    "Content",
            },
        ];

        return {
            props: { articles },
        };
    } catch (error) {
        console.error("Error fetching news:", error);
        return {
            props: { articles: [] },
        };
    }
}
