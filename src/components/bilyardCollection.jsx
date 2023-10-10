import React, { useState, useTransition } from 'react'
import Collection from './collection'

const BilyardCollection = () => {
    const [bilyard, setBilyard] = useState([
        {
            name: "Бильярдные коллекции",
            items: [
                {
                    "image": "Коллекция-Президент-III.jpg",
                    "name": "Президент III"
                },
                {
                    "image": "2020_Prime_01.jpg",
                    "name": "Премьер"
                },
                {
                    "image": "2018_Presedent.jpg",
                    "name": "Президент"
                },
                {
                    "image": "2018_Presedent_Silver.jpg",
                    "name": "Президент Сильвер"
                },
                {
                    "image": "2018_Venice.jpg",
                    "name": "Венеция"
                },
                {
                    "image": "2018_Ampir.jpg",
                    "name": "Ампир"
                },
                {
                    "image": "2020_Неаполь.jpg",
                    "name": "Новинка"
                },
                {
                    "image": "2018_Baron_lux.jpg",
                    "name": "Барон-Люкс"
                }
            ]
        },
        {
            name: "Бильярдные коллекции",
            items: [
                {
                    "image": "Коллекция-Президент-III.jpg",
                    "name": "Президент III"
                },
                {
                    "image": "2020_Prime_01.jpg",
                    "name": "Премьер"
                },
                {
                    "image": "2018_Presedent.jpg",
                    "name": "Президент"
                },
                {
                    "image": "2018_Presedent_Silver.jpg",
                    "name": "Президент Сильвер"
                },
                {
                    "image": "2018_Venice.jpg",
                    "name": "Венеция"
                },
                {
                    "image": "2018_Ampir.jpg",
                    "name": "Ампир"
                },
                {
                    "image": "2020_Неаполь.jpg",
                    "name": "Новинка"
                },
                {
                    "image": "2018_Baron_lux.jpg",
                    "name": "Барон-Люкс"
                }
            ]
        },
        {
            name: "Бильярдные коллекции",
            items: [
                {
                    "image": "Коллекция-Президент-III.jpg",
                    "name": "Президент III"
                },
                {
                    "image": "2020_Prime_01.jpg",
                    "name": "Премьер"
                },
                {
                    "image": "2018_Presedent.jpg",
                    "name": "Президент"
                },
                {
                    "image": "2018_Presedent_Silver.jpg",
                    "name": "Президент Сильвер"
                },
                {
                    "image": "2018_Venice.jpg",
                    "name": "Венеция"
                },
                {
                    "image": "2018_Ampir.jpg",
                    "name": "Ампир"
                },
                {
                    "image": "2020_Неаполь.jpg",
                    "name": "Новинка"
                },
                {
                    "image": "2018_Baron_lux.jpg",
                    "name": "Барон-Люкс"
                }
            ]
        }

    ])
    return (
        <div className='wrap-content-left'>
            <Collection data={bilyard[0]} />
            <Collection data={bilyard[1]} />
            <Collection data={bilyard[2]} />
        </div>
    )
}

export default BilyardCollection