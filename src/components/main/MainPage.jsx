import React from 'react'
import {Aside} from './aside/Aside'
import {ProductsAll} from './products/ProductsAll'
import './mainpages.css'
export const MainPage = () => {
  return (
    <main className="container-xxl">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb main-path">
                <li className="breadcrumb-item ">
                    <a href="#">Головна</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Каталог одягу
                </li>
            </ol>
        </nav>
        <h1 className="main-title">Каталог одягу</h1>
        <div className="main">
            <Aside />
            <ProductsAll className="main-products"  />
        </div>
    </main>
  );
}
