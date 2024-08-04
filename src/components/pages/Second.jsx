import React from 'react'
import './Second.scss'
import Continues from '../../assets/img/continues.jfif'
import Posterone from '../../assets/img/posterone.jpg'
import Firstsesone from '../../assets/img/firstsesone.jpg'
import Hiswords from '../../assets/img/hiswords.png'
import Fight from '../../assets/img/fight.jpeg'
import Tessa from '../../assets/img/tessa.jpg'
import Secondfinish from '../../assets/img/secondfinish.jpg'

const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__continues'>
                        <img src={Continues} alt='Continues' />
                    </div>
                    <div className='second__subtitle'>Было поставлено четыре продолжения фильма: «Горец-2», «Горец-3», «Горец-4» и «Горец-5». В 1992 году на телеэкраны вышел сериал «Горец».</div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Posterone} alt='Posterone' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Го́рец (англ. Highlander: The Series) — фантастический сериал, являющийся альтернативным продолжением фильма «Горец». В сериале в качестве главного героя выступает родственник героя полнометражного фильма Дункан Маклауд из шотландского клана Маклаудов (его играет Эдриан Пол).</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Каждый эпизод начинается с вводного слова и нарезкой сцен из жизни Дункана, дающих краткий обзор темы сериала. В первых шести сериях первого сезона вводное слова произносит сам Горец.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Firstsesone} alt='First sesone' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Hiswords} alt='His words' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Я — Дункан Маклауд, родился четыреста лет назад в горах Шотландии. Я один из Бессмертных. Веками мы ждали времени Сбора, когда под ударами мечей падут головы, и польётся животворящая сила. В конце останется только один.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Практически в каждой серии Дункан Маклауд встречается с другими бессмертными, часто это заканчивается гибелью последних. Дункан пытается избежать схваток и жить как обычный человек, но это не удаётся.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Fight} alt='Fight' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Tessa} alt='Tessa' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Постоянными спутниками Дункана являются его возлюбленная художница Тэсса Ноэль и магазинный воришка Риччи. Позднее к нему присоединяются таинственные наблюдатели Джо Доусон и старейший из бессмертных Митос.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__titles'>Queen - Who Wants To Live Forever (Official Video)</div>
                    <div className='second__from'>
                        <div className='second__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_Jtpf8N5IDE?si=qtEuVkdcE_VIw_gu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='second__continues'>
                        <img src={Secondfinish} alt='Secondfinish' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second