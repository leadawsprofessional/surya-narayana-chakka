import React from "react";
import Head from "next/head";
import styles from "@/styles/Books.module.css";
import Link from "next/link";

export default function Books({ books = [] }) {
	return (
		<div className={styles.booksContainer}>
			<Head>
				<title>Manjeet Malaga</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.booksContent}>
				<h1 className={styles.heading}>Books Authored</h1>
				<div className={styles.booklist}>
					{books.length > 0 ? (
						books.map((book, index) => (
							<div className={styles.book} key={index}>
								<Link
									href={book.link}
									className={styles.bookLink}
									target="_blank"
								>
									<iframe
									title={book.title}
									width="500"
									className={styles.embeddedBook}
									height="550"
									frameborder="0"
									allowfullscreen="true" 
									allowtransparency="true"
									src="https://www"
								></iframe>
								</Link>
								<h5 className={styles.bookTitle}>
									{book.title}
								</h5>
							</div>
						))
					) : (
						<p>No books available at the moment.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		const books = [
			{
				title: "",
				link: "#",
				image: "img/book.jpg",
			},
		];

		return {
			props: { books },
		};
	} catch (error) {
		console.error("Error fetching books:", error);
		return {
			props: { books: [] },
		};
	}
}
