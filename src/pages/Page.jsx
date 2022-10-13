import React from 'react'
import {Footer} from '../components/footer/Footer'
import {Header} from '../components/header/Header'
import {MainPage} from '../components/main/MainPage';

export const Page = () => {
  return (
    <div>
        <Header />
        <MainPage />
        <Footer />
    </div>
  );
}
