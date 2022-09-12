import React from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className="py-2 border-b-2 border-gray-30">
      <div className="container mx-auto">
        <div className={styles.logoContainer}>
          <Image src="/icon.svg" layout="fill" className={styles.logo} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
