import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Rahul Modak</title>
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
                title: "Efficient Feature Store Architectures for Real-time Machine Learning Model Deployment in High-Throughput Systems",
                link: "https://www.ijaresm.com/uploaded_files/document_file/Rahul_ModakFfmP.pdf",
                year: "2020",
                publisher: "IJARESM",
                image: "img/paper/1.png",
            },
            {
                title: "VITA: Conversational AI Health Assistants' Impact on Patient Engagement and Clinical Workflow Integration",
                link: "https://wjarr.com/sites/default/files/WJARR-2021-0236.pdf",
                year: "2021",
                publisher: "WJARR",
                image: "img/paper/2.png",
            },
            {
                title: "Explainable AI models for portfolio risk assessment: Bridging the gap between blackbox predictions and fiduciary transparency",
                link: "https://gjeta.com/sites/default/files/GJETA-2021-0046.pdf",
                year: "2021",
                publisher: "GJETA",
                image: "img/paper/3.png",
            },
            {
                title: "Cloud-based Federated Learning for Distributed IoT Networks",
                link: "https://www.ijrar.org/papers/IJRAR22A2958.pdf",
                year: "2022",
                publisher: "IJRAR",
                image: "img/paper/4.png",
            },
            {
                title: "Distributed Deep Learning on Cloud GPU Clusters",
                link: "https://wjarr.com/sites/default/files/WJARR-2022-0723.pdf",
                year: "2022",
                publisher: "WJARR",
                image: "img/paper/5.png",
            },
            {
                title: "Deep Reinforcement Learning for Optimizing Cross-Border Payment Routing: Balancing Speed, Cost, and Regulatory Compliance",
                link: "https://wjaets.com/sites/default/files/WJAETS-2023-0037.pdf",
                year: "2023",
                publisher: "WJAETS",
                image: "img/paper/6.png",
            },
            {
                title: "Integrating Large Language Models into Agile Software Development: A 2023 Perspective on Productivity and Code Quality",
                link: "https://welltestingjournal.com/index.php/WT/article/view/198",
                year: "2023",
                publisher: "Well Testing Journal",
                image: "img/paper/7.png",
            },
            {
                title: "Market Sentiment Analysis Using Multimodal Transformers: Integrating Earnings Calls, Social Media, and Technical Indicators",
                link: "https://gjeta.com/sites/default/files/GJETA-2023-0121.pdf",
                year: "2023",
                publisher: "GJETA",
                image: "img/paper/8.png",
            },
            {
                title: "Augmenting SAP S/4HANA Sales and Distribution Processes through AI/ML-Driven Predictive Analytics: A 2024 Enterprise Perspective",
                link: "https://welltestingjournal.com/index.php/WT/article/view/200",
                year: "2024",
                publisher: "Well Testing Journal",
                image: "img/paper/9.png",
            },
            {
                title: "Next-Generation AI-Powered Content Personalization: Adaptive Generation Models for Real-Time User Engagement",
                link: "https://welltestingjournal.com/index.php/WT/article/view/195",
                year: "2025",
                publisher: "Well Testing Journal",
                image: "img/paper/10.png",
            },
            {
                title: "Generative AI for Automated Business Report Generation and Analysis",
                link: "https://journalwjaets.com/sites/default/files/fulltext_pdf/WJAETS-2025-0610.pdf",
                year: "2025",
                publisher: "WJAETS",
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
