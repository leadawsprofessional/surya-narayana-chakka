import React from "react";
import Head from "next/head";
import styles from "@/styles/News.module.css";

export default function News({ articles = [] }) {
	return (
		<div className={styles.articleContainer}>
			<Head>
				<title>Surya Narayana Chakka</title>
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
				title: "Surya Narayana Chakka presents his visionary book which examines AI and ML applications for ERP system transformation",
				link: "https://techbullion.com/surya-narayana-chakka-presents-his-visionary-book-which-examines-ai-and-ml-applications-for-erp-system-transformation/",
				image: "img/news1.png",
				content: "The digital economy operates at an unprecedented rate which forces businesses to transform their operational systems and supply chain management and customer relations approaches. The competitive landscape demands that Enterprise Resource Planning (ERP) systems evolve to incorporate artificial intelligence (AI) and machine learning (ML) and predictive analytics features for businesses to stay competitive. Surya Narayana Chakka wrote Smart ERP Solutions for Digital Commerce: AI and ML Strategies for Business Transformation to study the essential connection between business operations and technological advancements. The book delivers a current analysis of AI and ML applications for ERP system transformation while providing leaders with operational frameworks to link digital innovation to business transformation. Through his more than twenty years of SAP consulting experience Chakka explains complex technical concepts into operational strategies which connect corporate goals to actual business performance."
			},
			{
				title: "Bridging Business and Technology: The Transformative Journey of Surya Narayana Chakka",
				link: "https://www.indiehackers.com/post/bridging-business-and-technology-the-transformative-journey-of-surya-narayana-chakka-H7lcvLBsNW0gHKkm9yTS",
				image: "img/news2.png",
				content: "In today’s rapidly changing tech landscape, enterprises often struggle to align evolving business needs with the complexity of digital transformation. The gap between ambition and implementation remains a persistent challenge. Legacy systems, fragmented data structures, rising customer expectations, and siloed business processes further deepen this divide. Many organizations find themselves stalled—unable to scale innovations or unify global operations due to integration bottlenecks, outdated infrastructures, or lack of specialized talent. At this crossroads stands Surya Narayana Chakka—an industry stalwart whose expertise in SAP solutions has not only bridged this divide but significantly reshaped how organizations navigate change with precision and purpose."
			},
			// {
			// 	title: "Surya Narayana Chakka: Shaping Predictive Finance Through Responsible Innovation",
			// 	link: "https://www.techtimes.com/articles/312297/20251016/rahul-modak-shaping-predictive-finance-through-responsible-innovation.htm",
			// 	image: "img/news3.png",
			// 	content: "The modern financial system operates through technology, which serves as its essential core for building trust, achieving operational efficiency, and ensuring system stability. The real challenge arises because billions of dollars move between countries and millions of people use digital platforms, yet technology deployment does not automatically result in tangible benefits."
			// },

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
