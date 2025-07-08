import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Narendra Kandregula</title>
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
                title: "AI-Driven Financial Forecasting in Fintech: Enhancing Predictive Accuracy Through Machine Learning and Deep Learning Models",
                link: "https://www.ijrar.org/papers/IJRAR19D6877.pdf",
                year: "2018",
                publisher: "IJRAR",
                image: "img/paper/1.png",
            },
            {
                title: "Smart Contracts and DeFi Protocols: Enhancing Security, Transparency, and Efficiency in Financial Transactions",
                link: "https://www.ijaresm.com/uploaded_files/document_file/Narendra_KandregulajcYj.pdf",
                year: "2019",
                publisher: "IJARESM",
                image: "img/paper/2.png",
            },
            {
                title: "Leveraging Artificial Intelligence for Real-Time Fraud Detection in Financial Transactions: A Fintech Perspective",
                link: "https://wjarr.com/sites/default/files/WJARR-2019-0129.pdf",
                year: "2019",
                publisher: "WJARR",
                image: "img/paper/3.png",
            },
            {
                title: "Optimizing Big Data Workflows with Machine Learning: A Framework for Intelligent Data Engineering",
                link: "https://welltestingjournal.com/index.php/WT/article/view/161",
                year: "2020",
                publisher: "Well Testing Journal",
                image: "img/paper/4.png",
            },
            {
                title: "Exploring Software-Defined Vehicles: A Comparative Analysis of AI and ML Models for Enhanced Autonomy and Performanc",
                link: "https://www.ijrar.org/papers/IJRAR19S1836.pdf",
                year: "2020",
                publisher: "IJRAR",
                image: "img/paper/5.png",
            },
            {
                title: "Leveraging Artificial Intelligence and Machine Learning for Market Prediction in the Fintech Industry: A Comparative Analysis of Predictive Models and Their Impact on Financial Decision-Making",
                link: "https://welltestingjournal.com/index.php/WT/article/view/160",
                year: "2021",
                publisher: "Well Testing Journal",
                image: "img/paper/6.png",
            },
            {
                title: "Evaluating Performance and Scalability of Multi-Cloud Environments: Key Metrics and Optimization Strategies",
                link: "https://wjarr.com/sites/default/files/WJARR-2022-0560.pdf",
                year: "2022",
                publisher: "WJARR",
                image: "img/paper/7.png",
            },
            {
                title: "Revolutionizing Fintech with Generative AI: Enhancing Financial Decision-Making, Risk Management, and Customer Experience",
                link: "https://www.ijaresm.com/uploaded_files/document_file/Narendra_KandregulahHwJ.pdf",
                year: "2022",
                publisher: "IJARESM",
                image: "img/paper/8.png",
            },
            {
                title: "Optimizing IoT Data Modeling: Advanced Frameworks for Real-Time Analytics, Scalability, and Security",
                link: "https://revistadecineforum.com/index.php/cf/article/view/275",
                year: "2023",
                publisher: "CINEFORUM",
                image: "img/paper/9.png",
            },
            {
                title: "AI-Driven Cybersecurity in Fintech: Leveraging Machine Learning for Threat Detection, Fraud Prevention, and Risk Mitigation",
                link: "https://welltestingjournal.com/index.php/WT/article/view/159",
                year: "2023",
                publisher: "Well Testing Journal",
                image: "img/paper/10.png",
            },
            {
                title: "Accelerating Drug Discovery with Generative AI: A Paradigm Shift in Pharmaceutical Innovation and Development",
                link: "https://journalwjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-0845.pdf",
                year: "2025",
                publisher: "WJARR",
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
