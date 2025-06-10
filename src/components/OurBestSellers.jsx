import React, { useRef } from 'react';
import { ourBestSellersStyles as styles } from '../assets/dummystyles';
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { bgColors, obsbooks } from '../assets/dummydata';
import { useCart } from '../CartContext/CartContext';

const OurBestSellers = () => {

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
                </div>
            </div>
        </section>
    )
}

export default OurBestSellers;
