import React from "react";
import Head from "next/head";
import styles from "@/styles/Articles.module.css";
import Link from "next/link";

export default function Articles({ articles = [] }) {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Manjeet Malaga</title>
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
                title: "Scaling Cloud Security in AWS: Best Practices and Strategies for Efficient Incident Response Management",
                link: "https://tijer.org/tijer/papers/TIJER1912002.pdf",
                year: "2019",
                publisher: "TIJER",
                image: "img/paper/1.png",
            },
            {
                title: "Cost Optimization in Cloud Computing: Strategic Approaches to Minimizing AWS Expenses without Compromising Performance",
                link: "https://www.ijaresm.com/uploaded_files/document_file/Manjeet_MalagaWHMx.pdf",
                year: "2019",
                publisher: "IJARESM",
                image: "img/paper/2.png",
            },
            {
                title: "Next-Generation Big Data Analytics: Integrating AI and Machine Learning for Scalable Decision-Making Frameworks",
                link: "https://www.ijirset.com/upload/2021/march/214_Next.pdf",
                year: "2021",
                publisher: "IJIRSET",
                image: "img/paper/3.png",
            },
            {
                title: "The Future of Smart Cities: Integrating IoT and 5G for Seamless Urban Automation and Sustainability",
                link: "https://www.irejournals.com/formatedpaper/1703489.pdf",
                year: "2022",
                publisher: "IREJournals",
                image: "img/paper/4.png",
            },
            {
                title: "Advancing Artificial Intelligence Through Machine Learning: Exploring Novel Architectures, Algorithmic Innovations and Real-World Applications for Transformative Impact",
                link: "https://www.irejournals.com/formatedpaper/1703908.pdf",
                year: "2022",
                publisher: "IREJournals",
                image: "img/paper/5.png",
            },
            {
                title: "Pushing the Frontiers of AI and Machine Learning: Advanced Techniques, Ethical Implications, and Transformative Applications Across Industries",
                link: "https://www.ijrar.org/papers/IJRAR24A3612.pdf",
                year: "2024",
                publisher: "IJRAR",
                image: "img/paper/6.png",
            },
            {
                title: "Cybersecurity in the Digital Age: Advanced Strategies for Threat Detection, Prevention, and Resilience ",
                link: "https://ijircce.com/admin/main/storage/app/pdf/EZ8fUys8brVJCoKy6TkQaqY01UGJh0rOQeJnUc07.pdf",
                year: "2021",
                publisher: "IJIRCCE",
                image: "img/paper/7.png",
            },
            {
                title: "Generative AI in Business Consulting: Redefining Strategic Insights",
                link: "https://welltestingjournal.com/index.php/WT/article/view/32.1.37",
                year: "2023",
                publisher: "Well Testing Journal",
                image: "img/paper/8.png",
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
