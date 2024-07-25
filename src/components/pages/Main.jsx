import React from 'react'
import './Main.scss'
import Titul from '../../assets/img/titul.jpg'
import Poster from '../../assets/img/poster.jpg'
import Together from '../../assets/img/together.jpg'
import Original from '../../assets/img/original.jpg'
import Movie from '../../assets/img/movie.jpg'
import Queen from '../../assets/img/queen.jpg'
import Finish from '../../assets/img/finishone.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__titul'>
                        <img src={Titul} alt='Titul' />
                    </div>
                    <div className='main__subtitle'>«Горец» (англ. Highlander) — британский фантастический приключенческий боевик 1986 года режиссера Рассела Малкэхи по рассказу Грегори Уайдена, положивший начало вселенной «Горца».</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Poster} alt='Poster' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>В фильме снимались Кристофер Ламберт, Роксанн Харт, Клэнси Браун и Шон Коннери. Фильм рассказывает о кульминации вековой войны между бессмертными воинами, в котором переплетаются сюжетные линии прошлого и современности.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Коннор Маклауд (Ламберт) рождается в Шотландском нагорье в XVI веке. Ожив после смертельной раны и будучи изгнанным из своей деревни, Маклауд находит воина Рамиреса (Коннери), который объясняет, что они и другие родились бессмертными, непобедимыми, пока их не обезглавят.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Together} alt='Together' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Original} alt='Original' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Бессмертные ведут тайную войну, сражаясь друг с другом, пока последние несколько оставшихся не встретятся на Сборе, чтобы сразиться за награду. В 1985 году Сбор наконец-то происходит в Нью-Йорке, и Маклауд должен сделать всё, чтобы приз не достался его старейшему врагу, убийце Кургану (Браун).</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Фильм «Горец» не имел большого успеха при первом театральном релизе, собрав по всему миру более 12 миллионов долларов при производственном бюджете в 19 миллионов долларов, и получил смешанные отзывы.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Movie} alt='Movie' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Queen} alt='Queen' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Тем не менее, фильм стал культовым и вдохновил на создание сиквелов и телевизионных спин-оффов. Фильм также известен песнями, записанными рок-группой Queen, а песня «Princes of the Universe» также использовалась для заглавной заставки в телесериале. Слоган «Останется только один» вошел в поп-культуру.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__titles'>Queen - Princes Of The Universe (Official Video)</div>
                    <div className='main__from'>
                        <div className='main__video'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VEJ8lpCQbyw?si=mQUk-ejzcWBVV8sH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='main__titul'>
                        <img src={Finish} alt='Finish' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main