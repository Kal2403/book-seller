import React from 'react';
import { homeBooksStyles as styles } from '../assets/dummystyles';
import { useCart } from '../CartContext/CartContext';
import { hbbooks } from '../assets/dummydata';
import { ArrowRight, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeBook = () => {

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className='text-center mb-12'>
                        <h2 className={styles.heading}>Bookseller Favorites</h2>
                        <div className={styles.headingLine} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBook;
