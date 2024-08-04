import React from 'react'
import './Third.scss'
import Worldwide from '../../assets/img/worldwide.jpg'
import Worldposter from '../../assets/img/worldposter.jpg'
import Life100 from '../../assets/img/life100.jpg'
import Onlyone from '../../assets/img/onlyone.jpg'
import Pupil from '../../assets/img/pupil.jpg'
import Mitting from '../../assets/img/mitting.jpg'
import Finishscene from '../../assets/img/finishscene.jfif'

const Third = () => {
    return (
        <div className='third'>
            <div className='container'>
                <div className='third__body'>
                    <div className='third__worldwide'>
                        <img src={Worldwide} alt='Worldwide' />
                    </div>
                    <div className='third__subtitle'>Эта страница посвящена вымышленной вселенной «Горец».</div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Worldposter} alt='World poster' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>«Го́рец» (англ. Highlander) — популярная научно-фантастическая вселенная, созданная писателем/сценаристом Грегори Уайденом и включающая на сегодняшний день пять полнометражных фильмов, два телесериала, мультипликационный сериал, анимационный флеш-фильм, 14 романов, большое количество комиксов.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Главные персонажи «Горцев» — т. н. «Бессмертные». Это обычные представители человеческой расы, если не считать того, что они не стареют и могут умереть, только если отрубить им голову. Кроме того, они не могут иметь детей.</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='thild__item'>
                                <div className='third__photo'>
                                    <img src={Life100} alt='Life 100' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Onlyone} alt='Only one' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Сюжеты вертятся вокруг охоты за их головами других бессмертных, исторических реминисценций и воспоминаний Бессмертных, проживших долгую жизнь (некоторые флэшбэки отсылают даже ко временам Ассиро-Вавилонии), а также мистической составляющей их бессмертия.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>У Бессмертных развита система ученичества. Более старые Бессмертные тренируют молодых и объясняют им правила Игры.</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='thild__item'>
                                <div className='third__photo'>
                                    <img src={Pupil} alt='Pupil' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Mitting} alt='Mitting' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Однажды необъяснимая тяга соберёт всех Бессмертных в одной стране мира (США). Сбор — финальный этап Игры. Сбор начался в 80-х годах XX-го века и продлится до тех пор, пока не останется только один Бессмертный.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__titles'>Queen - A Kind of Magic (Official Video Remastered)</div>
                    <div className='third__from'>
                        <div className='third__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0p_1QSUsbsM?si=uldwPqPcs3a7ge-y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='third__worldwide'>
                        <img src={Finishscene} alt='Finish scene' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third