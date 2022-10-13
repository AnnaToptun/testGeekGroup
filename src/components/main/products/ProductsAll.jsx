import React from 'react'
import {CardProduct} from './CardProduct'
import {products} from './products'
import './styles/products.css'
export const ProductsAll = () => {
    return (
        <div className="products">
            <div className="products-sort">
                <span>Сортувати за:</span>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option className="sort-opinion">За замовчуванням</option>
                    <option className="sort-opinion" value="1">Спочатку дешеві</option>
                    <option className="sort-opinion" value="2">Спочатку дорогі</option>
                    <option className="sort-opinion" value="3">Спочатку популярні</option>
                </select>
            </div>
            <div className="products-card">
                {products.map((card, index) => (
                    <CardProduct key={index} card={card} />
                ))}
            </div>
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link" href="#">8</a></li>
                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
