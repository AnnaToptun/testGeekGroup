import {React, useState} from 'react'
import {brends, categories, colors, genders, materials, seazons, sellers, sizes, styles} from './Arrrays'
import './aside.css'
export const Aside = () => {
    const [beforeRange, setBeforRange] = useState(0)
    const [afterRange, setAfterRange] = useState(5000)
    const onRangeMin = (min) => {
        setBeforRange(min)
    }
    const onRangeMax = (max) => {
        setAfterRange(max);
    };
   
    return (
        <aside className="aside">
            <h2 className="aside-title">Фільтри</h2>
            <div className="accordion accordion-flush aside-accordion" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Категорії
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                {
                                    categories.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.categoria} />
                                                <label className="form-check-label" for={item.categoria}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Ціна
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div data-role="rangeslider">
                                <input type="range" className="form-range" name="range-1a" id="range-1a" min={0} max={100} value={beforeRange} data-popup-enabled={false} data-show-value={true} onChange={e => onRangeMin(e.target.value)} />
                                <input type="range" className="form-range" name="range-1b" id="range-1b" min={0} max={100} value={afterRange} data-popup-enabled={true} data-show-value={true} onChange={e => onRangeMax(e.target.value)} />
                            </div>
                            <link rel="stylesheet" href="https://demos.jquerymobile.com/1.4.2/css/themes/default/jquery.mobile-1.4.2.min.css" />
                            <script src="https://demos.jquerymobile.com/1.4.2/js/jquery.js"></script>
                            <script src="https://demos.jquerymobile.com/1.4.2/js/jquery.mobile-1.4.2.min.js"></script>
                            <div className='d-flex'>
                                <div>
                                    <label for="customRange0">Від</label>
                                    <input type="number" className="form-range-input" id="customRange0" value={beforeRange} onChange={e => onRangeMin(e.target.value)} />
                                </div>
                                <div>
                                    <label for="customRange1">До</label>
                                    <input type="number" className="form-range-input" id="customRange1" value={afterRange} onChange={e => onRangeMax(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Продавець
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                {
                                    sellers.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.seller} />
                                                <label className="form-check-label" for={item.seller}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Бренд
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                {
                                    brends.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.brend} />
                                                <label className="form-check-label" for={item.brend}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Стать
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                {
                                    genders.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.gender} />
                                                <label className="form-check-label" for={item.gender}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Розмір
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                {
                                    sizes.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.size} />
                                                <label className="form-check-label" for={item.size}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Колір
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                               {
                                    colors.map((item, index )=> (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.color} />
                                                <label className="form-check-label" for={item.color}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Матеріал
                        </button>
                    </h2>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                 {
                                    materials.map((item, index)=> (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.material} />
                                                <label className="form-check-label" for={item.material}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                            Сезон
                        </button>
                    </h2>
                    <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                {
                                    seazons.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.seazon} />
                                                <label className="form-check-label" for={item.seazon}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                            Стиль
                        </button>
                    </h2>
                    <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="categories-items">
                                {
                                    styles.map((item, index) => (
                                        <li key={index}>
                                            <span>
                                                <input className="form-check-input" type="checkbox" value={item.value} id={item.style} />
                                                <label className="form-check-label" for={item.style}> {item.value}</label>
                                            </span>
                                            <span className="count">({item.count})</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}