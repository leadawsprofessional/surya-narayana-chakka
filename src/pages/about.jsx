import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import { QuickLinks } from "@/components/QuickLinks";

export default function About({ aboutData = [], highlights = [] }) {
	return (
		<div className={styles.aboutContainer}>
			<Head>
				<title>Surya Narayana Chakka</title>
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
  "I am Surya Narayana Chakka, a Senior SAP Solution Architect with over 20 years of global consulting experience in leading complex end-to-end SAP implementations, S/4HANA migration programs, system integration, and enterprise digital transformation. I specialize in SAP S/4HANA Sales & Distribution (SD/OTC), Supply Chain Management, Customer Service, Variant Configuration, and Logistics Execution, delivering scalable, enterprise-wide solutions across Manufacturing, Pharma, Consumer Goods, Automotive, Medical Devices, and Chemical industries.",
  "With deep expertise in SAP ECC → S/4HANA transition strategies, business process harmonization, solution blueprinting, and cross-functional stakeholder collaboration, I help organizations modernize core business processes and achieve measurable operational efficiency. I have successfully led multiple global rollouts, migrations, upgrades, and support engagements across multi-country SAP landscapes.",
  "I am known for bridging the gap between business and technology — working closely with business leaders, process owners, and technical teams to design SAP architectures that align with organizational goals, ensure compliance, reduce cost, and maximize long-term scalability. My leadership approach prioritizes clarity, governance, knowledge enablement, risk-controlled delivery, and high-performance team culture.",
  "I am certified in SAP S/4HANA Sales, Order Fulfillment, and Central Finance, and I continue to stay aligned with evolving SAP innovations such as FIORI, SAP Activate methodology, Advanced ATP, BRF+, Event-Based Revenue Recognition, and next-generation integration architectures. I am passionate about helping enterprises accelerate transformation, enhance customer experience, and drive profitable business growth."
];


		const highlights = [
  "20+ years of global experience leading enterprise SAP S/4HANA, ECC, and digital transformation programs across multi-industry environments.",
  "Specialized expertise in SAP SD/OTC, Supply Chain, Logistics Execution, Customer Service, and Variant Configuration with deep process knowledge.",
  "Proven track record in delivering multi-phase global rollouts, greenfield implementations, brownfield migrations, and complex integration architectures.",
  "Strong leadership in SAP S/4HANA modernization initiatives including business process re-engineering, system harmonization, and data migration strategies.",
  "Expert in solution blueprinting, requirement analysis, functional specification design, fit-gap analysis, and cross-functional stakeholder alignment.",
  "Hands-on experience in leading SAP Activate methodology, Agile delivery governance, and best-practice implementation frameworks.",
  "Experienced in collaborating with global business leaders, COE teams, offshore/onshore resources, and system integrators to ensure delivery excellence.",
  "Known for bridging business and technology by translating strategic objectives into scalable, sustainable SAP solutions that drive measurable outcomes.",
  "Consistent history of improving operational efficiency, reducing process cycle times, enabling compliance, and enhancing customer experience through system optimization.",
  "Passionate about mentoring teams, enabling knowledge transfer, and cultivating high-performance delivery environments."
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
