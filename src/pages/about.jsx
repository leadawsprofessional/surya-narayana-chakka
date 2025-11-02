import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [], highlights = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Rahul Modak</title>
				<meta name="author" content="Name" />
			</Head>
			<div className={styles.aboutContent}>
				<h1>About Me</h1>
				<div className={styles.aboutBody}>
					{aboutData.length > 0 ? (
						aboutData.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))
					) : (
						<p>No information available at the moment.</p>
					)}
				</div>

				{/* Key Highlights Section */}
				<div className={styles.highlights}>
					{/* <h2>Key Highlights</h2> */}
					<ul>
						{highlights.map((point, index) => (
							<li key={index}>{point}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.sidebar}>
				{/* <QuickLinks /> */}
				<img src="/img/Pic1.jpg" alt="Profile" />
			</div> 
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const aboutData = [
			"I am Rahul Modak, a seasoned Data, AI/ML, and Cloud Solutions Leader with over 20 years of experience, including more than a decade in architecting and leading enterprise-scale data and AI initiatives across financial, healthcare, and technology domains. My expertise spans multi-cloud architectures, big data engineering, advanced analytics, and generative AI, where I have designed and delivered high-performing, cost-effective solutions that drive measurable business outcomes. Throughout my career, I have led cross-functional teams in building award-winning AI/ML applications, scalable data platforms, and intelligent automation systems. My leadership at LPL Financial, PayPal, and CVS has centered around enabling organizations to transform their data ecosystems, improve operational efficiency, and harness the power of AI-driven insights for decision-making. As a Celent Model Wealth Manager Award Winner and a Globee Awards Judge for Artificial Intelligence, I remain passionate about driving innovation in AI, LLMs, and cloud-native architectures. I believe in fostering collaboration, mentoring talent, and aligning technology vision with business strategy to create impactful digital transformations. When not leading technology transformations, I enjoy exploring emerging advancements in AI safety, edge intelligence, and responsible machine learning—continuing my commitment to pushing the boundaries of innovation with purpose.",
		];

		const highlights = [
			"Over 20 years of progressive experience in Data Engineering, Cloud Computing, and AI/ML solution delivery across Fortune 500 organizations.",
	"Proven expertise in architecting large-scale, multi-cloud ecosystems leveraging AWS, Azure, and GCP for data-driven innovation and enterprise automation.",
	"Leader in designing and deploying production-grade AI/ML and Generative AI platforms that drive measurable business outcomes.",
	"Deep technical proficiency in Big Data frameworks (Spark, Hadoop, Databricks), Data Warehousing (Snowflake, Redshift), and Advanced Analytics.",
	"Strategic experience building end-to-end MLOps pipelines with CI/CD, feature stores, model monitoring, and automated retraining workflows.",
	"Strong background in modern data architectures including Data Mesh, Lakehouse, and event-driven streaming with Kafka and Kinesis.",
	"Hands-on expertise in API-driven microservices, container orchestration (Docker, Kubernetes), and serverless computing.",
	"Certified leader in cloud cost optimization, data governance, and security compliance for regulated industries such as Finance and Healthcare.",
	"Skilled in managing globally distributed Agile teams, mentoring data engineers and scientists, and establishing best practices for scalable engineering delivery.",
	"Recognized thought leader and industry speaker on AI transformation, with accolades including the Celent Model Wealth Manager Award and Globee Awards Judge for AI.",
		];

		return {
			props: { aboutData, highlights },
		};
	} catch (error) {
		console.error("Error fetching about data:", error);
		return {
			props: { aboutData: [], highlights: [] },
		};
	}
}
