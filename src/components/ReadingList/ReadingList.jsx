import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ReadingList.css';
import booksText from '../../../books.txt?raw';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function ReadingList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lines = booksText.split('\n');
    const parsedBooks = [];
    let i = 0;
    while (i < lines.length) {
      const title = lines[i]?.trim();
      if (!title) {
        i++;
        continue;
      }
      const author = lines[i + 1]?.trim() || '';
      const comment = lines[i + 2]?.trim() || '';
      parsedBooks.push({ title, author, description: comment });
      i += 3;
    }
    setBooks(parsedBooks);
    setLoading(false);
  }, []);

  return (
    <section className="section reading" id="reading" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container">
        <motion.div className="section-header" {...fadeInUp} transition={{ duration: 0.6 }}>
          <span className="section-label">Reading List</span>
          <h2 className="section-title">On My Bookshelf</h2>
          <p style={{ marginTop: '16px', fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6' }}>
            These are the books I've read lately. I wrote a short impression for each one.
          </p>
        </motion.div>

        {loading ? (
          <p>Loading books...</p>
        ) : (
          <div className="reading__list">
            {books.map((book, index) => (
              <motion.div
                key={index}
                className="reading__item"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="reading__content">
                  <h3 className="reading__title">{book.title}</h3>
                  <p className="reading__author">{book.author}</p>
                  <p className="reading__description">{book.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
