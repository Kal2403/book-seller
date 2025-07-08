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
                </div>
            </div>
        </div>
    )
}

export default Books;
