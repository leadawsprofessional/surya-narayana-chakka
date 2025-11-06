import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Surya Narayana Chakka</title>
                <meta name="author" content="Your Name" />
            </Head>
            <div className={styles.articleContent}>
                <h1>Articles</h1>
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

                                    <p className={styles.publisher}>
                                        Publisher : {item.publisher}
                                    </p>
                                    <p className={styles.year}>
                                        Year of publication : {item.year}
                                    </p>
                                    <a href={item.link}>
                                        <button
                                            className={styles.readMoreButton}
                                        >
                                            Read Article
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
                title: "Digital transformation through integrated ERP solutions: A framework for omnichannel excellence in modern retail and E-commerce ecosystems",
                link: "https://wjarr.com/sites/default/files/WJARR-2019-0143.pdf",
                year: "2019",
                publisher: "WJARR",
                image: "img/paper/1.png",
            },
            {
                title: "Intelligent Data Processing at Scale: Leveraging SAP HANA In-Memory Computing with Embedded AI/ML for Real-Time Enterprise Decision Making",
                link: "https://www.ijrar.org/papers/IJRAR19S1839.pdf",
                year: "2020",
                publisher: "IJRAR",
                image: "img/paper/2.png",
            },
            {
                title: "Smart Retail Revolution: Implementing AI-Driven Customer Experience and Inventory Optimization Using SAP HANA Retail Solutions",
                link: "https://gjeta.com/sites/default/files/GJETA-2021-0007.pdf",
                year: "2021",
                publisher: "GJETA",
                image: "img/paper/3.png",
            },
            {
                title: "Intelligent Process Automation in SAP Sales and Materials Management: Transforming User Experience Through Fiori UX, Personas Customization, and Robotic Process Automation Integration",
                link: "https://wjarr.com/sites/default/files/WJARR-2022-0212.pdf",
                year: "2022",
                publisher: "WJARR",
                image: "img/paper/4.png",
            },
            {
                title: "Advanced Predictive Analytics in Enterprise Systems: Machine Learning Models for Business Forecasting and Strategic Decision Support",
                link: "https://wjaets.com/sites/default/files/WJAETS-2022-0078.pdf",
                year: "2022",
                publisher: "WJAETS",
                image: "img/paper/5.png",
            },
            {
                title: "AI-Enhanced Sales and Distribution: Implementing Machine Learning Algorithms in SAP S/4HANA for Intelligent Order Processing and Customer Relationship",
                link: "https://www.ijrar.org/papers/IJRAR22D3227.pdf",
                year: "2022",
                publisher: "IJRAR",
                image: "img/paper/6.png",
            },
            {
                title: "Embedded artificial intelligence capabilities in SAP HANA: Exploring native machine learning functions for enterprise data science applications",
                link: "https://gjeta.com/sites/default/files/GJETA-2023-0033.pdf",
                year: "2023",
                publisher: "GJETA",
                image: "img/paper/7.png",
            },
            {
                title: "Algorithmic Trust and Transparency: The Role of Generative AI in Shaping Investor Confidence in Brokerage Services",
                link: "https://welltestingjournal.com/index.php/WT/article/view/194",
                year: "2025",
                publisher: "Well Testing Journal",
                image: "img/paper/8.png",
            },
            {
                title: "Integrating Large Language Models into Agile Software Development: A 2023 Perspective on Productivity and Code Quality",
                link: "https://welltestingjournal.com/index.php/WT/article/view/198",
                year: "2023",
                publisher: "Well Testing Journal",
                image: "img/paper/9.png",
            },
            {
                title: "Augmenting SAP S/4HANA Sales and Distribution Processes through AI/ML-Driven Predictive Analytics: A 2024 Enterprise Perspective",
                link: "https://welltestingjournal.com/index.php/WT/article/view/195",
                year: "2024",
                publisher: "Well Testing Journal",
                image: "img/paper/10.png",
            },
            {
                title: "Edge-Cloud Hybrid Architecture for Distributed AI Applications",
                link: "https://ieeexplore.ieee.org/abstract/document/11158770",
                year: "2025",
                publisher: "IEEE",
                image: "img/paper/11.png",
            },
        ];

        return {
            props: { articles },
        };
    } catch (error) {
        console.error("Error fetching articles:", error);
        return {
            props: { articles: [] },
        };
    }
}
