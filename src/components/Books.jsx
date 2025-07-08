import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, Star, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { booksPageStyles as styles } from '../assets/dummystyles';
import BP1 from '../assets/BP1.png';
import BP2 from '../assets/BP2.png';
import BP3 from '../assets/BP3.png';
import BP4 from '../assets/BP4.png';
import BP5 from '../assets/BP5.png';
import BP6 from '../assets/BP6.png';
import BP7 from '../assets/BP7.png';
import BP8 from '../assets/BP8.png';
import BP9 from '../assets/BP9.png';
import BP10 from '../assets/BP10.png';
import BP11 from '../assets/BP11.png';
import BP12 from '../assets/BP12.png';
import BP13 from '../assets/BP13.png';
import BP14 from '../assets/BP14.png';
import BP15 from '../assets/BP15.png';
import BP16 from '../assets/BP16.png';
import { useCart } from '../CartContext/CartContext';

const Books = () => {

    const {cart, dispatch} = useCart();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchFromURL = queryParams.get('search') || '';

    const [searchTerm, setSearchTerm] = useState(searchFromURL);
    const [sortBy, setSortBy] = useState('title');
    const [filterCategory, setFilterCategory] = useState('all');

    const isInCart = (id) => cart?.items?.some(item => item.id === id && item.source === 'booksPage')
    const getCartQuantity = (id) => cart?.items?.find(item => item.id === id && item.source === 'booksPage')?.quantity || 0;
    
    const handleAddToCart = (book) => dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1, source: 'booksPage' } });
    const handleIncrement = (id) => dispatch({ type: "INCREMENT", payload: { id, source: 'booksPage' } });
    const handleDecrement = (id) => dispatch({ type: "DECREMENT", payload: { id, source: 'booksPage' } });

    const books = [
        { id: 1, image: BP1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99, rating: 4.5, category: 'fiction', description: 'A classic novel set in the Jazz Age, exploring themes of decadence and excess.' },
        { id: 2, image: BP2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99, rating: 4.8, category: 'fiction', description: 'A novel about the serious issues' },
        { id: 3, image: BP3, title: '1984', author: 'George Orwell', price: 15.99, rating: 4.7, category: 'dystopian', description: 'A dystopian novel that delves into totalitarianism and surveillance.' },
        { id: 4, image: BP4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99, rating: 4.6, category: 'romance', description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.' },
        { id: 5, image: BP5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 11.99, rating: 4.2, category: 'fiction', description: 'A story about teenage angst and alienation.' },
        { id: 6, image: BP6, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 14.99, rating: 4.9, category: 'fantasy', description: 'A fantasy novel that follows the journey of Bilbo Baggins.' },
        { id: 7, image: BP7, title: 'Brave New World', author: 'Aldous Huxley', price: 13.99, rating: 4.4, category: 'dystopian', description: 'A dystopian novel that explores a technologically advanced future.' },
        { id: 8, image: BP8, title: 'The Alchemist', author: 'Paulo Coelho', price: 8.99, rating: 4.3, category: 'adventure', description: 'A philosophical book about a shepherd’s journey to find his personal legend.' },
        { id: 9, image: BP9, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', price: 10.49, rating: 4.1, category: 'fiction', description: 'A novel about a youngs quest for eternal youth and beauty.' },
        { id: 10, image: BP10, title: 'Fahrenheit 451', author: 'Ray Bradbury', price: 12.49, rating: 4.0, category: 'dystopian', description: 'A dystopian novel that presents a future where books are banned.' },
        { id: 11, image: BP11, title: 'The Fault in Our Stars', author: 'John Green', price: 9.49, rating: 4.5, category: 'romance', description: 'A romantic novel about two teenagers who meet at a cancer support group.' },
        { id: 12, image: BP12, title: 'The Da Vinci Code', author: 'Dan Brown', price: 14.49, rating: 4.2, category: 'mystery', description: 'A mystery thriller that follows symbologist Robert Langdon.' },
        { id: 13, image: BP13, title: 'The Shining', author: 'Stephen King', price: 11.49, rating: 4.6, category: 'horror', description: 'A horror novel about a family staying in an isolated hotel.' },
        { id: 14, image: BP14, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', price: 16.99, rating: 4.8, category: 'non-fiction', description: 'A non-fiction book that explores the history of humankind from the Stone Age to the present.' },
        { id: 15, image: BP15, title: 'Educated', author: 'Tara Westover', price: 13.49, rating: 4.7, category: 'memoir', description: 'A memoir ...' },
        { id: 16, image: BP16, title: 'Becoming', author: 'Michelle Obama', price: 15.49, rating: 4.9, category: 'memoir', description: 'A memoir by the former First Lady of the United States, Michelle Obama.' }

    ]

    const filteredBooks = books.filter(book => {
        const matchCategory = filterCategory === 'all' || book.category === filterCategory
        const lowerSearch = searchTerm.toLowerCase();
        const matchSearch = searchTerm === '' || book.title.toLowerCase().includes(lowerSearch) || book.author.toLowerCase().includes(lowerSearch);

        return matchCategory && matchSearch;
    })

    const sortedBooks = [...filteredBooks].sort((a, b) => {
        switch (sortBy) {
            case 'price-low': return a.price - b.price;
            case 'price-high': return b.price - a.price;
            case 'rating': return b.rating - a.rating;
            default: return a.title.localeCompare(b.title, undefined, { sensitivity: 'base', numeric: true });
        }
    })
    
    const categories = ['all', ...new Set(books.map(book => book.category).filter(Boolean))];

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headerWrapper}>
                    <h1 className={styles.headerTitle}>
                        Literary Universe
                    </h1>
                    <p className={styles.headerSubtitle}>
                        Explore our vast collection of books across various genres and categories.
                    </p>
                </div>
                <div className={styles.searchWrapper}>
                    <div className={styles.searchInputWrapper}>
                        <div className={styles.searchIconWrapper}>
                            <Search className='h-5 w-5 md:h-6 md:w-6 text-gray-400 group-focus-within:text-[#49C6AC]' />
                        </div>
                        <input type="text" placeholder='Search Titles, authors' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={styles.searchInput} />
                    </div>
                    <div className={styles.filterRow}>
                        <div className={styles.selectGroup}>
                            <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className={styles.selectBox} >
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category === 'all' ? 'All Genres' : category}
                                    </option>
                                ))}
                            </select>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.selectBox}>
                                <option value="title">Sort by Title</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">To Rated</option>
                            </select>
                        </div>
                        <div className={styles.resultText}>
                            Showing {sortedBooks.length} results
                        </div>
                    </div>
                </div>
                <div className={styles.booksGrid}>
                    {sortedBooks.map((book) => {
                        const inCart = isInCart(book.id);
                        const qty = getCartQuantity(book.id);

                        return (
                            <div key={book.id} className={styles.bookCard}>
                                <div className={styles.imageWrapper}>
                                    <img src={book.image} alt={book.title} className={styles.imageStyle} />
                                </div>
                                <h3 className={styles.title}>{book.title}</h3>
                                <p className={styles.author}>by {book.author}</p>
                                <div className={styles.ratingWrapper}>
                                    {[...Array(isFinite(book.rating) ? Math.floor(book.rating) : 0)].map((_, index) => (
                                        <Star className='w-4 h-4 fill-yellow-400 stroke-yellow-400' key={index} />
                                    ))}
                                    <span>({Number.isFinite(book.rating) ? book.rating.toFixed(1) : 'N/A'})</span>
                                </div>
                                <p className={styles.description}>
                                    {book.description}
                                </p>
                                <div className={styles.priceCartWrapper}>
                                    <span className={styles.price}>${book.price.toFixed(2)}</span>
                                    <div className={styles.cartButtons}>
                                        {!inCart ? (
                                            <button onClick={() => handleAddToCart(book)}>
                                                <ShoppingBag className='w-5 h-5 text-white' />
                                            </button>
                                        ): (
                                            <div className='flex items-center gap-1'>
                                                <button onClick={() => handleDecrement(book.id)}>
                                                    <Minus className='w-4 h-4 text-white' />
                                                </button>
                                                <span>{qty}</span>
                                                <button onClick={() => handleIncrement(book.id)}>
                                                    <Plus className='w-4 h-4 text-white' />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Books;
