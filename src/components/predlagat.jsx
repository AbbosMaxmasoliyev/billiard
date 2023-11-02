import React, { useRef, useState } from 'react'
import Slider from 'react-slick'

const Predlagat = ({ data , name}) => {


    const settingsInner = {
        dots: false,
        infinite: true,

        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,

        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next),
    };


    return (
        <div>
            <div className="index-sliders__section index-sliders__section_sections">
                <div className="index-sliders__section-title">{name}</div>
                <div className="index-tabs">
                    <div className="index-tabs-title">

                        <ul className="index-tabs-title__list">
                            {
                                data.map(({ name }, index) => (
                                    <li className="index-tabs-title__item" key={index}>
                                        <button onClick={() => sliderRef.current.slickGoTo(index)} className={`index-tabs-title__item ${slideIndex == index ? "index-tabs-title__item_state_active" : ""}`}>
                                            <a className="index-tabs-title__link">

                                                {name}
                                            </a>
                                        </button>
                                    </li>
                                ))
                            }


                        </ul>
                    </div>
                    <div className="index-tabs-content">

                        <Slider ref={sliderRef} draggable={false} {...settings}>

                            {
                                data.map(({ items }, index) => (
                                    <Slider {...settingsInner} className="index-slider__list swiper-wrapper" >
                                        {
                                            items.map(({ name, image, link }, index) => (
                                                <li className="index-slider__item swiper-slide swiper-slide-duplicate" style={{ width: "293px", height: "416px" }}>
                                                    <div className="index-slider__inner" style={{ height: "416px" }}>
                                                        <div className="index-slider__img-wrap">
                                                            <a  className="index-slider__img-link">
                                                                <img src={process.env.PUBLIC_URL +`/images/${image}`} alt="" />
                                                                <p>{image}</p>
                                                            </a>
                                                        </div>
                                                        <a className="index-slider__title" >{name}</a>
                                                        {
                                                            link && <a  className="index-slider__detal">Подробнее</a>
                                                        }
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </Slider>
                                ))
                            }



                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Predlagat