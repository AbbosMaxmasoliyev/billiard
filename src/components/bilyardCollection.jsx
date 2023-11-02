import React, { useState, useTransition } from 'react'
import { Collection, CollectionPopular } from './collection'

const BilyardCollection = () => {
    const [bilyard, setBilyard] = useState([
        {
            name: "Бильярдные коллекции",
            items: [
                {
                    "link": "/bilyardCollection/collection_renessans_gold",
                    "name": "Ренессанс Голд",
                    "image": "2017_Renaissance-Gilt.jpg"
                },
                {
                    "link": "/bilyardCollection/renessans_granzh",
                    "name": "Ренессанс Гранж",
                    "image": "2017_Renaissance-Grunj.jpg"
                },
                {
                    "link": "/bilyardCollection/collection_renessans",
                    "name": "Ренессанс",
                    "image": "2017_Renaissance-Patina.jpg"
                },
                {
                    "link": "/bilyardCollection/leo",
                    "name": "Лео",
                    "image": "2017_K%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-%D0%9B%D0%B5%D0%BE.jpg"
                },
                {
                    "link": "/bilyardCollection/kollektsiya_leo_ii",
                    "name": "Лео II",
                    "image": "2017_K%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F-%D0%9B%D0%B5%D0%BE-II.jpg"
                },
                {
                    "link": "/bilyardCollection/kolekciya_grossmeyster",
                    "name": "Гроссмейстер",
                    "image": "2023_Grandmaster.jpg"
                },
                {
                    "link": "/bilyardCollection/motsart_collection",
                    "name": "Моцарт",
                    "image": "2021_Mozart.jpg"
                },
                {
                    "link": "/bilyardCollection/okhota_",
                    "name": "Охота",
                    "image": "2021_%D0%9E%D1%85%D0%BE%D1%82%D0%B0.jpg"
                }
            ]
        },


    ])

    const [billiardPopular, setBilliardPopular] = useState([
        {
            "name": "Бильярдные столы",

        },
        {
            "name": "Популярные ",
            "items": [

                {
                    "name": "Кадет Комби",
                    "image": "2022_Tb_Kadet_Combo_00.jpg"
                },
                {
                    "name": "Кадет",
                    "image": "Tb_Kadet_01.jpg"
                },
                {
                    "name": "Компакт Лайт",
                    "image": "01_2018_Tb_Compact_Light.jpg"
                },
                {
                    "name": "Юнкер",
                    "image": "01_Tb_Junker.jpg"
                },
                {
                    "name": "Домашний",
                    "image": "01_2017_Tb_Home.jpg"
                },
                {
                    "name": "Компакт Люкс",
                    "image": "2022_Tb_Compact_Light_veneer_01.jpg"
                },
                {
                    "name": "Домашний Люкс",
                    "image": "01+_Tb_Domashniy_lux_II.jpg"
                },
                {
                    "name": "Сибирь",
                    "image": "2018_Tb_Siberian_ochre_01.jpg"
                }
            ]
        },
        {
            "name": "Современные ",
            "items": [

                {
                    "name": "Лофт",
                    "image": "2021_Tb_loft_%D0%BD%D0%BE%D1%87%D0%B5-%D1%8D%D0%BA%D0%BA%D0%BE_00.jpg"
                },
                {
                    "name": "Бристоль",
                    "image": "%D0%91%D1%80%D0%B8%D1%81%D1%82%D0%BE%D0%BB%D1%8C_gray_01.jpg"
                },
                {
                    "name": "High-tech",
                    "image": "eblue_venge_mali_natur_HT_S.jpg"
                },
                {
                    "name": "High-style",
                    "image": "Tb_High-Style_01.jpg"
                },
                {
                    "name": " Fusion",
                    "image": "Tb_Fusion_01_black-wood.jpg"
                },
                {
                    "name": "High-style Lux",
                    "image": "Tb_High-Style-Lux_01.jpg"
                },
                {
                    "name": "Techno ",
                    "image": "Tb_Techno_01_black-and-white_02.jpg"
                },
                {
                    "name": "Victory",
                    "image": "Tb_Victory_01.jpg"
                }
            ]
        },
        {
            "name": "Эксклюзивные ",
            "items": [

                {
                    "name": "Барон-Люкс",
                    "image": "01_2019_Tb_Baron-Lux.jpg"
                },
                {
                    "name": "Ливерпуль-Кракле",
                    "image": "01_Tb_Liverpool_Cracle.jpg"
                },
                {
                    "name": "Ливерпуль-Экзотик",
                    "image": "01_Tb_Liverpool_exotic.jpg"
                },
                {
                    "name": "Ливерпуль-Люкс",
                    "image": "Tb_Liverpool-Lux.jpg"
                },
                {
                    "name": " Fusion",
                    "image": "Tb_Fusion_01_black-wood.jpg"
                },
                {
                    "name": "High-style Lux",
                    "image": "Tb_High-Style-Lux_01.jpg"
                },
                {
                    "name": "Президент Сильвер",
                    "image": "%D0%BF%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82%20%D1%81%D0%B8%D0%BB%D1%8C%D0%B2%D0%B5%D1%80.jpg"
                },
                {
                    "name": "Венеция",
                    "image": "%D0%92%D0%B5%D0%BD%D0%B5%D1%86%D0%B8%D1%8F.jpg"
                }
            ]
        },
        {
            "name": "Суперпрофессиональные ",
            "items": [

                {
                    "name": "Чемпион-Клаб",
                    "image": "00_2017_Tb_Champion_Clab.jpg"
                },
                {
                    "name": "Ливерпуль Прайм Снукер",
                    "image": "2022_Tb_Liverpool_Prime_snooker_01-0.jpg"
                },
                {
                    "name": "Президент III",
                    "image": "2019_Tb_President_III_01.jpg"
                },
                {
                    "name": "Президент",
                    "image": "Tb_Prezident_01.jpg"
                },
                {
                    "name": "Ливерпуль Клаб Прайм",
                    "image": "2021_Tb_Liverpool-club_Prime_06-%D1%8D%D1%82%D0%B0%D0%BF_%D0%BB%D1%83%D0%B7%D1%8B.jpg"
                },
                {
                    "name": "Президент III Прайм",
                    "image": "2021_Tb_President_Prime_06_%D1%8D%D1%82%D0%B0%D0%BF_%D0%BB%D1%83%D0%B7%D1%8B.jpg"
                },
                {
                    "name": "Президент Прайм",
                    "image": "2021_Tb_President_Prime_06_%D1%8D%D1%82%D0%B0%D0%BF_%D0%BB%D1%83%D0%B7%D1%8B.jpg"
                }
            ]
        },
        {
            "name": "Профессиональные ",
            "items": [

                {
                    "name": "Классик",
                    "image": "2021_Tb_%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA_t_01.jpg"
                },
                {
                    "name": "Арсенал",
                    "image": "01_Tb_Arsenal_Lux.jpg"
                },
                {
                    "name": "Арсенал II",
                    "image": "01_Tb_Arsenal_Lux_II.jpg"
                },
                {
                    "name": "Барон II",
                    "image": "01_Tb_Baron_2.jpg"
                },
                {
                    "name": "Барон",
                    "image": "01_Tb_Baron.jpg"
                },
                {
                    "name": "Ливерпуль ЭКО",
                    "image": "2021_Tb_Liverpool_EKO_01.jpg"
                },
                {
                    "name": "Ливерпуль",
                    "image": "01_2022_Tb_Liverpool.jpg"
                },
                {
                    "name": "Ливерпуль III",
                    "image": "01_Tb_Liverpool_III.jpg"
                }
            ]
        },
        {
            "name": "Любительские ",
            "items": [

                {
                    "name": "Модерн Люкс",
                    "image": "01_Tb_Modern_Luks.jpg"
                },
                {
                    "name": "Лофт",
                    "image": "2021_Tb_loft_%D0%BD%D0%BE%D1%87%D0%B5-%D1%8D%D0%BA%D0%BA%D0%BE_00.jpg"
                },
                {
                    "name": "Лофт шпон",
                    "image": "2021_Tb_loft_%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82_00.jpg"
                },
                {
                    "name": "Прага",
                    "image": "2019_Tb_Prague_01.jpg"
                },
                {
                    "name": "Домашний Люкс",
                    "image": "01+_Tb_Domashniy_lux_II.jpg"
                },
                {
                    "name": "Домашний Люкс III",
                    "image": "2018_Tb_Domashniy_lux_III_01.jpg"
                },
                {
                    "name": "Сибирь",
                    "image": "2018_Tb_Siberian_ochre_01.jpg"
                },
                {
                    "name": "Модерн Про",
                    "image": "Tb_Modern_PRO_%D1%82%D0%B8%D0%BA-01.jpg"
                }
            ]
        },
        {
            "name": "Игровые ",
            "items": [

                {
                    "name": "Настольный пул",
                    "image": "%D0%9D%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_SLP-3620-2_01.jpg"
                },
                {
                    "name": "Настольный",
                    "image": "Tb_%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "Тренажер Митасова ТРН-02",
                    "image": "Tb_Mitasova_01.jpg"
                },
                {
                    "name": "Кадет",
                    "image": "Tb_Kadet_01.jpg"
                },
                {
                    "name": "Кадет Комби",
                    "image": "2022_Tb_Kadet_Combo_00.jpg"
                },
                {
                    "name": "Компакт Лайт",
                    "image": "01_2018_Tb_Compact_Light.jpg"
                },
                {
                    "name": "Юнкер",
                    "image": "01_Tb_Junker.jpg"
                },
                {
                    "name": "Домашний",
                    "image": "01_2017_Tb_Home.jpg"
                }
            ]
        },
        {
            "name": "Сток предложения ",
            "items": [

                {
                    "name": "Модерн Люкс",
                    "image": "01_Tb_Modern_Luks.jpg"
                },
                {
                    "name": "Домашний",
                    "image": "01_2017_Tb_Home.jpg"
                },
                {
                    "name": "Виртуоз",
                    "image": "2020_Tb_Virtuoso_01_ochre.jpg"
                },
                {
                    "name": "Классик",
                    "image": "2021_Tb_%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA_t_01.jpg"
                },
                {
                    "name": "Голливуд",
                    "image": "02%D0%93%D0%BE%D0%BB%D0%BB%D0%B8%D0%B2%D1%83%D0%B4.jpg"
                },
                {
                    "name": "Ливерпуль",
                    "image": "01_2022_Tb_Liverpool.jpg"
                },
                {
                    "name": "Ливерпуль Прайм Снукер",
                    "image": "2022_Tb_Liverpool_Prime_snooker_01-0.jpg"
                }
            ]
        },
        {
            "name": "Детские ",
            "items": [

                {
                    "name": "Настольный пул",
                    "image": "%D0%9D%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_SLP-3620-2_01.jpg"
                },
                {
                    "name": "Настольный",
                    "image": "Tb_%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "Кадет Комби",
                    "image": "2022_Tb_Kadet_Combo_00.jpg"
                },
                {
                    "name": "Кадет",
                    "image": "Tb_Kadet_01.jpg"
                },
                {
                    "name": "Компакт Лайт",
                    "image": "01_2018_Tb_Compact_Light.jpg"
                },
                {
                    "name": "Юнкер",
                    "image": "01_Tb_Junker.jpg"
                },
                {
                    "name": "Домашний",
                    "image": "01_2017_Tb_Home.jpg"
                },
                {
                    "name": "Виртуоз",
                    "image": "2020_Tb_Virtuoso_01_ochre.jpg"
                }
            ]
        },
        {
            "name": "Для дачи ",
            "items": [

                {
                    "name": "Настольный пул",
                    "image": "%D0%9D%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_SLP-3620-2_01.jpg"
                },
                {
                    "name": "Настольный",
                    "image": "Tb_%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "Кадет Комби",
                    "image": "2022_Tb_Kadet_Combo_00.jpg"
                },
                {
                    "name": "Кадет",
                    "image": "Tb_Kadet_01.jpg"
                },
                {
                    "name": "Компакт Лайт",
                    "image": "01_2018_Tb_Compact_Light.jpg"
                },
                {
                    "name": "Юнкер",
                    "image": "01_Tb_Junker.jpg"
                },
                {
                    "name": "Модерн Люкс",
                    "image": "01_Tb_Modern_Luks.jpg"
                },
                {
                    "name": "Домашний",
                    "image": "01_2017_Tb_Home.jpg"
                }
            ]
        },
        {
            "name": "Компактные ",
            "items": [

                {
                    "name": "Компакт Лайт",
                    "image": "01_2018_Tb_Compact_Light.jpg"
                },
                {
                    "name": "Компакт Люкс",
                    "image": "2022_Tb_Compact_Light_veneer_01.jpg"
                }
            ]
        },
        {
            "name": "Настольные ",
            "items": [

                {
                    "name": "Настольный пул",
                    "image": "%D0%9D%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_SLP-3620-2_01.jpg"
                },
                {
                    "name": "Настольный",
                    "image": "Tb_%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "Кадет Комби",
                    "image": "2022_Tb_Kadet_Combo_00.jpg"
                },
                {
                    "name": "Кадет",
                    "image": "Tb_Kadet_01.jpg"
                },
                {
                    "name": "Компакт Лайт",
                    "image": "01_2018_Tb_Compact_Light.jpg"
                },
                {
                    "name": "Юнкер",
                    "image": "01_Tb_Junker.jpg"
                },
                {
                    "name": "Модерн ",
                    "image": "Tb_Modern_%D1%82%D0%B8%D0%BA-01.jpg"
                },
                {
                    "name": "Виртуоз",
                    "image": "2020_Tb_Virtuoso_01_ochre.jpg"
                }
            ]
        },
        {
            "name": "Светильники",

        },
        {
            "name": "NEO",
            "items": [

                {
                    "name": "6,7,8,9 футов / светлые",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "6,7,8,9 футов / темные",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "10,11,12 футов / светлые",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "10,11,12 футов / темные",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "«High-Style»",
                    "image": "%D1%81%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_High-Style_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.png"
                }
            ]
        },
        {
            "name": "Evolution",
            "items": [

                {
                    "name": "EVOLUTION 6,7,8,9 футов /пвх",
                    "image": "6_8_Evolution_pvh.jpg"
                },
                {
                    "name": "EVOLUTION 6,7,8,9 футов /дерево",
                    "image": "6_8_Evolution_wood.jpg"
                },
                {
                    "name": "«High-tech»",
                    "image": "10_12_Evolution_pvh.jpg"
                },
                {
                    "name": "EVOLUTION 10,11,12 футов /пвх",
                    "image": "10_12_Evolution_pvh.jpg"
                },
                {
                    "name": "«Экзотик»",
                    "image": "Evolution_%D0%AD%D0%BA%D0%B7%D0%BE%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "EVOLUTION 10,11,12 футов /дерево",
                    "image": "10_12_Evolution_wood.jpg"
                },
                {
                    "name": "«Охота»",
                    "image": "Evolution_Ohota_00.jpg"
                },
                {
                    "name": "«Гроссмейстер»",
                    "image": "Evolution_Grandmaster_01.jpg"
                }
            ]
        },
        {
            "name": "Лофт",
            "items": [

                {
                    "name": "«Лофт» / 6,7,8,9 футов ",
                    "image": "%D0%9B%D0%9E%D0%A4%D0%A2_6-9_%D1%84%D1%82_00.jpg"
                }
            ]
        },
        {
            "name": "Startbilliards",
            "items": [

                {
                    "name": "1 плафон",
                    "image": "01_1.jpg"
                },
                {
                    "name": "1 плафон, хром",
                    "image": "03_1.jpg"
                },
                {
                    "name": "1 плафон, золото",
                    "image": "02_1.jpg"
                },
                {
                    "name": "2 плафона",
                    "image": "01_01_2.jpg"
                },
                {
                    "name": "2 плафона, зеленый/золото",
                    "image": "02_01_2.jpg"
                },
                {
                    "name": "2 плафона, золото/хром",
                    "image": "03_02_2.jpg"
                },
                {
                    "name": "2 плафона,хром/хром",
                    "image": "03_03_2.jpg"
                },
                {
                    "name": "3 плафона",
                    "image": "01_01_3.jpg"
                }
            ]
        },
        {
            "name": "Аристократ-Люкс",
            "items": [

                {
                    "name": "3 плафона",
                    "image": "3_ARISTOKRAT_%D0%9B%D0%AE%D0%9A%D0%A1_00.jpg"
                },
                {
                    "name": "4 плафона",
                    "image": "4_ARISTOKRAT_%D0%9B%D0%AE%D0%9A%D0%A1_00.jpg"
                },
                {
                    "name": "5 плафонов",
                    "image": "5_ARISTOKRAT_%D0%9B%D0%AE%D0%9A%D0%A1_00.jpg"
                }
            ]
        },
        {
            "name": "Аристократ",
            "items": [

                {
                    "name": "3 плафона",
                    "image": "3_ARISTOKRAT_00.jpg"
                },
                {
                    "name": "4 плафона",
                    "image": "4_ARISTOKRAT_00.jpg"
                },
                {
                    "name": "5 плафонов",
                    "image": "5_ARISTOKRAT_00.jpg"
                }
            ]
        },
        {
            "name": "Классика",
            "items": [

                {
                    "name": "3 плафона/металл",
                    "image": "3_KLASSIKA_00.jpg"
                },
                {
                    "name": "4 плафона/металл",
                    "image": "4_KLASSIKA_00.jpg"
                },
                {
                    "name": "3 плафона/дерево",
                    "image": "3_KLASSIKA_00.jpg"
                },
                {
                    "name": "6 плафонов/металл",
                    "image": "6_KLASSIKA_00.jpg"
                },
                {
                    "name": "4 плафона/дерево",
                    "image": "4_KLASSIKA_00.jpg"
                },
                {
                    "name": "6 плафонов/дерево",
                    "image": "6_KLASSIKA_00.jpg"
                }
            ]
        },
        {
            "name": "Эксклюзивные светильники",
            "items": [

                {
                    "name": "«Ливерпуль-Люкс»",
                    "image": "01_Lamp-Liverpool-lux.jpg"
                },
                {
                    "name": "«Ливерпуль»",
                    "image": "02_Lamp-Liverpool-lux.jpg"
                },
                {
                    "name": "«Барон-Люкс»",
                    "image": "2000_Aristokrat_Lux_chameleon.jpg"
                },
                {
                    "name": "«High-tech»",
                    "image": "10_12_Evolution_pvh.jpg"
                },
                {
                    "name": "«Экзотик»",
                    "image": "Evolution_%D0%AD%D0%BA%D0%B7%D0%BE%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "«Охота»",
                    "image": "Evolution_Ohota_00.jpg"
                },
                {
                    "name": "«High-Style»",
                    "image": "%D1%81%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_High-Style_%D0%BF%D1%80%D0%B5%D0%B2%D1%8C%D1%8E.png"
                },
                {
                    "name": "«Президент»",
                    "image": "01_Lamp-President.jpg"
                }
            ]
        },
        {
            "name": "Декоративное освещение",

        },
        {
            "name": "Для столов 6 футов",
            "items": [

                {
                    "name": "2 плафона",
                    "image": "01_01_2.jpg"
                },
                {
                    "name": "2 плафона, зеленый/золото",
                    "image": "02_01_2.jpg"
                },
                {
                    "name": "2 плафона,хром/хром",
                    "image": "03_03_2.jpg"
                },
                {
                    "name": "2 плафона, золото/хром",
                    "image": "03_02_2.jpg"
                },
                {
                    "name": "EVOLUTION 6,7,8,9 футов /пвх",
                    "image": "6_8_Evolution_pvh.jpg"
                },
                {
                    "name": "6,7,8,9 футов / темные",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "6,7,8,9 футов / светлые",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "«Лофт» / 6,7,8,9 футов ",
                    "image": "%D0%9B%D0%9E%D0%A4%D0%A2_6-9_%D1%84%D1%82_00.jpg"
                }
            ]
        },
        {
            "name": " Для столов 7 футов",
            "items": [

                {
                    "name": "3 плафона",
                    "image": "01_01_3.jpg"
                },
                {
                    "name": "3 плафона, зеленый/золото",
                    "image": "02_01_3.jpg"
                },
                {
                    "name": "3 плафона",
                    "image": "3_ARISTOKRAT_00.jpg"
                },
                {
                    "name": "3 плафона, хром/хром",
                    "image": "03_03_3.jpg"
                },
                {
                    "name": "3 плафона, золото/хром",
                    "image": "03_02_3.jpg"
                },
                {
                    "name": "EVOLUTION 6,7,8,9 футов /пвх",
                    "image": "6_8_Evolution_pvh.jpg"
                },
                {
                    "name": "6,7,8,9 футов / светлые",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "6,7,8,9 футов / темные",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%82%D0%B8%D0%BA_00.jpg"
                }
            ]
        },
        {
            "name": "Для столов 8 футов",
            "items": [

                {
                    "name": "3 плафона",
                    "image": "01_01_3.jpg"
                },
                {
                    "name": "3 плафона, зеленый/золото",
                    "image": "02_01_3.jpg"
                },
                {
                    "name": "3 плафона",
                    "image": "3_ARISTOKRAT_00.jpg"
                },
                {
                    "name": "3 плафона, хром/хром",
                    "image": "03_03_3.jpg"
                },
                {
                    "name": "3 плафона, золото/хром",
                    "image": "03_02_3.jpg"
                },
                {
                    "name": "4 плафона",
                    "image": "01_01_4.jpg"
                },
                {
                    "name": "4 плафона, зеленый/золото",
                    "image": "02_01_4.jpg"
                },
                {
                    "name": "4 плафона, золото/хром",
                    "image": "03_02_4.jpg"
                }
            ]
        },
        {
            "name": "Для столов 9 футов",
            "items": [

                {
                    "name": "4 плафона",
                    "image": "01_01_4.jpg"
                },
                {
                    "name": "4 плафона, зеленый/золото",
                    "image": "02_01_4.jpg"
                },
                {
                    "name": "4 плафона, хром/хром",
                    "image": "03_03_4.jpg"
                },
                {
                    "name": "4 плафона, золото/хром",
                    "image": "03_02_4.jpg"
                },
                {
                    "name": "EVOLUTION 6,7,8,9 футов /пвх",
                    "image": "6_8_Evolution_pvh.jpg"
                },
                {
                    "name": "6,7,8,9 футов / светлые",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "6,7,8,9 футов / темные",
                    "image": "NEO_6_9_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B83_%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "4 плафона",
                    "image": "4_ARISTOKRAT_00.jpg"
                }
            ]
        },
        {
            "name": "Для столов 10 футов",
            "items": [

                {
                    "name": "5 плафонов",
                    "image": "01_01_5.jpg"
                },
                {
                    "name": "5 плафонов, зеленый/золото",
                    "image": "02_01_5.jpg"
                },
                {
                    "name": "5 плафонов, хром/хром",
                    "image": "03_03_5.jpg"
                },
                {
                    "name": "5 плафонов, золото/хром",
                    "image": "03_02_5.jpg"
                },
                {
                    "name": "4 плафона",
                    "image": "4_ARISTOKRAT_00.jpg"
                },
                {
                    "name": "10,11,12 футов / светлые",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "10,11,12 футов / темные",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "4 плафона",
                    "image": "4_ARISTOKRAT_%D0%9B%D0%AE%D0%9A%D0%A1_00.jpg"
                }
            ]
        },
        {
            "name": "Для столов 11 футов",
            "items": [

                {
                    "name": "6 плафонов",
                    "image": "01_01_6.jpg"
                },
                {
                    "name": "6 плафонов, зеленый/золото",
                    "image": "02_01_6.jpg"
                },
                {
                    "name": "6 плафонов, хром/хром",
                    "image": "03_03_6.jpg"
                },
                {
                    "name": "6 плафонов, золото/хром",
                    "image": "03_02_6.jpg"
                },
                {
                    "name": "10,11,12 футов / светлые",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "10,11,12 футов / темные",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "5 плафонов",
                    "image": "5_ARISTOKRAT_00.jpg"
                },
                {
                    "name": "«Ливерпуль-Люкс»",
                    "image": "01_Lamp-Liverpool-lux.jpg"
                }
            ]
        },
        {
            "name": "Для столов 12 футов",
            "items": [

                {
                    "name": "6 плафонов",
                    "image": "01_01_6.jpg"
                },
                {
                    "name": "6 плафонов, зеленый/золото",
                    "image": "02_01_6.jpg"
                },
                {
                    "name": "6 плафонов, хром/хром",
                    "image": "03_03_6.jpg"
                },
                {
                    "name": "6 плафонов, золото/хром",
                    "image": "03_02_6.jpg"
                },
                {
                    "name": "10,11,12 футов / светлые",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_00.jpg"
                },
                {
                    "name": "10,11,12 футов / темные",
                    "image": "NEO_10_12_%D1%84%D1%82_%D1%81%D0%B5%D0%BA%D1%86%D0%B8%D0%B84_%D1%82%D0%B8%D0%BA_00.jpg"
                },
                {
                    "name": "5 плафонов",
                    "image": "5_ARISTOKRAT_00.jpg"
                },
                {
                    "name": "«Ливерпуль-Люкс»",
                    "image": "01_Lamp-Liverpool-lux.jpg"
                }
            ]
        },
        {
            "name": "Кии",

        },
        {
            "name": "Пирамида",
            "items": [

                {
                    "name": "Кий Клубный 0-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-6",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-6-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-2-%D0%A0_01.jpg"
                }
            ]
        },
        {
            "name": "Пул",
            "items": [

                {
                    "name": "Кий Клубный 0-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-5",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-5-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-2-%D0%A0_01.jpg"
                }
            ]
        },
        {
            "name": "Снукер",
            "items": [

                {
                    "name": "Кий Якубович Ричард",
                    "image": "%D0%A0%D0%B8%D1%87%D0%B0%D1%80%D0%B4_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Людовик",
                    "image": "%D0%9B%D1%8E%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                }
            ]
        },
        {
            "name": "Двусоставные",
            "items": [

                {
                    "name": "Кий Любительский 2-7",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-7-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Любительский 2-1",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-1-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Любительский 2-4",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-4-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Любительский 2-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-2-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Любительский 2-3",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-3-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Любительский 2-6",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-6-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Любительский 2-5",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-5-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий «Дракон» 2-5",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9B%D1%8E%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9-2-5-%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD_01.jpg"
                }
            ]
        },
        {
            "name": "Односоставные",
            "items": [

                {
                    "name": "Кий Клубный 0-1",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-2-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-1",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-1-%D0%A0_01.jpg"
                }
            ]
        },
        {
            "name": "C удлинителем",
            "items": [

                {
                    "name": "Кий Рябова 10-1У",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-10-1-%D0%A3_01.jpg"
                },
                {
                    "name": "Кий Рябова 11-5У",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-11-5-%D0%A3_01.jpg"
                },
                {
                    "name": "Кий Рябова 11-6У",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-11-6-%D0%A3_01.jpg"
                },
                {
                    "name": "Кий Якубович Ястреб",
                    "image": "%D0%AF%D1%81%D1%82%D1%80%D0%B5%D0%B1_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Рябова 10-6У",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-10-6-%D0%A3_01.jpg"
                },
                {
                    "name": "Кий Рябова 10-5У",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-10-5-%D0%A3_01.jpg"
                },
                {
                    "name": "Кий Якубович Выстрел",
                    "image": "%D0%92%D1%8B%D1%81%D1%82%D1%80%D0%B5%D0%BB_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Рябова 11-8У",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-11-8-%D0%A3_01.jpg"
                }
            ]
        },
        {
            "name": "Кии Мастера Рябова",
            "items": [

                {
                    "name": "Кий Рябова 11-10-РС",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-11-10_01.jpg"
                },
                {
                    "name": "Кий Рябова 16-5-РС",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-16-5-%D0%A0%D0%A1_01.jpg"
                },
                {
                    "name": "Кий Рябова 11-11-РС",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-11-11_01.jpg"
                },
                {
                    "name": "Кий Рябова 14-1-РС",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-14-1-%D0%A0%D0%A1_01.jpg"
                },
                {
                    "name": "Кий Рябова 16-3-РС",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-16-3-%D0%A0%D0%A1_01.jpg"
                },
                {
                    "name": "Кий Рябова 11-9-РС",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-11-9_01.jpg"
                },
                {
                    "name": "Кий Рябова 11-1-РС",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-11-1_01.jpg"
                },
                {
                    "name": "Кий Рябова 17-2-РС ",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A0%D1%8F%D0%B1%D0%BE%D0%B2%D0%B0-17-2-%D0%A0%D0%A1_01.jpg"
                }
            ]
        },
        {
            "name": "Кии Мастера Якубович",
            "items": [

                {
                    "name": "Кий Якубович Ричард",
                    "image": "%D0%A0%D0%B8%D1%87%D0%B0%D1%80%D0%B4_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Людовик",
                    "image": "%D0%9B%D1%8E%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Янтарь",
                    "image": "%D0%AF%D0%BD%D1%82%D0%B0%D1%80%D1%8C_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Агат",
                    "image": "%D0%90%D0%B3%D0%B0%D1%82_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Топаз",
                    "image": "%D0%A2%D0%BE%D0%BF%D0%B0%D0%B7_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Изумруд",
                    "image": "%D0%98%D0%B7%D1%83%D0%BC%D1%80%D1%83%D0%B4_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Коралл",
                    "image": "%D0%9A%D0%BE%D1%80%D0%B0%D0%BB%D0%BB_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                },
                {
                    "name": "Кий Якубович Сапфир",
                    "image": "%D0%A1%D0%B0%D0%BF%D1%84%D0%B8%D1%80_%D0%AF%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D0%B8%D1%87_01.jpg"
                }
            ]
        },
        {
            "name": "Кии РУССКИЙ",
            "items": [

                {
                    "name": "Кий Классика 11-10",
                    "image": "%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0-11-10-%D0%A0-%D0%A0%D0%9A_01.jpg"
                },
                {
                    "name": "Кий Классика 16-5",
                    "image": "%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0-16-5-%D0%A0-%D0%A0%D0%9A-01.jpg"
                },
                {
                    "name": "Кий Классика 11-11",
                    "image": "%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0-11-11-%D0%A0-%D0%A0%D0%9A_01.jpg"
                },
                {
                    "name": "Кий Орнамент 16-5-Р",
                    "image": "%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0-16-5-%D0%A0-%D0%A0%D0%9A-%D0%9E%D1%80%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%82-01.jpg"
                },
                {
                    "name": "Кий Дракон 16-5-Р",
                    "image": "%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0-16-5-%D0%A0-%D0%A0%D0%9A-%D0%94%D1%80%D0%B0%D0%BA%D0%BE%D0%BD-01.jpg"
                },
                {
                    "name": "Кий Практик 14-1",
                    "image": "%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA-14-1-%D0%A0-%D0%A0%D0%9A-01.jpg"
                },
                {
                    "name": "Кий Классика 16-3",
                    "image": "%D0%9A%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D0%BA%D0%B0-16-3-%D0%A0-%D0%A0%D0%9A-01.jpg"
                },
                {
                    "name": "Кий Переплет 16-3-Р",
                    "image": "16-3-%D0%A0-%D0%A0%D0%9A-%D0%9F%D0%B5%D1%80%D0%B5%D0%BF%D0%BB%D0%B5%D1%82-01.jpg"
                }
            ]
        },
        {
            "name": "Кии Vortex",
            "items": [

                {
                    "name": "Кий Интегро",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%BE-1%D0%A0%D0%A1_Vortex_01.jpg"
                },
                {
                    "name": "Кий Шахматы светлые",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B_%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8B%D0%B9_2%D0%A0%D0%A1(%D0%A0%D0%9A)_01.jpg"
                },
                {
                    "name": "Кий Шахматы темные",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%A8%D0%B0%D1%85%D0%BC%D0%B0%D1%82%D1%8B_2%D0%A0%D0%A1_Vortex_01.jpg"
                },
                {
                    "name": "Кий Пламя",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9F%D0%BB%D0%B0%D0%BC%D1%8F_2%D0%A0%D0%A1_Vortex_01.jpg"
                },
                {
                    "name": "Кий Венец",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%92%D0%B5%D0%BD%D0%B5%D1%86_2%D0%A0%D0%A1_Vortex_01.jpg"
                },
                {
                    "name": "Кий Нептун темный",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9D%D0%B5%D0%BF%D1%82%D1%83%D0%BD-%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_2%D0%A0%D0%A1_Vortex_01.jpg"
                },
                {
                    "name": "Кий Паук черный граб, красный",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9F%D0%B0%D1%83%D0%BA-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B3%D1%80%D0%B0%D0%B1_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_2%D0%A0%D0%A1(%D0%A0%D0%9A)_01.jpg"
                },
                {
                    "name": "Кий Паук черный граб, синий",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9F%D0%B0%D1%83%D0%BA-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9-%D0%B3%D1%80%D0%B0%D0%B1_%D1%81%D0%B8%D0%BD%D0%B8%D0%B9_2%D0%A0%D0%A1(%D0%A0%D0%9A)_01.jpg"
                }
            ]
        },
        {
            "name": "Кии Dinamika Billiards",
            "items": [

                {
                    "name": "Кий Клубный 0-1",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, ромб",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%80%D0%BE%D0%BC%D0%B1_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-1-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-1-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Клубный 0-2-Р, тюльпан",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%9A%D0%BB%D1%83%D0%B1%D0%BD%D1%8B%D0%B9-0-2-%D0%A0_%D1%82%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-2",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-2-%D0%A0_01.jpg"
                },
                {
                    "name": "Кий Звездочка 1-3",
                    "image": "%D0%9A%D0%B8%D0%B9-%D0%97%D0%B2%D0%B5%D0%B7%D0%B4%D0%BE%D1%87%D0%BA%D0%B0_1-3-%D0%A0_01.jpg"
                }
            ]
        },
        {
            "name": "Древко",
            "items": [

                {
                    "name": "Древко для мостика D-1",
                    "image": "%D0%94%D1%80%D0%B5%D0%B2%D0%BA%D0%BE_%D0%BE%D0%B4%D0%BD%D0%BE%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5.jpg"
                },
                {
                    "name": "Древко для мостика D-2",
                    "image": "%D0%94%D1%80%D0%B5%D0%B2%D0%BA%D0%BE_%D0%BE%D0%B4%D0%BD%D0%BE%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5.jpg"
                },
                {
                    "name": "Древко для мостика D-3",
                    "image": "%D0%94%D1%80%D0%B5%D0%B2%D0%BA%D0%BE_%D0%B4%D0%B2%D1%83%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5.jpg"
                },
                {
                    "name": "Древко для мостика D-4",
                    "image": "%D0%94%D1%80%D0%B5%D0%B2%D0%BA%D0%BE_%D0%B4%D0%B2%D1%83%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5.jpg"
                }
            ]
        },
        {
            "name": "Киевницы",

        },
        {
            "name": "Стандартные",
            "items": [

                {
                    "name": "К-10 настенная",
                    "image": "1a20436f1e1efcb14ffea4974b4effb9.jpg"
                },
                {
                    "name": "К-9-1 настенная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-9-1_02.jpg"
                },
                {
                    "name": "К-9-3 настенная",
                    "image": "2018_%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-9-3_02.jpg"
                },
                {
                    "name": "К-9-2 настенная",
                    "image": "2018_%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-9-2_02.jpg"
                },
                {
                    "name": "«Веста» настенная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%92%D0%B5%D1%81%D1%82%D0%B0_02.jpg"
                },
                {
                    "name": "К-15 настенная",
                    "image": "478d165f14f6c23a94fa48befe4654dd.jpg"
                },
                {
                    "name": "К-18 настенная",
                    "image": "%D0%9A-18.png"
                },
                {
                    "name": "K-7 настенная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-7_02.jpg"
                }
            ]
        },
        {
            "name": "Эксклюзивные",
            "items": [

                {
                    "name": "Киевница «Барон-Люкс»    ",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-7_02.jpg"
                },
                {
                    "name": "К-19 «Экзотик»",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-19_%D1%8D%D0%BA%D0%B7%D0%BE%D1%82%D0%B8%D0%BA_02.jpg"
                },
                {
                    "name": "К-2 «Лео»",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0_K_2_%D0%9B%D0%B5%D0%BE.jpg"
                },
                {
                    "name": "К-2 «Лео II»",
                    "image": "%D0%9B%D0%B5%D0%BE%202.png"
                },
                {
                    "name": "КБ-1 «Венеция»",
                    "image": "cabinet-Venice_02.jpg"
                },
                {
                    "name": "«Охота» ",
                    "image": "CueRack_Ohota_02.jpg"
                },
                {
                    "name": "КР «Президент»",
                    "image": "bf88abb9928015544944883f1f9fb015.jpg"
                },
                {
                    "name": "КР «Ливерпуль-Люкс»",
                    "image": "CueRack-Liverpool-Lux.jpg"
                }
            ]
        },
        {
            "name": "Настенные",
            "items": [

                {
                    "name": "К-10 настенная",
                    "image": "1a20436f1e1efcb14ffea4974b4effb9.jpg"
                },
                {
                    "name": "К-9-1 настенная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-9-1_02.jpg"
                },
                {
                    "name": "К-9-3 настенная",
                    "image": "2018_%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-9-3_02.jpg"
                },
                {
                    "name": "К-9-2 настенная",
                    "image": "2018_%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-9-2_02.jpg"
                },
                {
                    "name": "«Веста» настенная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%92%D0%B5%D1%81%D1%82%D0%B0_02.jpg"
                },
                {
                    "name": "К-15 настенная",
                    "image": "478d165f14f6c23a94fa48befe4654dd.jpg"
                },
                {
                    "name": "К-18 настенная",
                    "image": "%D0%9A-18.png"
                },
                {
                    "name": "K-7 настенная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-7_02.jpg"
                }
            ]
        },
        {
            "name": "Напольные",
            "items": [

                {
                    "name": "К-6 напольная",
                    "image": "19a7367dd694544e17be68c5a01d0b7e.jpg"
                },
                {
                    "name": "К-8 напольная",
                    "image": "ada1a5e64e0bd0c56cc5012d6cd45e33.jpg"
                },
                {
                    "name": "К-4 напольная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A-4_02.jpg"
                },
                {
                    "name": "К-1 напольная",
                    "image": "7add2103bb68ff35264679427cd9213e.jpg"
                },
                {
                    "name": "КБ-1 «Венеция»",
                    "image": "cabinet-Venice_02.jpg"
                },
                {
                    "name": "К-21 с часами напольная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0_%D0%9A21_%D1%81_%D1%87%D0%B0%D1%81%D0%B0%D0%BC%D0%B8_02.jpg"
                },
                {
                    "name": "КР-1 напольная",
                    "image": "%D0%9A%D0%B8%D0%B5%D0%B2%D0%BD%D0%B8%D1%86%D0%B0-%D0%9A%D0%A0-1_02.jpg"
                },
                {
                    "name": "«Охота» ",
                    "image": "CueRack_Ohota_02.jpg"
                }
            ]
        },
        {
            "name": "Полки для шаров",
            "items": [

                {
                    "name": "Полка для шаров П-2",
                    "image": "%D0%9F%D0%BE%D0%BB%D0%BE%D1%87%D0%BA%D0%B0-%D0%9F-2_02.jpg"
                },
                {
                    "name": "Полка для шаров П-1",
                    "image": "%D0%9F%D0%BE%D0%BB%D0%BE%D1%87%D0%BA%D0%B0-%D0%9F-1_02.jpg"
                },
                {
                    "name": "Полка для шаров П-3",
                    "image": "%D0%9F3.jpg"
                },
                {
                    "name": "Полка \"Турнирная\"",
                    "image": "%D0%9F%D0%BE%D0%BB%D0%BA%D0%B0_%D0%A2%D1%83%D1%80%D0%BD%D0%B8%D1%80%D0%BD%D0%B0%D1%8F.png"
                },
                {
                    "name": "Полка для шаров П-4",
                    "image": "800_%D0%9F%D0%BE%D0%BB%D0%BE%D1%87%D0%BA%D0%B0_%D0%B4%D0%BE%D1%81%D0%BA%D0%B0_%D0%9B%D0%B8%D0%B2%D0%B5%D1%80%D0%BF%D1%83%D0%BB%D1%8C.jpg"
                },
                {
                    "name": "Полка для шаров П-5",
                    "image": "%D0%9F%D0%BE%D0%BB%D0%BE%D1%87%D0%BA%D0%B0-%D0%9F-5_02.jpg"
                }
            ]
        },
        {
            "name": "Шары",

        },
        {
            "name": "Start Billiards",
            "items": [

                {
                    "name": "Комплект аксессуаров 38, NBR 3800",
                    "image": "SB_NRB3800_%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82%20%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D0%BE%D0%B2%2038_01.jpg"
                },
                {
                    "name": "Start Billiards Standard 57,2 мм 797405",
                    "image": "Start-Billiards-POL-Standard_01.jpg"
                },
                {
                    "name": "Start Billiards Snooker 52,4 мм",
                    "image": "Start-Billiards-SNOOKER_01.jpg"
                },
                {
                    "name": "Start Billiards Standard 60 мм 797403",
                    "image": "Start-Billiards-RP-Standard_01.jpg"
                },
                {
                    "name": "Start Billiards Premium 57,2 мм 797406",
                    "image": "Start-Billiards-POL-Premium_01.jpg"
                },
                {
                    "name": "Start Billiards Premium 60 мм 797404",
                    "image": "Start-Billiards-RP-Premium_01.jpg"
                },
                {
                    "name": "Start Billiards Standard 68 мм 797401",
                    "image": "Start-Billiards-RP-Standard_01.jpg"
                },
                {
                    "name": "Start Billiards Premium 68 мм 797402",
                    "image": "Start-Billiards-RP-Premium_01.jpg"
                }
            ]
        },
        {
            "name": "TAO-MI",
            "items": [

                {
                    "name": "TAO-MI 67 мм BBTA67-RC",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_red_01.jpg"
                },
                {
                    "name": "TAO-MI 67 мм BBTA67-YC",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_yellow_01.jpg"
                },
                {
                    "name": "Биток TAO-MI PROFESSIONAL 67 мм желтый",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D0%B1%D0%B8%D1%82%D0%BE%D0%BA_yellow_01.jpg"
                },
                {
                    "name": "Биток TAO-MI PROFESSIONAL 67 мм бордовый",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D0%B1%D0%B8%D1%82%D0%BE%D0%BA_red_01.jpg"
                },
                {
                    "name": "Шар №15 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_15.jpg"
                },
                {
                    "name": "Шар №14 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_14.jpg"
                },
                {
                    "name": "Шар №13 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_13.jpg"
                },
                {
                    "name": "Шар №12 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_12.jpg"
                }
            ]
        },
        {
            "name": "Dyna | spheres",
            "items": [

                {
                    "name": "Dyna | spheres Silver Snooker Next Gen 52,4 мм BDSSNSI524",
                    "image": "Dyna_spheres-Silver-Snooker-52,4_00.jpg"
                },
                {
                    "name": "Dyna | spheres Bronze Pool Next Gen 57,2 мм BDSPOBR572US",
                    "image": "Dyna_spheres-Bronze-Pool-57,2-%D0%BC%D0%BC_00.jpg"
                },
                {
                    "name": "Dyna | spheres Tungsten Pool Next Gen 57,2 мм BDSPOTU572US",
                    "image": "Dyna_spheres-Tungsten-Pool-57,2-%D0%BC%D0%BC_00.jpg"
                },
                {
                    "name": "Dyna | spheres Prime Pyramid Next Gen 68 мм BDSPYBR680Y",
                    "image": "00_Yel_Dyna_spheres-Prime-Pyramid-Next-Gen_67_68_1800x1800.jpg"
                },
                {
                    "name": "Dyna | spheres Prime Pyramid Next Gen 68 мм BDSPYBR680R",
                    "image": "00_Red_Dyna_spheres-Prime-Pyramid-Next-Gen_67_68_1800x1800.jpg"
                },
                {
                    "name": "Dyna | spheres Prime Pyramid Next Gen 67 мм BDSPYBR670Y",
                    "image": "00_Yel_Dyna_spheres-Prime-Pyramid-Next-Gen_67_68_1800x1800.jpg"
                },
                {
                    "name": "Dyna | spheres Prime Pyramid Next Gen 67 мм BDSPYBR670R",
                    "image": "00_Red_Dyna_spheres-Prime-Pyramid-Next-Gen_67_68_1800x1800.jpg"
                },
                {
                    "name": "Шар-биток Dyna | spheres Prime Pyramid Next Gen 68 мм BDSPYBR68Y ",
                    "image": "Dyna_spheres-%D0%91%D0%B8%D1%82%D0%BE%D0%BA-Yel-68_67_00.jpg"
                }
            ]
        },
        {
            "name": "Пирамида",
            "items": [

                {
                    "name": "Шар №10 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_10.jpg"
                },
                {
                    "name": "Шар №9 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_9.jpg"
                },
                {
                    "name": "Шар №11 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_11.jpg"
                },
                {
                    "name": "Шар №12 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_12.jpg"
                },
                {
                    "name": "Шар №14 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_14.jpg"
                },
                {
                    "name": "Шар №13 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_13.jpg"
                },
                {
                    "name": "Шар №8 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_8.jpg"
                },
                {
                    "name": "Шар №7 TAO-MI PROFESSIONAL 67 мм",
                    "image": "TAO-MI_PROFESSIONAL-BILLIARD-BALLS_67mm_%D1%88%D0%B0%D1%80_7.jpg"
                }
            ]
        },
        {
            "name": "Пул",
            "items": [

                {
                    "name": "Start Billiards Standard 57,2 мм 797405",
                    "image": "Start-Billiards-POL-Standard_01.jpg"
                },
                {
                    "name": "Start Billiards Premium 57,2 мм 797406",
                    "image": "Start-Billiards-POL-Premium_01.jpg"
                },
                {
                    "name": "Комплект аксессуаров ПУЛ",
                    "image": "Start-Billiards_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82_%D0%9F%D0%A3%D0%9B_01.jpg"
                },
                {
                    "name": "Dyna | spheres Tungsten Pool Next Gen 57,2 мм BDSPOTU572US",
                    "image": "Dyna_spheres-Tungsten-Pool-57,2-%D0%BC%D0%BC_00.jpg"
                },
                {
                    "name": "Dyna | spheres Bronze Pool Next Gen 57,2 мм BDSPOBR572US",
                    "image": "Dyna_spheres-Bronze-Pool-57,2-%D0%BC%D0%BC_00.jpg"
                }
            ]
        },
        {
            "name": "Снукер",
            "items": [

                {
                    "name": "Start Billiards Snooker 52,4 мм",
                    "image": "Start-Billiards-SNOOKER_01.jpg"
                },
                {
                    "name": "Dyna | spheres Silver Snooker Next Gen 52,4 мм BDSSNSI524",
                    "image": "Dyna_spheres-Silver-Snooker-52,4_00.jpg"
                }
            ]
        },
        {
            "name": "Аксессуары для стола",

        },
        {
            "name": "Чехлы для столов",
            "items": [

                {
                    "name": "Чехол 7фт /7-1",
                    "image": "12_1-%D0%9B_%D0%91%D0%9B_Cover.jpg"
                },
                {
                    "name": "Чехол 8фт /8-1",
                    "image": "12_1-%D0%9B_%D0%91%D0%9B_Cover.jpg"
                },
                {
                    "name": "Чехол 9фт /9-1",
                    "image": "12_1-%D0%9B_%D0%91%D0%9B_Cover.jpg"
                },
                {
                    "name": "Чехол 10фт /10-1",
                    "image": "12_1-%D0%9B_%D0%91%D0%9B_Cover.jpg"
                },
                {
                    "name": "Чехол 7фт /7-2",
                    "image": "12_2-%D0%9B_%D0%91%D0%9B_Cover_01.jpg"
                },
                {
                    "name": "Чехол 11фт /11-1",
                    "image": "12_1-%D0%9B_%D0%91%D0%9B_Cover.jpg"
                },
                {
                    "name": "Чехол 8фт /8-2",
                    "image": "12_2-%D0%9B_%D0%91%D0%9B_Cover_01.jpg"
                },
                {
                    "name": "Чехол 12фт /12-1",
                    "image": "12_1-%D0%9B_%D0%91%D0%9B_Cover.jpg"
                }
            ]
        },
        {
            "name": "Столешницы для столов",
            "items": [

                {
                    "name": "Столешница для стола 7 футов",
                    "image": "01_Tb_cover.jpg"
                },
                {
                    "name": "Столешница для стола 8 футов",
                    "image": "01_Tb_cover.jpg"
                },
                {
                    "name": "Столешница для стола 9 футов",
                    "image": "01_Tb_cover.jpg"
                },
                {
                    "name": "Столешница для стола 10 футов",
                    "image": "01_Tb_cover.jpg"
                },
                {
                    "name": "Столешница для стола 11 футов",
                    "image": "01_Tb_cover.jpg"
                },
                {
                    "name": "Столешница для стола 12 футов",
                    "image": "01_Tb_cover.jpg"
                }
            ]
        },
        {
            "name": "Треугольники",
            "items": [

                {
                    "name": "Треугольник ясень Т-2",
                    "image": "%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-%D1%8F%D1%81%D0%B5%D0%BD%D1%8C-%D0%A2-2.jpg"
                },
                {
                    "name": "Треугольник Снукер",
                    "image": "loxygn8isxknuzunf3377jcn48ndwo0e.png"
                },
                {
                    "name": "Треугольник сосна Т-2-1",
                    "image": "%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-%D1%81%D0%BE%D1%81%D0%BD%D0%B0-%D0%A2-2-1.jpg"
                },
                {
                    "name": "Треугольник «Барон» ",
                    "image": "%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-%D0%91%D0%B0%D1%80%D0%BE%D0%BD.jpg"
                },
                {
                    "name": "Треугольник «Лофт»",
                    "image": "%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA-%D0%9B%D0%BE%D1%84%D1%82.jpg"
                }
            ]
        },
        {
            "name": "Стулья бильярдные",
            "items": [

                {
                    "name": "Табурет «Президент»",
                    "image": "%D0%A2%D0%B0%D0%B1%D1%83%D1%80%D0%B5%D1%82_%D0%BC%D1%8F%D0%B3%D0%BA%D0%B8%D0%B9.jpg"
                },
                {
                    "name": "Табурет высокий",
                    "image": "%D0%A2%D0%B0%D0%B1%D1%83%D1%80%D0%B5%D1%82_%D0%BC%D1%8F%D0%B3%D0%BA%D0%B8%D0%B9.jpg"
                },
                {
                    "name": "Табурет высокий",
                    "image": "%D0%A2%D0%B0%D0%B1%D1%83%D1%80%D0%B5%D1%82_%D0%B6%D0%B5%D1%81%D1%82%D0%BA%D0%B8%D0%B9.jpg"
                },
                {
                    "name": "Стул «Честер»",
                    "image": "%D0%A1%D1%82%D1%83%D0%BB_%D0%A7%D0%B5%D1%81%D1%82%D0%B5%D1%80_01.jpg"
                },
                {
                    "name": "Стул «Ливерпуль»",
                    "image": "%D0%A1%D1%82%D1%83%D0%BB_%D0%9B%D0%B8%D0%B2%D0%B5%D1%80%D0%BF%D1%83%D0%BB%D1%8C.jpg"
                },
                {
                    "name": "Стул «Ливерпуль-Люкс»",
                    "image": "%D0%A1%D1%82%D1%83%D0%BB_%D0%9B%D0%B8%D0%B2%D0%B5%D1%80%D0%BF%D1%83%D0%BB%D1%8C_%D0%BB%D1%8E%D0%BA%D1%81.jpg"
                },
                {
                    "name": "Стул «Президент»",
                    "image": "%D0%A1%D1%82%D1%83%D0%BB_%D0%9F%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82.jpg"
                },
                {
                    "name": "Стул бильярдный",
                    "image": "%D0%A1%D1%82%D1%83%D0%BB_%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%B9.jpg"
                }
            ]
        },
        {
            "name": "Средства ухода",
            "items": [

                {
                    "name": "Щетка для сукна односторонняя с ручкой 21см",
                    "image": "%D0%A9%D0%B5%D1%82%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%81%D1%83%D0%BA%D0%BD%D0%B0-%D0%BE%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%BD%D1%8F%D1%8F-%D1%81-%D1%80%D1%83%D1%87%D0%BA%D0%BE%D0%B9-21%D1%81%D0%BC_01.jpg"
                },
                {
                    "name": "Средство для чистки луз из латуни",
                    "image": "%D1%81%D1%82%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%BB%D1%83%D0%B7_01.jpg"
                },
                {
                    "name": "Щетка для сукна односторонняя 23 см SB08-016",
                    "image": "SB050_%D1%89%D0%B5%D1%82%D0%BA%D0%B0_%D0%BD%D0%B5%D0%B9%D0%BB%D0%BE%D0%BD_03.jpg"
                },
                {
                    "name": "Универсальный очиститель для бильярдного сукна",
                    "image": "%D1%81%D1%82%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%81%D1%83%D0%BA%D0%BD%D0%B0_01.jpg"
                },
                {
                    "name": "Универсальный очиститель деревянных поверхностей",
                    "image": "%D1%81%D1%82%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0_01.jpg"
                },
                {
                    "name": "Щетка для сукна односторонняя 27см SB08-017",
                    "image": "SB050_%D1%89%D0%B5%D1%82%D0%BA%D0%B0_%D0%BD%D0%B5%D0%B9%D0%BB%D0%BE%D0%BD_02.jpg"
                },
                {
                    "name": "Средство для чистки и полировки бильярдных шаров",
                    "image": "%D1%81%D1%82%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%88%D0%B0%D1%80%D0%BE%D0%B2_01.jpg"
                },
                {
                    "name": "Щетка 30 см SB052",
                    "image": "SB050_%D1%89%D0%B5%D1%82%D0%BA%D0%B0_%D0%BD%D0%B5%D0%B9%D0%BB%D0%BE%D0%BD_01.jpg"
                }
            ]
        },
        {
            "name": "Турнирное оборудование",
            "items": [

                {
                    "name": "Шаблон для замера створа луз",
                    "image": "%D1%82%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%D0%B4%D0%BB%D1%8F%20%D0%BB%D1%83%D0%B7%D1%8B_1.jpg"
                },
                {
                    "name": "Полка \"Турнирная\"",
                    "image": "%D0%9F%D0%BE%D0%BB%D0%BA%D0%B0_%D0%A2%D1%83%D1%80%D0%BD%D0%B8%D1%80%D0%BD%D0%B0%D1%8F.png"
                },
                {
                    "name": "Счетчик \"Турнирный\"",
                    "image": "%D0%A1%D1%87%D0%B5%D1%82%D1%87%D0%B8%D0%BA_%D0%A2%D1%83%D1%80%D0%BD%D0%B8%D1%80%D0%BD%D1%8B%D0%B9.png"
                },
                {
                    "name": "Столик \"Турнирный\" ",
                    "image": "%D0%A1%D1%82%D0%BE%D0%BB%D0%B8%D0%BA_%D0%A2%D1%83%D1%80%D0%BD%D0%B8%D1%80%D0%BD%D1%8B%D0%B9.png"
                }
            ]
        },
        {
            "name": "Системы учета времени",
            "items": [

                {
                    "name": "Поддон под шары, 57, 2 мм",
                    "image": "c204918e690dee89fcddbc1d4ab60212.jpg"
                },
                {
                    "name": "Бокс для шаров, 57-60 мм",
                    "image": "9b62c0a77b280c1a9d5a44fbeec65bb0.jpg"
                },
                {
                    "name": "Контроллер шаров 85024080",
                    "image": "95218f57041728e547332112f0d1c07f.jpg"
                },
                {
                    "name": "Контроллер шаров 85024160",
                    "image": "f69887c101d0f787700ea569bdb166dc.jpg"
                },
                {
                    "name": "Бокс для шаров, 68 мм",
                    "image": "7a19f73bdf626ad6b1119337a7339f75.jpg"
                },
                {
                    "name": "Микро-32 85022320",
                    "image": "93f449dd1859b02b90a6711982af695f.jpg"
                },
                {
                    "name": "ЛайтСмарт ЛС-16",
                    "image": "sistema_kontrolya_igrovogo_vremeni_do_16_stolov_01.jpg"
                },
                {
                    "name": "ЛайтСмарт ЛС-8",
                    "image": "sistema_kontrolya_igrovogo_vremeni_do_16_stolov_01.jpg"
                }
            ]
        },
        {
            "name": "Аксессуары для кия",

        },
        {
            "name": "Мел бильярдный",

        },
        {
            "name": "Наклейки, колпачки для кия",

        },
        {
            "name": "Насадки, удлинители для кия",
            "items": [

                {
                    "name": "Насадка Лось 9651",
                    "image": "%D0%9D%D0%B0%D1%81%D0%B0%D0%B4%D0%BA%D0%B0-%D0%9B%D0%BE%D1%81%D1%8C-9651_01.jpg"
                },
                {
                    "name": "Насадка на кий мост низкий золотой SBQGJ-09",
                    "image": "%D0%9D%D0%B0%D1%81%D0%B0%D0%B4%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%BA%D0%B8%D0%B9-%D0%BC%D0%BE%D1%81%D1%82-%D0%BD%D0%B8%D0%B7%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_01.jpg"
                },
                {
                    "name": "Насадка на кий крест золотой SBCR-1",
                    "image": "%D0%9D%D0%B0%D1%81%D0%B0%D0%B4%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%BA%D0%B8%D0%B9-%D0%BA%D1%80%D0%B5%D1%81%D1%82-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_01.jpg"
                },
                {
                    "name": "Насадка на кий мост высокий золотой SBBRR-1",
                    "image": "%D0%9D%D0%B0%D1%81%D0%B0%D0%B4%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%BA%D0%B8%D0%B9-%D0%BC%D0%BE%D1%81%D1%82-%D0%B2%D1%8B%D1%81%D0%BE%D0%BA%D0%B8%D0%B9-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9_01.jpg"
                },
                {
                    "name": "Держатель для мела кожаный коричневый SB08-055",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B5%D0%BB%D0%B0-%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_01.jpg"
                },
                {
                    "name": "Телескопическое древко с насадкой",
                    "image": "%D0%A2%D0%B5%D0%BB%D0%B5%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%B4%D1%80%D0%B5%D0%B2%D0%BA%D0%BE-%D1%81-%D0%BD%D0%B0%D1%81%D0%B0%D0%B4%D0%BA%D0%BE%D0%B9_01.jpg"
                },
                {
                    "name": "Удлинитель для кия SB048",
                    "image": "SB048_%D1%83%D0%B4%D0%BB%D0%B8%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%BA%D0%B8%D1%8F_02_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE.jpg"
                }
            ]
        },
        {
            "name": "Держатели для кия и мела",
            "items": [

                {
                    "name": "Держатель мела 9559",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D0%BB%D0%B0-9559.jpg"
                },
                {
                    "name": "Держатель мела 9557",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20%D0%BC%D0%B5%D0%BB%D0%B0%209557.png"
                },
                {
                    "name": "Пенал для мела SB020",
                    "image": "BL019_%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D0%BB%D0%B0_red.jpg"
                },
                {
                    "name": "Держатель для кия SB028",
                    "image": "SB028_%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BA%D0%B8%D1%8F_01.jpg"
                },
                {
                    "name": "Держатель для мела пластиковый черный SB08-057",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B5%D0%BB%D0%B0-%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_01.jpg"
                },
                {
                    "name": "Держатель для мела кожаный черный SB08-054",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B5%D0%BB%D0%B0-%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_01.jpg"
                },
                {
                    "name": "Держатель для мела кожаный открытый черный SB08-058",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B5%D0%BB%D0%B0-%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_01.jpg"
                },
                {
                    "name": "Держатель для мела кожаный открытый коричневый SB08-059",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B5%D0%BB%D0%B0-%D0%BA%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B9-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_01.jpg"
                }
            ]
        },
        {
            "name": "Средства ухода за кием",
            "items": [

                {
                    "name": "Абразив сменный для триммера Tweeten",
                    "image": "%D0%90%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B2-%D1%81%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BF%D1%80%D1%8F%D0%BC%D0%BE%D0%B9_01.jpg"
                },
                {
                    "name": "Заточка наклейки для кия красная SB08-045",
                    "image": "%D0%97%D0%B0%D1%82%D0%BE%D1%87%D0%BA%D0%B0-%D0%BD%D0%B0%D0%BA%D0%BB%D0%B5%D0%B9%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%B8%D1%8F-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_01.jpg"
                },
                {
                    "name": "Фиксатор пластиковый для кия Tweeten",
                    "image": "%D0%A4%D0%B8%D0%BA%D1%81%D0%B0%D1%82%D0%BE%D1%80_1.jpg"
                },
                {
                    "name": "Муфта абразивная для чистки кия",
                    "image": "%D0%9C%D1%83%D1%84%D1%82%D0%B0-%D0%B0%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B4%D0%BB%D1%8F-%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B8-%D0%BA%D0%B8%D1%8F_01.jpg"
                },
                {
                    "name": "Абразив сменный для станка Tweeten Rapid Cue Top Sander 1шт.",
                    "image": "%D0%90%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%B2-%D1%81%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_01.jpg"
                },
                {
                    "name": "Заточка наклейки для кия пластиковая черная",
                    "image": "e1da1980-3008-11ed-818f-d6fb22f0579e_db8e4fc6-4b90-11ed-92d2-d6fb22f0579e.jpg"
                },
                {
                    "name": "Средство для кия 45006000",
                    "image": "%D0%A1%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE%20%D0%BF%D0%BE%20%D1%83%D1%85%D0%BE%D0%B4%D1%83%20%D0%B7%D0%B0%20%D0%BA%D0%B8%D0%B5%D0%BC%2045006000.png"
                },
                {
                    "name": "Фиксатор наклейки для кия SB08-042",
                    "image": "%D0%A4%D0%B8%D0%BA%D1%81%D0%B0%D1%82%D0%BE%D1%80-%D0%BD%D0%B0%D0%BA%D0%BB%D0%B5%D0%B9%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%B8%D1%8F_01.jpg"
                }
            ]
        },
        {
            "name": "Аксессуары для игрока",

        },
        {
            "name": "Перчатки бильярдные",
            "items": [

                {
                    "name": "Перчатка Feudor Standard dark blue",
                    "image": "%D0%9F%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D0%B0%D1%8F-Feudor-STANDARD_blue_dark_01.jpg"
                },
                {
                    "name": "Перчатка Feudor Standard black",
                    "image": "%D0%9F%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D0%B0%D1%8F-Feudor-STANDARD_black_01.jpg"
                },
                {
                    "name": "Перчатка Feudor Sport black",
                    "image": "%D0%9F%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D0%B0%D1%8F-Feudor-SPORT_black_01.jpg"
                },
                {
                    "name": "Перчатка Feudor Sport dark blue",
                    "image": "%D0%9F%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D0%B0%D1%8F-Feudor-SPORT_blue_dark_01.jpg"
                },
                {
                    "name": " Перчатка бильярдная Feudor Pro black left",
                    "image": "%D0%9F%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D0%B0%D1%8F-Feudor-PRO_black_01.jpg"
                },
                {
                    "name": " Перчатка бильярдная Feudor Pro black right",
                    "image": "%D0%9F%D0%B5%D1%80%D1%87%D0%B0%D1%82%D0%BA%D0%B0-%D0%B1%D0%B8%D0%BB%D1%8C%D1%8F%D1%80%D0%B4%D0%BD%D0%B0%D1%8F-Feudor-PRO_%D0%BF%D1%80%D0%B0%D0%B2%D0%B0%D1%8F_black_01.jpg"
                }
            ]
        },
        {
            "name": "Часы",
            "items": [

                {
                    "name": "Часы \"Треугольник\" ясень/шпон",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%88%D0%BF%D0%BE%D0%BD_01.jpg"
                },
                {
                    "name": "Часы \"Треугольник\" ясень/сукно",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_%D0%A2%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%81%D1%83%D0%BA%D0%BD%D0%BE_01.jpg"
                },
                {
                    "name": "Часы \"Квадрат\" ясень/сукно",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_%D0%9A%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%81%D1%83%D0%BA%D0%BD%D0%BE_01.jpg"
                },
                {
                    "name": "Часы \"Квадрат\" ясень/шпон",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_%D0%9A%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%88%D0%BF%D0%BE%D0%BD_01.jpg"
                },
                {
                    "name": "Часы \"8 граней\" ясень/сукно",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_8-%D0%B3%D1%80%D0%B0%D0%BD%D0%B5%D0%B9_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%81%D1%83%D0%BA%D0%BD%D0%BE_01.jpg"
                },
                {
                    "name": "Часы \"8 граней\" ясень/шпон",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_8-%D0%B3%D1%80%D0%B0%D0%BD%D0%B5%D0%B9_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%88%D0%BF%D0%BE%D0%BD_01.jpg"
                },
                {
                    "name": "Часы \"Квадрат пирамида\" ясень/сукно",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_%D0%9A%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82-%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%81%D1%83%D0%BA%D0%BD%D0%BE_01.jpg"
                },
                {
                    "name": "Часы \"Квадрат пирамида\" ясень/шпон",
                    "image": "%D0%A7%D0%B0%D1%81%D1%8B_%D0%9A%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82-%D0%BF%D0%B8%D1%80%D0%B0%D0%BC%D0%B8%D0%B4%D0%B0_%D1%8F%D1%81%D0%B5%D0%BD%D1%8C_%D1%88%D0%BF%D0%BE%D0%BD_01.jpg"
                }
            ]
        },
        {
            "name": "Тренажеры",
            "items": [

                {
                    "name": "Тренажер \"Стоп-Шар\" 2.0 для бильярда оранжевый",
                    "image": "%D0%A1%D1%82%D0%BE%D0%BF_%D1%88%D0%B0%D1%80_%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9_02.jpg"
                },
                {
                    "name": "Тренажер \"Стоп-Шар\" 2.0 для бильярда зеленый",
                    "image": "%D0%A1%D1%82%D0%BE%D0%BF_%D1%88%D0%B0%D1%80_%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_02.jpg"
                },
                {
                    "name": "Тренажер Митасова ТРН-02",
                    "image": "Tb_Mitasova_01.jpg"
                }
            ]
        },
        {
            "name": "Прочие аксессуары",
            "items": [

                {
                    "name": "Держатель мела 9559",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BC%D0%B5%D0%BB%D0%B0-9559.jpg"
                },
                {
                    "name": "Держатель мела 9557",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20%D0%BC%D0%B5%D0%BB%D0%B0%209557.png"
                },
                {
                    "name": "Брелок 40032150",
                    "image": "%D0%91%D1%80%D0%B5%D0%BB%D0%BE%D0%BA%2040032150.png"
                },
                {
                    "name": "Держатель для мела пластиковый черный SB08-057",
                    "image": "%D0%94%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%B4%D0%BB%D1%8F-%D0%BC%D0%B5%D0%BB%D0%B0-%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_01.jpg"
                },
                {
                    "name": "Пепельница \"8\" 10029-8",
                    "image": "%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B08_10029-8.png"
                },
                {
                    "name": "Пепельница \"9\" 10029-9",
                    "image": "%D0%9F%D0%B5%D0%BF%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D0%B09_10029-9.png"
                },
                {
                    "name": "Книга \"Чудесный мир бильярда: Пул и карамболь\" 084",
                    "image": "%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0_084.png"
                },
                {
                    "name": "Брелок 9996",
                    "image": "9996_01.jpg"
                }
            ]
        },
        {
            "name": "Чехлы, тубусы для киев",

        },
        {
            "name": "Тубусы EVOLUTION",
            "items": [

                {
                    "name": "Тубус для кия EVOLUTION DUO без кармана",
                    "image": "Evolution-DUO_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD%D0%B0_01.jpg"
                },
                {
                    "name": "Тубус для кия EVOLUTION CLUB без кармана",
                    "image": "Evolution_CLUB_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD%D0%B0_01.jpg"
                },
                {
                    "name": "Тубус для кия EVOLUTION DUO с карманом",
                    "image": "Evolution-DUO_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Тубус для трехсоставного кия EVOLUTION CLUB с карманом",
                    "image": "Evolution_%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D1%85%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA-%D0%BA%D0%B8%D1%8F_01.jpg"
                },
                {
                    "name": "Тубус для кия EVOLUTION CLUB с карманом",
                    "image": "Evolution_CLUB_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD_01.jpg"
                },
                {
                    "name": "Чехол для кия MASTER ",
                    "image": "MASTER_%D1%87%D0%B5%D1%85%D0%BE%D0%BB_01.jpg"
                },
                {
                    "name": "Чехол для кия PRIME ",
                    "image": "PRIME_%D1%87%D0%B5%D1%85%D0%BE%D0%BB_01.jpg"
                }
            ]
        },
        {
            "name": "Тубусы Mercury",
            "items": [

                {
                    "name": "Тубус Mercury без кармана, коричневый",
                    "image": "%D1%82%D1%83%D0%B1%D1%83%D1%81_%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_%D0%91%D0%9A_Mercury_1500_02.jpg"
                },
                {
                    "name": "Тубус Mercury без кармана, черный",
                    "image": "%D1%82%D1%83%D0%B1%D1%83%D1%81_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%91%D0%9A_Mercury_1500_01.jpg"
                },
                {
                    "name": "Тубус для трехсоставного кия Mercury с карманом, черный",
                    "image": "Mercury_%D0%B4%D0%BB%D1%8F-%D1%82%D1%80%D0%B5%D1%85%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%D0%BA-%D0%BA%D0%B8%D1%8F_01.jpg"
                },
                {
                    "name": "Тубус Mercury с карманом, коричневый",
                    "image": "%D1%82%D1%83%D0%B1%D1%83%D1%81_%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_Mercury_1500_01.jpg"
                },
                {
                    "name": "Тубус Mercury с карманом, черный",
                    "image": "%D1%82%D1%83%D0%B1%D1%83%D1%81_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_Mercury_1500_01.jpg"
                },
                {
                    "name": "Тубус Mercury-VOGUE черный",
                    "image": "Mercury-VOGUE_black_01.jpg"
                },
                {
                    "name": "Тубус Mercury-VOGUE коричневый",
                    "image": "Mercury-VOGUE_brown_01.jpg"
                },
                {
                    "name": "Тубус Mercury PERFECT, коричневый",
                    "image": "Mercury-PERFECT_brown_01.jpg"
                }
            ]
        },
        {
            "name": "Тубусы Mercury-CLUB",
            "items": [

                {
                    "name": "Без кармана коричневый/ зеленый",
                    "image": "1500_01_%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана черный/ зеленый",
                    "image": "1500_01_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана черный/ желтый",
                    "image": "1500_01_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана зеленый/ матовый",
                    "image": "1500_01_%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана коричневый/ черный",
                    "image": "1500_01_%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана черный/ серый",
                    "image": "1500_01_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана зеленый перламутр/ черный",
                    "image": "1500_01_%D0%B7%D0%B5%D0%BB_%D0%BF%D0%B5%D1%80%D0%BB_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B1%D0%BA.jpg"
                },
                {
                    "name": "Без кармана коричневый глянец/ желтый ",
                    "image": "1500_01_%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_%D0%B3%D0%BB%D1%8F%D0%BD%D0%B5%D1%86_%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9_%D0%B1%D0%BA.jpg"
                }
            ]
        },
        {
            "name": "Тубусы Mercury-PRO",
            "items": [

                {
                    "name": "На 1 кий, без кармана, коричневый",
                    "image": "01_1-%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "На 1 кий, без кармана, серый ",
                    "image": "1500_01_1%20%D0%BA%D0%B8%D0%B9_%D1%81%D0%B5%D1%80%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "На 1 кий, без кармана, бежевый",
                    "image": "1500_01_1%20%D0%BA%D0%B8%D0%B9_%D0%B1%D0%B5%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "На 1 кий, без кармана, черный",
                    "image": "1500_01_1%20%D0%BA%D0%B8%D0%B9_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "На 1 кий, без кармана темно-бежевый",
                    "image": "1500_01_1%20%D0%BA%D0%B8%D0%B9_%D1%82%D0%B5%D0%BC%D0%BD%D0%BE_%D0%B1%D0%B5%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "На 1 кий, с карманом, коричневый",
                    "image": "01_1-%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "На 1 кий, с карманом, чёрный",
                    "image": "1500_01_1-%D0%BA%D0%B8%D0%B9_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.jpg"
                },
                {
                    "name": "На 1 кий, с карманом, бежевый",
                    "image": "1500_01_1%20%D0%BA%D0%B8%D0%B9_%D0%B1%D0%B5%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9.jpg"
                }
            ]
        },
        {
            "name": "Тубусы Mercury-DUO",
            "items": [

                {
                    "name": "Без кармана  темно-серый / черный",
                    "image": "1500_01_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана темно -серый / светло -серый",
                    "image": "1500_01_%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8B%D0%B9_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана темно - зеленый / желтый",
                    "image": "1500_01_%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9_%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "Без кармана светло -серый/ черный",
                    "image": "1500_01_%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8B%D0%B9_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%B7_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "С карманом темно- зеленый / желтый",
                    "image": "1500_01_%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9_%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "С карманом темно -серый / светло -серый",
                    "image": "1500_01_%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8B%D0%B9_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "С карманом черный / светло -серый",
                    "image": "1500_01_%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8B%D0%B9_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                },
                {
                    "name": "С карманом темно-серый / черный",
                    "image": "1500_01_%D1%81%D0%B5%D1%80%D1%8B%D0%B9_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D0%B0%D1%80%D0%BC%D0%B0%D0%BD.jpg"
                }
            ]
        },
        {
            "name": "Чехлы Start Billiards",
            "items": [

                {
                    "name": "Чехол для кия 1-10",
                    "image": "1-10_03.jpg"
                },
                {
                    "name": "Чехол для кия 1-11",
                    "image": "1-11_01.jpg"
                },
                {
                    "name": "Чехол для кия 3-11",
                    "image": "1500_01_%D0%A7%D0%B5%D1%85%D0%BE%D0%BB%20%D0%B4%D0%BB%D1%8F%20%D0%BA%D0%B8%D1%8F%203-11.jpg"
                },
                {
                    "name": "Чехол для кия 2-11",
                    "image": "2_11_01_2.jpg"
                },
                {
                    "name": "Чехол для кия 1-12",
                    "image": "1-12_01.jpg"
                },
                {
                    "name": "Чехол для кия 1-13",
                    "image": "1-13_01.jpg"
                },
                {
                    "name": "Чехол для кия 1-22",
                    "image": "1500_02_%D0%A7%D0%B5%D1%85%D0%BE%D0%BB-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%B8%D1%8F-1-22.jpg"
                },
                {
                    "name": "Чехол для кия 2-21",
                    "image": "2-21_01.jpg"
                }
            ]
        },
        {
            "name": "Футляры DELUX",
            "items": [

                {
                    "name": "Футляр для кия 2309",
                    "image": "15204bb0fc3dfceca26300e842f8ed3b.jpg"
                },
                {
                    "name": "Тубус для 2х киев ТФ-02",
                    "image": "1500_01_%D0%A2%D1%83%D0%B1%D1%83%D1%81%20%D0%B4%D0%BB%D1%8F%202%D1%85%20%D0%BA%D0%B8%D0%B5%D0%B2%20%D0%A2%D0%A4-02.jpg"
                }
            ]
        },
        {
            "name": "Сукно",

        },
        {
            "name": "Manchester",
            "items": [

                {
                    "name": "Manchester 45 wool Yellow green",
                    "image": "Manchester-45-wool-Yellow-green_01.jpg"
                },
                {
                    "name": "Manchester 60 wool Powder Blue",
                    "image": "Manchester-60-wool-Powder-Blue_01.jpg"
                },
                {
                    "name": "Manchester 60 wool Electric Blue",
                    "image": "Manchester-60-wool-Electric-Blue_01.jpg"
                },
                {
                    "name": "Manchester 60 wool Red",
                    "image": "Manchester-60-wool-Red_01.jpg"
                },
                {
                    "name": "Manchester 60 wool Burgundy",
                    "image": "Manchester-60-wool-Burgundy_01.jpg"
                },
                {
                    "name": "Manchester 60 wool Royal Blue",
                    "image": "Manchester-60-wool-Royal-Blue_01.jpg"
                },
                {
                    "name": "Manchester 60 wool Blue green",
                    "image": "Manchester-60-wool-Blue-green_02.jpg"
                },
                {
                    "name": "Manchester 60 wool Yellow green",
                    "image": "Manchester-60-wool-Yellow-green_01.jpg"
                }
            ]
        },
        {
            "name": "Euro Pro",
            "items": [

                {
                    "name": "Euro Pro 30 Yellow Green",
                    "image": "Euro-Pro_Green_30_02.jpg"
                },
                {
                    "name": "Euro Pro 50 Yellow Green",
                    "image": "Euro-Pro_Green_50_02.jpg"
                },
                {
                    "name": "Euro Pro 50 Burgundy",
                    "image": "Euro-Pro_Burgundy_50_02.jpg"
                },
                {
                    "name": "Euro Pro 50 Electric Blue",
                    "image": "Euro-Pro_Blue_50_02.jpg"
                },
                {
                    "name": "Euro Pro 70 Yellow Green",
                    "image": "Euro-Pro_Green_70_02.jpg"
                }
            ]
        },
        {
            "name": "Iwan Simonis",
            "items": [

                {
                    "name": "Iwan Simonis 760 Apple Green",
                    "image": "Iwan%20Simonis%20760%20Apple%20Green.png"
                },
                {
                    "name": "Iwan Simonis 760 Yellow green",
                    "image": "Iwan%20Simonis%20760%20Yellow%20green.png"
                },
                {
                    "name": "Iwan Simonis 760 English Green",
                    "image": "Iwan%20Simonis%20760%20English%20Green.png"
                },
                {
                    "name": "Iwan Simonis 760 Dark Green",
                    "image": "Iwan%20Simonis%20760%20Dark%20Green.png"
                },
                {
                    "name": "Iwan Simonis 760 Red",
                    "image": "Iwan%20Simonis%20760%20Red.png"
                },
                {
                    "name": "Iwan Simonis 760 Electric Blue",
                    "image": "Iwan%20Simonis%20760%20Electric%20Blue.png"
                },
                {
                    "name": "Iwan Simonis 760 Blue green",
                    "image": "Iwan%20Simonis%20760%20Blue%20green.png"
                },
                {
                    "name": "Iwan Simonis 760 Royal Blue",
                    "image": "Iwan%20Simonis%20760%20Royal%20Blue.png"
                }
            ]
        },
        {
            "name": "Комплектующие",

        },
        {
            "name": "Плиты",
            "items": [

                {
                    "name": "Комплект плит на стол размера 7', S-25мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                },
                {
                    "name": "Комплект плит на стол размера 8', S-25мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                },
                {
                    "name": "Комплект плит на стол размера 9', S-25мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                },
                {
                    "name": "Комплект плит на стол размера 10', S-25мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                },
                {
                    "name": "Комплект плит на стол размера 10', S-40мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                },
                {
                    "name": "Комплект плит на стол размера 9', S-40мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                },
                {
                    "name": "Комплект плит на стол размера 11', S-30мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                },
                {
                    "name": "Комплект плит на стол размера 11', S-40мм",
                    "image": "%D0%BF%D0%BB%D0%B8%D1%82%D1%8B_ORERO_03.jpg"
                }
            ]
        },
        {
            "name": "Лузы",
            "items": [

                {
                    "name": "Сетка х/б, малая, (комплект)",
                    "image": "f5561f801f910c54eeb049c30e10c0ba.jpg"
                },
                {
                    "name": "Сетка х/б, большая, (комплект)",
                    "image": "479772d32c71e55234e4e7f1c26f6ff3.jpg"
                },
                {
                    "name": "Скоба алюминиевая, малая (комплект)",
                    "image": "c4f556b2f77ead99d50afaeeabe3602b.jpg"
                },
                {
                    "name": "Скат металлический с ремешком (комплект)",
                    "image": "da293bd72a363830d7359ea476fb553d.jpg"
                },
                {
                    "name": "Скоба алюминиевая, большая (комплект)",
                    "image": "%D1%81%D0%BA%D0%BE%D0%B1%D0%B0_%D1%81%D0%B8%D0%BB%D1%83%D0%BC%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BE%D0%BA%D1%80%D0%B0%D1%81_%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE.jpg"
                },
                {
                    "name": "Луза, скоба алюминиевая, х/б сетка, малая (комплект)",
                    "image": "6a1c80a6dcdc99df898736a3fe870746.jpg"
                },
                {
                    "name": "Луза, скоба алюминиевая, х/б сетка, большая (комплект)",
                    "image": "852c180916edcef8003b9a02d17bd753.jpg"
                },
                {
                    "name": "Скоба латунная, большая (комплект)",
                    "image": "8dd0aa8835133af199e6f8fcf9fd47c3.jpg"
                }
            ]
        },
        {
            "name": "Бортовая резина",
            "items": [

                {
                    "name": "Бортовая резина «Start Standart» 1.0",
                    "image": "Start%20Standart%201.0%20(2).png"
                },
                {
                    "name": "Бортовая резина «Start Standart» 1.2",
                    "image": "Start%20Standart%201.2.png"
                },
                {
                    "name": "Бортовая резина «Start Super PRO»-1/2-55",
                    "image": "Start%20Super%20PRO_%D0%9A%D0%9A-55.jpg"
                },
                {
                    "name": "Бортовая резина «Start Super PRO»-1/3-118",
                    "image": "Start%20Super%20PRO_U-118_150.jpg"
                },
                {
                    "name": "Бортовая резина «Start Super PRO»-1/5-118",
                    "image": "Start%20Super%20PRO_U-118_150.jpg"
                },
                {
                    "name": "Бортовая резина «Start Super PRO»-1/8-118",
                    "image": "Start%20Super%20PRO_U-118_180.jpg"
                },
                {
                    "name": "Бортовая резина Start Brilliant, Германия",
                    "image": "Start%20Brilliant_U-118_180.jpg"
                }
            ]
        },
        {
            "name": "Оборудование",
            "items": [

                {
                    "name": "Поддон под шары, 57, 2 мм",
                    "image": "c204918e690dee89fcddbc1d4ab60212.jpg"
                },
                {
                    "name": "Бокс для шаров, 57-60 мм",
                    "image": "9b62c0a77b280c1a9d5a44fbeec65bb0.jpg"
                },
                {
                    "name": "Шаблон для замера створа луз",
                    "image": "%D1%82%D1%80%D0%B5%D1%83%D0%B3%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%D0%B4%D0%BB%D1%8F%20%D0%BB%D1%83%D0%B7%D1%8B_1.jpg"
                },
                {
                    "name": "Контроллер шаров 85024080",
                    "image": "95218f57041728e547332112f0d1c07f.jpg"
                },
                {
                    "name": "Полка \"Турнирная\"",
                    "image": "%D0%9F%D0%BE%D0%BB%D0%BA%D0%B0_%D0%A2%D1%83%D1%80%D0%BD%D0%B8%D1%80%D0%BD%D0%B0%D1%8F.png"
                },
                {
                    "name": "Тренажер \"Стоп-Шар\" 2.0 для бильярда оранжевый",
                    "image": "%D0%A1%D1%82%D0%BE%D0%BF_%D1%88%D0%B0%D1%80_%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D1%8B%D0%B9_02.jpg"
                },
                {
                    "name": "Тренажер \"Стоп-Шар\" 2.0 для бильярда зеленый",
                    "image": "%D0%A1%D1%82%D0%BE%D0%BF_%D1%88%D0%B0%D1%80_%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9_02.jpg"
                },
                {
                    "name": "Контроллер шаров 85024160",
                    "image": "f69887c101d0f787700ea569bdb166dc.jpg"
                }
            ]
        }
    ])
    return (
        <div className='wrap-content-left'>
            <Collection data={bilyard[0]} />
            {
                billiardPopular.map((popularItem, index) => (
                    <CollectionPopular data={popularItem} key={index} />
                ))
            }
        </div>
    )
}

export default BilyardCollection