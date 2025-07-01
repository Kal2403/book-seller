import React, { useEffect } from 'react';
import { styles } from '../assets/dummystyles';
import { ArrowRight, BookOpen, Link, Minus, Plus, ShoppingBag, Trash } from 'lucide-react';
import { useCart } from '../CartContext/CartContext';

const Cart = () => {

    const { cart, dispatch } = useCart();
    const total = cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const getImageSource = (item) => {
        if (typeof item.image === 'string') return item.image;
        return item.image?.default
    }

    const inc = (item) => dispatch({ type: 'INCREMENT', payloac: { id: item.id, soruce: item.source } })
    const dec = (item) => dispatch({ type: 'DECREMENT', payloac: { id: item.id, soruce: item.source } })
    const remove = (item) => dispatch({ type: 'REMOVE_ITEM', payloac: { id: item.id, soruce: item.source } })

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        <ShoppingBag className={styles.titleIcon} />
                        Shopping Cart
                    </h1>
                    <p className={styles.subtitle}>
                        {cart.items.length} item{cart.items.length !== 1 && 's'} in your cart
                    </p>
                </div>
                {cart.items.length === 0 ? (
                    <div className={styles.emptyCard}>
                        <div className={styles.emptyIconWrapper}>
                            <ShoppingBag className={styles.emptyIcon} />
                        </div>
                        <h2 className={styles.emptyTitle}>Your cart feels lonely</h2>
                        <p className={styles.emptyDescription}>
                            Discover our collection of premium books and start your reading journey.
                        </p>
                        <Link to='/books' className={styles.browseBtn}>
                            <BookOpen className={styles.browseIcon} />
                            Browse Collection
                        </Link>
                    </div>
                ) : ()}
            </div>
        </div>
    )
}

export default Cart;
