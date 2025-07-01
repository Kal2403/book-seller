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
