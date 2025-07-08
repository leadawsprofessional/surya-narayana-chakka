import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";

export default function News({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Narendra Kandregula</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.articleContent}>
				<h1>News</h1>
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
									<p className={styles.year}>
										{item.content}
									</p>
									<a href={item.link}>
										<button className={styles.readMoreButton}>
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
				title: "Narendra Kandregula Launches Visionary Book: AI Unleashed – Machine Learning's Role in the Next Industrial Revolution",
				link: "https://forbes.ge/en/narendra-kandregula-launches-visionary-book-ai-unleashed-machine-learning-s-role-in-the-next-industrial-revolution/",
				image: "img/news1.png",
				content: "In a world being reshaped by artificial intelligence, where industries are transforming and the boundaries of human capability are continuously redefined, the need for clarity and strategic insight has never been greater. Responding to the growing demand for strategic insight into artificial intelligence, Narendra Kandregula has released his latest book, AI Unleashed: Machine Learning’s Role in the Next Industrial Revolution."
			},
			{
				title: "Narendra Kandregula –A Legacy of Innovation in Financial Technology",
				link: "https://techbullion.com/narendra-kandregula-a-legacy-of-innovation-in-financial-technology/",
				image: "img/news2.png",
				content: "In an era where financial markets demand unprecedented speed and adaptability, Narendra Kandregula stands as a pioneering force in FinTech innovation. With over 12 years of experience at Fortune 500 companies, Narendra has carved a niche as a leader in designing cloud-native, high-performance systems that redefine scalability and efficiency. Currently serving as Assistant Vice President at Deutsche Bank in New York, he spearheads the development of cutting-edge platforms for the Fixed Income market, where precision and innovation converge. "
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
