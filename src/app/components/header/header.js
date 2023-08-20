"use client";
import React, { useState } from 'react';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';
// import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '@auth0/nextjs-auth0/client';

const Header = () => {

  // const { loginWithRedirect, logout, user } = useAuth0();

  const { user, isLoading, error } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // const [imageError, setImageError] = useState({});

  // const handleImageError = (icon) => {
  //   setImageError((prev) => ({ ...prev, [icon]: true }));
  // };

  const renderSubMenu = (items) => (
    <div className={styles.subMenu}>
      {items.map((item, index) => (
        <p key={index} className={styles.subLink}>
          {item.icon && <Image src={`/images/icon-${item.icon}.svg`} alt={item.icon} width={24} height={24} />}
          {item.label}
        </p>
      ))}
    </div>
  );

  const navItems = [
    {
      label: 'Features',
      icon: 'arrow-down',
      subMenu: [
        { label: 'Todo List', icon: 'todo' },
        { label: 'Calendar', icon: 'calendar' },
        { label: 'Reminders', icon: 'reminders' },
        { label: 'Planning', icon: 'planning' },
      ],
    },
    {
      label: 'Company',
      icon: 'arrow-down',
      subMenu: [
        { label: 'History' },
        { label: 'Our Team' },
        { label: 'Blog' },
      ],
    },
    { label: 'Careers' },
    { label: 'About' },
  ];

  return (
    <nav className={`${styles.nav} wrapper-header`}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <div className={styles.navLogo}>
            <Image src="/images/logo.svg" alt="logo" width={100} height={50} />
          </div>
          <ul className={styles.navLinks}>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.label}
                {item.icon && <Image src={`/images/icon-${item.icon}.svg`} className={styles.arrow} alt={item.icon} width={24} height={24} />}
                {item.subMenu && renderSubMenu(item.subMenu)}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mobileMenuBtn}>
          <Image src="/images/icon-menu.svg" alt="menu" width={24} height={24} />
        </div>
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navItems.map((item, index) => (
              <li key={index}>
                <p>
                  {item.label}
                  {item.icon && <Image src={`/images/icon-${item.icon}.svg`} className={styles.arrow} alt={item.icon} width={24} height={24} />}
                </p>
                {item.subMenu && renderSubMenu(item.subMenu)}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navRight}>
          {!user ? (
            <button onClick={() => window.location.href = '/api/auth/login'}>Login</button>
          ) : (
            <>
              <span>Welcome, {user.name}!</span>
              <button onClick={() => window.location.href = '/api/auth/logout'}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
