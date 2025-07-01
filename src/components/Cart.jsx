import React, { useEffect } from 'react';
import { styles } from '../assets/dummystyles';
import { ArrowRight, BookOpen, Link, Minus, Plus, ShoppingBag, Trash } from 'lucide-react';
import { useCart } from '../CartContext/CartContext';

const Cart = () => {

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
            </div>
        </div>
    )
}

export default Cart;
