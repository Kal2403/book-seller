import React, { useRef } from 'react';
import { ourBestSellersStyles as styles } from '../assets/dummystyles';
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { bgColors, obsbooks } from '../assets/dummydata';
import { useCart } from '../CartContext/CartContext';

const OurBestSellers = () => {

    const scrollRef = useRef(null);
    const { cart, dispatch } = useCart();

    const inCart = (id) => cart?.items?.some(item => item.id === id);
    const getQty = (id) => cart?.items?.find(item => item.id === id)?.quantity || 0;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.headerText}>
                        <h1 className={styles.title}>
                            <span className={styles.gradientText}>
                                Curated Excellence
                            </span>
                        </h1>
                        <p className={styles.subtitle}>Top Rated by Our Readers</p>
                    </div>
                    <div className={styles.navWrapper}>
                        <div className={styles.navLine} />
                        <div className={styles.navButtons}>
                            <button onClick={scrollLeft} className={styles.navBtn}>
                                <ChevronLeft className={styles.navIcon} size={20} />
                            </button>
                            <button onClick={scrollRight} className={styles.navBtn}>
                                <ChevronRight className={styles.navIcon} size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBestSellers;
