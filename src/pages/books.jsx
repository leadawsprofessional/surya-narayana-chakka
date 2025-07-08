import React from "react";
import Head from "next/head";
import styles from "@/styles/Books.module.css";
import Link from "next/link";

export default function Books({ books = [] }) {
	return (
		<div className={styles.booksContainer}>
			<Head>
				<title>Narendra Kandregula</title>
				<meta name="author" content="Your Name" />
			</Head>
			<div className={styles.booksContent}>
				<h1 className={styles.heading}>Books Authored</h1>
				<div className={styles.booklist}>
					{books.length > 0 ? (
						books.map((book, index) => (
							<div className={styles.bookCard} key={index}>
							  <a
							    href={book.link}
							    target="_blank"
							    rel="noopener noreferrer"
							    className={styles.bookImageLink}
							  >
							    <img
							      src={book.image.startsWith("/") ? book.image : `/${book.image}`}
							      alt={book.title}
							      className={styles.bookImage}
							    />
							  </a>
							  <div className={styles.bookInfo}>
							    <h5 className={styles.bookTitle}>{book.title}</h5>
							    <a
							      href={book.link}
							      target="_blank"
							      rel="noopener noreferrer"
							      className={styles.amazonButton}
							    >
							      📘 Buy Now on Amazon
							    </a>
							  </div>
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
				title: "AI Unleashed: : Machine Learning's Role in the Next Industrial Revolution",
				link: "https://www.amazon.in/AI-Unleashed-Learnings-Industrial-Revolution-ebook/dp/B0F9TY85B4",
				image: "img/book.png",
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
