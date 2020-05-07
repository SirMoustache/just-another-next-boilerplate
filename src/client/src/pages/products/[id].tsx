import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Product = (props: any) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="fullscreen">
      <div className="product">
        <motion.div
          className="img"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <motion.img
            key={props.product.image}
            src={props.product.image}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
        <div className="product-details">
          <motion.div variants={stagger} className="inner">
            <Link href="/">
              <motion.div variants={fadeInUp}>
                <a className="go-back">Back to products</a>
              </motion.div>
            </Link>
            <motion.div variants={fadeInUp}>
              <span className="category">Protein</span>
            </motion.div>
            <motion.h1 variants={fadeInUp}>{props.product.name}</motion.h1>
            <motion.p variants={fadeInUp}>{props.product.details}</motion.p>
            <motion.div variants={fadeInUp} className="additonals">
              <span>Soy Free</span>
              <span>Gluten Free</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="qty-price">
              <div className="qty">
                <div className="minus">-</div>
                <div className="amount">1</div>
                <div className="add">+</div>
              </div>
              <span className="price">{props.product.price}</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="btn-row">
              <button className="add-to-cart"> Add to cart</button>
              <button className="subscribe"> Subscribe</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

const fakeProduct = {
  id: 'ghost-whey-x-chips-ahoy',
  name: 'Ghost Whey X Chips Ahoy',
  details:
    "We've said it before and we will say it again, nothing beats the real thing. With years of R&D and REAL CHIPS AHOY!® cookie pieces in every scoop, this flavor is second to none.",
  price: '$39.99',
  image:
    'https://cdn.shopify.com/s/files/1/2060/6331/products/image.png?v=1571331841',
};

Product.getInitialProps = async function (context: any) {
  const { id } = context.query;
  // const res = await fetch(
  //   `https://my-json-server.typicode.com/wrongakram/demo/products/${id}`,
  // );
  //const product = await res.json();
  return { product: fakeProduct };
};

export default Product;
