import React from 'react';
import Header from '@/app/components/header/header';
import MainSection from '@/app/components/main/main.js';
import '@/app/globals.scss'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <MainSection />
      </main>
    </div>
  );
}

export default HomePage;
