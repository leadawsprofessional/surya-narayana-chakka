import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [], highlights = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Manjeet Malaga</title>
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
			{/* <div className={styles.sidebar}>
				<QuickLinks />
			</div> */}
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const aboutData = [
			"Experienced Senior Technical Program Manager & Software Development Leader with 20+ years of expertise in cloud computing, big data, security, and software development. Adept at leading high-performing global teams, optimizing costs, and driving scalable technology solutions across AWS, FINRA, Synechron, and more. Proven track record in delivering complex projects, managing multi-million dollar revenues, and transforming enterprise applications through big data, AI/ML, cloud, and security-driven architectures. Passionate about driving innovation, automating processes, and mentoring teams to achieve operational excellence and business success.",
		];

		const highlights = [
			"Technology Leader with deep expertise in cloud architecture, data engineering, and security.",
			"Strong background in AWS services, big data processing, DevOps, and full-stack development.",
			"Experienced in building, scaling, and securing cloud-based applications while leading cross-functional teams.",
			"Skilled in cost optimization, project management, and delivering high-impact technology transformations.",
			"Hands-on experience in Java, Scala, Python, Node.js, React.js, and various data processing tools.",
			"A results-driven professional known for solving complex technical challenges, improving operational efficiency, and delivering enterprise-grade solutions.",
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
