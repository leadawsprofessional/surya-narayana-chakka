import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";

export default function News({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Rahul Modak</title>
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
				title: "Rahul Modak Releases Groundbreaking Book on Predictive Analytics in Finance",
				link: "https://www.indiehackers.com/post/rahul-modak-releases-groundbreaking-book-on-predictive-analytics-in-finance-TKmnfu82ECezXkwueH77",
				image: "img/news1.png",
				content: "Artificial intelligence and machine learning technologies transform operational processes in all sectors while leading the financial industry toward substantial changes. The transformation of financial operations depends heavily on predictive decision-making because data has become the main factor that determines business success. Rahul Modak publishes Predictive Analytics in Finance: Machine Learning Models for Credit Scoring and Investment as his new book, which addresses the financial technology sector's challenges between technology and finance. This book, now available on Amazon, serves both as a functional reference and as a conceptual exploration of financial AI intelligence development. The book provides readers with both operational knowledge and conceptual insights about AI-based financial intelligence."
			},
			{
				title: "Rahul Modak: Merging Technology and Humanity Through Innovation",
				link: "https://techbullion.com/rahul-modak-merging-technology-and-humanity-through-innovation/",
				image: "img/news2.png",
				content: "Rahul Modak’s story—beginning as a curious student in Nagpur and evolving into an AI visionary in South Carolina—illustrates how technology can be harnessed responsibly to yield both business success and social progress. His projects address pressing challenges from client retention to patient safety, all while uplifting underserved communities and cultivating new talent. As enterprises worldwide wrestle with digital transformation, Modak’s blueprint offers clear guidance: align technical ingenuity with ethical stewardship, maintain relentless focus on measurable outcomes, and never lose sight of the human beings behind every data point."
			},
			{
				title: "Rahul Modak: Shaping Predictive Finance Through Responsible Innovation",
				link: "https://www.techtimes.com/articles/312297/20251016/rahul-modak-shaping-predictive-finance-through-responsible-innovation.htm",
				image: "img/news3.png",
				content: "The modern financial system operates through technology, which serves as its essential core for building trust, achieving operational efficiency, and ensuring system stability. The real challenge arises because billions of dollars move between countries and millions of people use digital platforms, yet technology deployment does not automatically result in tangible benefits."
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
