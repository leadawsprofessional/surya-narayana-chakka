import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [], highlights = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Narendra Kandregula</title>
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
				<img src="/img/Pic.jpg" alt="Profile" />
			</div> 
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const aboutData = [
			"Experienced Full-Stack Developer and Cloud Solution Architect with over 11 years of expertise in building scalable, distributed, and cloud-native applications across finance, telecom, and technology domains. Proven ability to architect and develop microservices, real-time systems, and responsive user interfaces using Java, Spring Boot, React, and AWS. Adept at integrating cloud services, optimizing performance, and leading Agile teams to deliver high-impact enterprise software. Committed to writing clean, maintainable code and driving technical excellence across the development lifecycle.",
		];

		const highlights = [
			"11+ years of hands-on experience in full-stack development, cloud architecture, and microservices design.",
			"Expert in Java, Spring Boot, RESTful APIs, React.js, Kafka, and AWS services including EC2, S3, and Lambda.",
			"Built and maintained high-throughput systems in investment banking, managing data pipelines and secure services.",
			"Strong background in frontend development with React, Redux, Jest, and responsive design principles.",
			"Experience with DevOps practices including Docker, Jenkins, Git, CI/CD, and infrastructure automation.",
			"Certified AWS Developer Associate and Oracle Certified Java Programmer with a passion for scalable architecture and clean code.",
			"Effective communicator and team player with a track record of mentoring engineers and collaborating across global teams.",
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
