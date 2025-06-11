import React from 'react';
import { homeBooksStyles as styles } from '../assets/dummystyles';
import { useCart } from '../CartContext/CartContext';
import { hbbooks } from '../assets/dummydata';
import { ArrowRight, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeBook = () => {

    const { cart, dispatch } = useCart();

    const inCart = (id) => cart?.items?.find(item => item.id === id);

    const handleAdd = (book) => dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1 } })
    const handleInc = (id) => dispatch({ type: "INCREMENT", payload: { id } })
    const handleDec = (id) => dispatch({ type: "DECREMENT", payload: { id } })

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
