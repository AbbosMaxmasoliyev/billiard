import React, { useState } from 'react'
import { CollectionWithHide } from '../components/collection'
import Header from '../components/heaader'
import Topmenu from '../components/topmenu'
import Info from '../components/info'
import LeftNavbar from '../components/leftNavbar'
import Footer from '../components/Footer'

const Catalogs = () => {
    const [catalogData, setCatalogData] = useState([
        {
            "name": "Бильярд",
            "items": [
                [
                    {
                        "image": "88471b87e4bad21bd26e9e196f2f21ce.jpg",
                        "title": "Бильярдные коллекции",
                        "info": "Для знатоков и ценителей искусства бильярда. Полное оформление бильярдной в одном стиле. ",
                        "links": [
                            {
                                "link": "collection_high_style",
                                "name": "High- Style"
                            },
                            {
                                "link": "collection_hightech",
                                "name": "High- tech"
                            },
                            {
                                "link": "kollektsiya_ampir",
                                "name": "Ампир"
                            },
                            {
                                "link": "kollektsiya_baron_lyuks",
                                "name": "Барон- Люкс"
                            },
                            {
                                "link": "collection_veneciya",
                                "name": "Венеция"
                            },
                            {
                                "link": "kolekciya_grossmeyster",
                                "name": "Гроссмейстер"
                            },
                            {
                                "link": "kollektsiya_dragon",
                                "name": "Дракон"
                            },
                            {
                                "link": "kollektsiya_drakon_granzh",
                                "name": "Дракон Гранж"
                            },
                            {
                                "link": "collection_imperator",
                                "name": "Император"
                            },
                            {
                                "link": "collection_imperator_gold",
                                "name": "Император Голд"
                            },
                            {
                                "link": "kollektsiya_imperator_lyuks",
                                "name": "Император- Люкс"
                            },
                            {
                                "link": "leo",
                                "name": "Лео"
                            }
                        ]
                    },
                    {
                        "image": "table_02.jpg",
                        "title": "Бильярдные столы",
                        "info": "Купить бильярдный стол надежней и выгоднее у ведущего производителя в Москве– Фабрики «Старт».",
                        "links": [
                            {
                                "link": "982",
                                "name": "Популярные (Хиты продаж)"
                            },
                            {
                                "link": "1017",
                                "name": "Современные (Современная серия)"
                            },
                            {
                                "link": "177",
                                "name": "Эксклюзивные (Эксклюзивная серия)"
                            },
                            {
                                "link": "174",
                                "name": "Суперпрофессиональные (Суперпрофессиональная серия)"
                            },
                            {
                                "link": "176",
                                "name": "Профессиональные (Профессиональная серия)"
                            },
                            {
                                "link": "178",
                                "name": "Любительские (Любительская серия)"
                            },
                            {
                                "link": "180",
                                "name": "Игровые (Игровая серия)"
                            },
                            {
                                "link": "1057",
                                "name": "Сток предложения (Сток предложения)"
                            },
                            {
                                "link": "1027",
                                "name": "Детские (Детские бильярдные столы)"
                            },
                            {
                                "link": "1028",
                                "name": "Для дачи (Бильярдные столы для дачи)"
                            },
                            {
                                "link": "1026",
                                "name": "Компактные (Складные бильярдные столы)"
                            },
                            {
                                "link": "1025",
                                "name": "Настольные (Мини-бильярд)"
                            }
                        ]
                    },
                    {
                        "image": "lamp00.jpg",
                        "title": "Светильники",
                        "info": "Широкий ассортимент светильников для бильярда. Прямые поставки с Фабрики света «Горизонт».",
                        "links": [
                            {
                                "link": "941",
                                "name": "NEO"
                            },
                            {
                                "link": "745",
                                "name": "Evolution"
                            },
                            {
                                "link": "1041",
                                "name": "Лофт"
                            },
                            {
                                "link": "449",
                                "name": "Startbilliards"
                            },
                            {
                                "link": "442",
                                "name": "Аристократ-Люкс"
                            },
                            {
                                "link": "443",
                                "name": "Аристократ"
                            },
                            {
                                "link": "444",
                                "name": "Классика"
                            },
                            {
                                "link": "766",
                                "name": "Эксклюзивные светильники"
                            },
                            {
                                "link": "753",
                                "name": "Декоративное освещение"
                            },
                            {
                                "link": "1044",
                                "name": "Для столов 6 футов"
                            },
                            {
                                "link": "1045",
                                "name": " Для столов 7 футов"
                            },
                            {
                                "link": "1046",
                                "name": "Для столов 8 футов"
                            },
                            {
                                "link": "1047",
                                "name": "Для столов 9 футов"
                            },
                            {
                                "link": "1048",
                                "name": "Для столов 10 футов"
                            },
                            {
                                "link": "1049",
                                "name": "Для столов 11 футов"
                            },
                            {
                                "link": "1050",
                                "name": "Для столов 12 футов"
                            }
                        ]
                    }
                ],
                [
                    {
                        "image": "cues_006.jpg",
                        "title": "Кии",
                        "info": "Бильярдные кии от любительских до профессиональных, из ценных пород дерева. Кии ручной работы мастера Сергея Рябова, «Русский», Dinamika Billiards.",
                        "links": [
                            {
                                "link": "1031",
                                "name": "Пирамида"
                            },
                            {
                                "link": "1032",
                                "name": "Пул"
                            },
                            {
                                "link": "1034",
                                "name": "Снукер"
                            },
                            {
                                "link": "1030",
                                "name": "Двусоставные"
                            },
                            {
                                "link": "1029",
                                "name": "Односоставные"
                            },
                            {
                                "link": "1033",
                                "name": "C удлинителем"
                            },
                            {
                                "link": "184",
                                "name": "Кии Мастера Рябова"
                            },
                            {
                                "link": "991",
                                "name": "Кии Мастера Якубович"
                            },
                            {
                                "link": "212",
                                "name": "Кии РУССКИЙ"
                            },
                            {
                                "link": "1061",
                                "name": "Кии Vortex"
                            },
                            {
                                "link": "185",
                                "name": "Кии Dinamika Billiards"
                            },
                            {
                                "link": "763",
                                "name": "Древко"
                            }
                        ]
                    },
                    {
                        "image": "cue_rack_01.jpg",
                        "title": "Киевницы",
                        "info": "Киевницы для бильярда от экономичных до эксклюзивных, из ценных пород дерева и авторской выкраски. Большой выбор стоек для киев от ведущего производителя  бильярдного оборудования – Фабрики «Старт».",
                        "links": [
                            {
                                "link": "965",
                                "name": "Стандартные"
                            },
                            {
                                "link": "966",
                                "name": "Эксклюзивные"
                            },
                            {
                                "link": "1013",
                                "name": "Настенные"
                            },
                            {
                                "link": "1012",
                                "name": "Напольные"
                            },
                            {
                                "link": "1066",
                                "name": "Полки для шаров"
                            }
                        ]
                    },
                    {
                        "image": "balls_02.jpg",
                        "title": "Шары",
                        "info": "Товары нашего каталога соответствуют самым строгим стандартам. Решив купить бильярдные шары из ассортимента товаров «Старт», вы делаете выбор в пользу отменного качества и гарантируемой надежности. В наличии  наборы для всех типов игр.",
                        "links": [
                            {
                                "link": "1008",
                                "name": "Start Billiards"
                            },
                            {
                                "link": "1054",
                                "name": "TAO-MI"
                            },
                            {
                                "link": "1006",
                                "name": "Dyna | spheres"
                            },
                            {
                                "link": "1009",
                                "name": "Пирамида"
                            },
                            {
                                "link": "1010",
                                "name": "Пул"
                            },
                            {
                                "link": "1011",
                                "name": "Снукер"
                            }
                        ]
                    },
                    {
                        "image": "accessories02.jpg",
                        "title": "Аксессуары для стола",
                        "info": "Все, что нужно для игры в бильярд: большой выбор, высокое качество, низкие цены продукции Фабрики «Старт».",
                        "links": [
                            {
                                "link": "193",
                                "name": "Чехлы для столов"
                            },
                            {
                                "link": "1056",
                                "name": "Столешницы для столов"
                            },
                            {
                                "link": "195",
                                "name": "Треугольники"
                            },
                            {
                                "link": "1058",
                                "name": "Стулья бильярдные"
                            },
                            {
                                "link": "985",
                                "name": "Средства ухода"
                            },
                            {
                                "link": "235",
                                "name": "Турнирное оборудование"
                            },
                            {
                                "link": "229",
                                "name": "Системы учета времени"
                            }
                        ]
                    },
                    {
                        "image": "accessories04.jpg",
                        "title": "Аксессуары для кия",
                        "info": "Полезные бильярдные принадлежности, которые помогут обеспечить сохранность кия, упорядочить игровое пространство, а заодно создадут правильный настрой в игре!",
                        "links": [
                            {
                                "link": "800",
                                "name": "Мел бильярдный"
                            },
                            {
                                "link": "1020",
                                "name": "Наклейки, колпачки для кия"
                            },
                            {
                                "link": "981",
                                "name": "Насадки, удлинители для кия"
                            },
                            {
                                "link": "960",
                                "name": "Держатели для кия и мела"
                            },
                            {
                                "link": "961",
                                "name": "Средства ухода за кием"
                            }
                        ]
                    },
                    {
                        "image": "accessories05.jpg",
                        "title": "Аксессуары для игрока",
                        "info": "Аксессуары для игроков станут приятным и полезным приобретением либо подарком для любителей игры в бильярд.",
                        "links": [
                            {
                                "link": "233",
                                "name": "Перчатки бильярдные"
                            },
                            {
                                "link": "220",
                                "name": "Часы"
                            },
                            {
                                "link": "228",
                                "name": "Тренажеры"
                            },
                            {
                                "link": "1060",
                                "name": "Прочие аксессуары"
                            }
                        ]
                    },
                    {
                        "image": "tubes00.jpg",
                        "title": "Чехлы, тубусы для киев",
                        "info": "Достойная оправа и надежная защита для бильярдного кия. Множество моделей, высококачественные материалы, максимальное удобство. ",
                        "links": [
                            {
                                "link": "1038",
                                "name": "Тубусы EVOLUTION"
                            },
                            {
                                "link": "861",
                                "name": "Тубусы Mercury"
                            },
                            {
                                "link": "452",
                                "name": "Тубусы Mercury-CLUB"
                            },
                            {
                                "link": "219",
                                "name": "Тубусы Mercury-PRO"
                            },
                            {
                                "link": "457",
                                "name": "Тубусы Mercury-DUO"
                            },
                            {
                                "link": "216",
                                "name": "Чехлы Start Billiards"
                            },
                            {
                                "link": "217",
                                "name": "Футляры DELUX"
                            }
                        ]
                    },
                    {
                        "image": "%D1%81%D1%83%D0%BA%D0%BD%D0%BE.jpg",
                        "title": "Сукно",
                        "info": "Специалисты в области бильярдного оборудования знают, как важно правильно выбрать и удачно купить сукно для бильярдного стола. У Фабрики «Старт», можно оперативно и выгодно купить сукно для бильярдного стола",
                        "links": [
                            {
                                "link": "989",
                                "name": "Manchester"
                            },
                            {
                                "link": "1040",
                                "name": "Euro Pro"
                            },
                            {
                                "link": "990",
                                "name": "Iwan Simonis"
                            }
                        ]
                    },
                    {
                        "image": "1dc2ea10ec1cc3b0dc69c3250662fbab.jpg",
                        "title": "Комплектующие",
                        "info": "Сукно, лузы, бортовая резина, плиты. Все комплектующие для бильярдного стола.",
                        "links": [
                            {
                                "link": "202",
                                "name": "Плиты"
                            },
                            {
                                "link": "234",
                                "name": "Лузы"
                            },
                            {
                                "link": "232",
                                "name": "Бортовая резина"
                            },
                            {
                                "link": "1014",
                                "name": "Оборудование"
                            }
                        ]
                    }
                ]
            ]
        },
        {
            "name": "Игротека",
            "items": [
                [
                    {
                        "image": "table_tennis_01.jpg",
                        "title": "Теннисные столы",
                        "info": "Купить теннисный стол ведущего российского бренда со стильным дизайном и безупречными игровыми характеристиками.",
                        "links": [
                            {
                                "link": "1016",
                                "name": "Любительские"
                            },
                            {
                                "link": "849",
                                "name": "Профессиональные"
                            },
                            {
                                "link": "895",
                                "name": "Складные"
                            },
                            {
                                "link": "850",
                                "name": "Для помещений"
                            },
                            {
                                "link": "851",
                                "name": "Для улицы"
                            },
                            {
                                "link": "852",
                                "name": "Антивандальные"
                            },
                            {
                                "link": "1053",
                                "name": "Детские"
                            }
                        ]
                    },
                    {
                        "image": "tennis_racket_00.jpg",
                        "title": "Аксессуары для тенниса",
                        "info": "Большой выбор теннисных аксессуаров для всех: от начинающих игроков в настольный теннис до спортсменов-профессионалов.",
                        "links": [
                            {
                                "link": "824",
                                "name": "Теннисные ракетки"
                            },
                            {
                                "link": "950",
                                "name": "Основания для ракеток"
                            },
                            {
                                "link": "951",
                                "name": "Накладки для ракеток"
                            },
                            {
                                "link": "827",
                                "name": "Теннисные мячи"
                            },
                            {
                                "link": "828",
                                "name": "Теннисные сетки"
                            },
                            {
                                "link": "829",
                                "name": "Наборы для тенниса"
                            },
                            {
                                "link": "830",
                                "name": "Чехлы для столов и ракеток"
                            },
                            {
                                "link": "1002",
                                "name": "Средства по уходу"
                            },
                            {
                                "link": "832",
                                "name": "Теннисные тренажеры, оборудование"
                            },
                            {
                                "link": "888",
                                "name": "Рюкзаки, сумки"
                            }
                        ]
                    },
                    {
                        "image": "igroteka_11.jpg",
                        "title": "Настольный футбол",
                        "info": "Модели мини-футбола от ведущего производителя спортивно-игрового оборудования. Отличное качество по минимальной цене!",
                        "links": [
                            {
                                "link": "champion_5_futov",
                                "name": "Champion / 5 футов"
                            },
                            {
                                "link": "mini-champion",
                                "name": "Champion / 5 футов"
                            },
                            {
                                "link": "slassic",
                                "name": "Classic / 4 фута"
                            },
                            {
                                "link": "classic_4_futa",
                                "name": "Classic II/ 4 фута"
                            },
                            {
                                "link": "compact_48_new_ankor_4_futa",
                                "name": "Compact 48 NEW (Анкор) / 4 фута"
                            },
                            {
                                "link": "compact_48_new_arizona_4_futa",
                                "name": "Compact 48 NEW (Аризона) / 4 фута"
                            },
                            {
                                "link": "compact_48_new_yorkshir_4_futa",
                                "name": "Compact 48 NEW (Йоркшир) / 4 фута"
                            },
                            {
                                "link": "compact",
                                "name": "Compact 48\" II/ 4 фута"
                            },
                            {
                                "link": "compact_55_new_ankor_5_futov",
                                "name": "Compact 55 NEW (Анкор) / 5 футов"
                            },
                            {
                                "link": "compact_55_new_arizona_5_futov",
                                "name": "Compact 55 NEW (Аризона) / 5 футов"
                            },
                            {
                                "link": "compact_55_new_yorkshir_5_futov",
                                "name": "Compact 55 NEW (Йоркшир) / 5 футов"
                            },
                            {
                                "link": "compact_55",
                                "name": "Compact 55\" / 5 футов"
                            },
                            {
                                "link": "compact_55_5_futov_arkhiv",
                                "name": "Compact 55\" II/ 5 футов"
                            },
                            {
                                "link": "dusseldorf",
                                "name": "Dusseldorf / 4 фута"
                            }
                        ]
                    }
                ],
                [
                    {
                        "image": "igroteka_06.jpg",
                        "title": "Аэрохоккей",
                        "info": "Модели аэрохоккея от ведущего производителя спортивно-игрового оборудования. Отличное качество по минимальной цене!",
                        "links": [
                            {
                                "link": "battle_ice_slp_5028_5_futov",
                                "name": "Battle Ice / 5 футов"
                            },
                            {
                                "link": "compact_ice_5_futov",
                                "name": "Compact Ice / 5 футов"
                            },
                            {
                                "link": "game_ice_7_futov",
                                "name": "Game Ice / 7 футов"
                            },
                            {
                                "link": "ice_start_4_futa",
                                "name": "Ice Start / 4 фута"
                            },
                            {
                                "link": "kids_ice_3_futa",
                                "name": "Kids Ice / 3 фута"
                            },
                            {
                                "link": "pro_ice_6_futov",
                                "name": "Pro Ice / 6 футов"
                            },
                            {
                                "link": "pro_ice_7_futov",
                                "name": "Pro Ice / 7 футов"
                            },
                            {
                                "link": "small_ice",
                                "name": "Small Ice / 3 фута"
                            }
                        ]
                    },
                    {
                        "image": "game_accessories.jpg",
                        "title": "Аксессуары к игровым столам",
                        "info": "Аксессуары для игровых столов минифутбола и аэрохоккея. Отличное качество по минимальной цене!",
                        "links": [
                            {
                                "link": "amortizator",
                                "name": "Амортизатор 12,7 мм"
                            },
                            {
                                "link": "amortizator_15_8_mm",
                                "name": "Амортизатор 15,8 мм"
                            },
                            {
                                "link": "bort_izognutyy",
                                "name": "Борт изогнутый"
                            },
                            {
                                "link": "podshipnik_15_8",
                                "name": "Втулка для штанги 15,8"
                            },
                            {
                                "link": "igrok_dlya_mini_futbola_krasnyy2",
                                "name": "Игрок для мини- футбола (красный)"
                            },
                            {
                                "link": "igrok_dlya_mini_futbola_krasnyy",
                                "name": "Игрок для мини- футбола (красный)"
                            },
                            {
                                "link": "igrok_dlya_mini_futbola_siniy_2",
                                "name": "Игрок для мини- футбола (синий)"
                            },
                            {
                                "link": "igrok_dlya_mini_futbola_siniy",
                                "name": "Игрок для мини- футбола (синий)"
                            },
                            {
                                "link": "myach_dlya_mini_futbola2",
                                "name": "Мяч для мини- футбола"
                            }
                        ]
                    },
                    {
                        "image": "в_каталог.jpg",
                        "title": "Тренажеры",
                        "info": "Кардиотренажеры нового поколения по доступной цене. Подберите для себя продходящий вариант современного тренажера Start Line Fitness.",
                        "links": [
                            {
                                "link": "946",
                                "name": "Степперы"
                            },
                            {
                                "link": "948",
                                "name": "Велотренажеры"
                            },
                            {
                                "link": "947",
                                "name": "Эллиптические тренажеры"
                            },
                            {
                                "link": "949",
                                "name": "Беговые дорожки"
                            },
                            {
                                "link": "952",
                                "name": "Инверсионные"
                            },
                            {
                                "link": "1052",
                                "name": "Силовые, гребные"
                            }
                        ]
                    },
                    {
                        "image": "training_01.jpg",
                        "title": "Тренировочный инвентарь",
                        "info": "Тренировочный инвентарь для детей и взрослых. Отличный выбор для занятий в домашних условиях и установки в спортивных зонах отдыха.",
                        "links": [
                            {
                                "link": "basketbolnyy_trenazher_slp",
                                "name": "Баскетбольный тренажер SLP"
                            },
                            {
                                "link": "vozvratnyy_mekhanizm_slp",
                                "name": "Возвратный механизм SLP"
                            },
                            {
                                "link": "pole4tennis",
                                "name": "Игровое поле для настольного тенниса"
                            },
                            {
                                "link": "setka_dlya_trenazhera_02_10",
                                "name": "Сетка для тренажера 02- 10"
                            },
                            {
                                "link": "trenazher_stop_shar_2_0_dlya_bilyarda_zelenyy",
                                "name": "Тренажер \"Стоп- Шар\" 2.0 для бильярда зеленый"
                            },
                            {
                                "link": "trenazher_stop_shar_2_0_dlya_bilyarda_oranzhevyy",
                                "name": "Тренажер \"Стоп- Шар\" 2.0 для бильярда оранжевый"
                            }
                        ]
                    },
                    {
                        "image": "batut_04.jpg",
                        "title": "Батуты и минитрамплины",
                        "info": "Полезный фитнес для детей и взрослых. Отличный выбор для домашнего использования и установки в зонах отдыха. ",
                        "links": [
                            {
                                "link": "857",
                                "name": "Батуты 6 футов"
                            },
                            {
                                "link": "928",
                                "name": "Батуты 8 футов"
                            },
                            {
                                "link": "926",
                                "name": "Батуты 10 футов"
                            },
                            {
                                "link": "927",
                                "name": "Батуты 12 футов"
                            },
                            {
                                "link": "938",
                                "name": "Батуты 14 футов"
                            },
                            {
                                "link": "939",
                                "name": "Батуты 16 футов"
                            },
                            {
                                "link": "975",
                                "name": "Батуты прямоугольные"
                            },
                            {
                                "link": "858",
                                "name": "Минитрамплины"
                            },
                            {
                                "link": "859",
                                "name": "Аксессуары для батутов"
                            }
                        ]
                    },
                    {
                        "image": "basketball_03.jpg",
                        "title": "Баскетбольные стойки",
                        "info": "Мобильные баскетбольные стойки и щиты для баскетбола от ведущего производителя спортивно-игрового оборудования.",
                        "links": [
                            {
                                "link": "slp_junior_003",
                                "name": "SLP Junior- 003"
                            },
                            {
                                "link": "slp_slp_junior_003v",
                                "name": "SLP Junior- 003В"
                            },
                            {
                                "link": "slp_junior_018f",
                                "name": "SLP Junior- 018F"
                            },
                            {
                                "link": "slp_junior_018fb_s_vozvratnym_mekhanizmom",
                                "name": "SLP Junior- 018FB с возвратным механизмом"
                            },
                            {
                                "link": "slp_junior_080",
                                "name": "SLP Junior- 080"
                            },
                            {
                                "link": "slp_professional_022b",
                                "name": "SLP Professional 022B"
                            },
                            {
                                "link": "slp_professional_021",
                                "name": "SLP Professional- 021"
                            },
                            {
                                "link": "slp_professional_021b",
                                "name": "SLP Professional- 021B"
                            },
                            {
                                "link": "slp_professional_024b",
                                "name": "SLP Professional- 024B"
                            },
                            {
                                "link": "slp_professional_029",
                                "name": "SLP Professional- 029"
                            },
                            {
                                "link": "slp_standard_003f",
                                "name": "SLP Standard 003F"
                            },
                            {
                                "link": "slp_standard_019",
                                "name": "SLP Standard 019"
                            },
                            {
                                "link": "slp_standart_019b",
                                "name": "SLP Standard 019B"
                            }
                        ]
                    },
                    {
                        "image": "Баксерские-перчатки_SLF-1401_01.jpg",
                        "title": "Бокс и единоборства",
                        "info": "Товары для единоборств и бокса Start Line Fitness",
                        "links": [
                            {
                                "link": "bokserskie_perchatki_slf_1401_10",
                                "name": "Боксерские перчатки SLF 1401- 10"
                            },
                            {
                                "link": "bokserskie_perchatki_slf_1401_12",
                                "name": "Боксерские перчатки SLF 1401- 12"
                            }
                        ]
                    },
                    {
                        "image": "Боксерский-мешок_SLF-JWB03_01.jpg",
                        "title": "Футбольные ворота и мячи",
                        "info": "Ворота для игровых площадок от Start Line Play",
                        "links": [
                            {
                                "link": "mishen_dlya_futbolnykh_vorot_slp_08",
                                "name": "Мишень для футбольных ворот SLP- 08"
                            },
                            {
                                "link": "mishen_dlya_futbolnykh_vorot_slp_09",
                                "name": "Мишень для футбольных ворот SLP- 09"
                            }
                        ]
                    },
                    {
                        "image": "darts_01.jpg",
                        "title": "Дартс",
                        "info": "Товары для игры в дартс: мишени, дротики, кабинеты от ведущего производителя спортивно-игрового оборудования.",
                        "links": [
                            {
                                "link": "1064",
                                "name": "Мишени"
                            },
                            {
                                "link": "1063",
                                "name": "Аксессуары"
                            }
                        ]
                    },
                    {
                        "image": "Шаблон SLP_фото_sunny.jpg",
                        "title": "Детские городки",
                        "info": "SLP Systems - предлагает широкий выбор детских городков и аксессуаров к ним",
                        "links": [
                            {
                                "link": "996",
                                "name": "Городки SLP SYSTEMS"
                            },
                            {
                                "link": "997",
                                "name": "Аксессуары"
                            },
                            {
                                "link": "998",
                                "name": "Качели SLP SYSTEMS"
                            }
                        ]
                    },
                    {
                        "image": "sports_complex_04.jpg",
                        "title": "Спортивные комплексы",
                        "info": "Экологичные и надежные уличные спортивные комплексы для занятий на открытом воздухе и на крытых спортивных площадках.",
                        "links": [
                            {
                                "link": "855",
                                "name": "Гимнастические комплексы"
                            },
                            {
                                "link": "856",
                                "name": "Спортивные снаряды"
                            }
                        ]
                    },
                    {
                        "image": "poker_01.jpg",
                        "title": "Покер",
                        "info": "Игровые столы для покера от ведущего производителя спортивно-игрового оборудования. Отличное качество по минимальной цене!",
                        "links": [
                            {
                                "link": "kaliforniya",
                                "name": "Калифорния"
                            }
                        ]
                    },
                    {
                        "image": "board_games01.jpg",
                        "title": "Настольные игры",
                        "info": "Шахматы, шашки, нарды - отличные интеллектуальные игры. Прекрасное времяпрепровождение в кругу семьи или друзей.",
                        "links": [
                            {
                                "link": "nardy_shashki_vostok",
                                "name": "Нарды -  шашки «Восток»"
                            },
                            {
                                "link": "nardy_shashki_leo",
                                "name": "Нарды -  шашки «Лео»"
                            },
                            {
                                "link": "mlechnyy_put",
                                "name": "Нарды -  шашки «Млечный путь»"
                            }
                        ]
                    },
                    {
                        "image": "01.jpg",
                        "title": "Массажное оборудование",
                        "info": "",
                        "links": [
                            {
                                "link": "973",
                                "name": "Массажные столы"
                            },
                            {
                                "link": "974",
                                "name": "Аксессуары для массажных столов"
                            }
                        ]
                    },
                    {
                        "image": "grill_02.jpg",
                        "title": "Грили и аксессуары",
                        "info": "Керамические грили Start Grill отличаются низкой ценой, качеством и функциональностью. Успешно сочетают в одном корпусе гриль, барбекю, мангал, печь для пиццы, коптильню и тандыр.",
                        "links": [
                            {
                                "link": "983",
                                "name": "Керамические грили Start Grill PRO"
                            },
                            {
                                "link": "903",
                                "name": "Керамические грили Start Grill"
                            },
                            {
                                "link": "993",
                                "name": "Газовые грили Start Grill"
                            },
                            {
                                "link": "992",
                                "name": "Угольные грили Start Grill"
                            },
                            {
                                "link": "1039",
                                "name": "Смокеры и очаги Start Grill"
                            },
                            {
                                "link": "904",
                                "name": "Аксессуары для гриля"
                            }
                        ]
                    }
                ]
            ]
        },
        {
            "name": "Интерьер",
            "items": [
                [
                    {
                        "image": "collection_meb_01.jpg",
                        "title": "Предметы мебели",
                        "info": "Элитная мебель авторской работы",
                        "links": [
                            {
                                "link": "909",
                                "name": "Стулья, табуреты"
                            },
                            {
                                "link": "1070",
                                "name": "Кресла, пуфы"
                            },
                            {
                                "link": "1071",
                                "name": "Диваны"
                            },
                            {
                                "link": "450",
                                "name": "Столы, столики"
                            },
                            {
                                "link": "280",
                                "name": "Тумбы, комоды"
                            },
                            {
                                "link": "192",
                                "name": "Полочки"
                            },
                            {
                                "link": "240",
                                "name": "Зеркала"
                            },
                            {
                                "link": "279",
                                "name": "Рамы под картины"
                            }
                        ]
                    },
                    {
                        "image": "furniture00.jpg",
                        "title": "Мебельные модули",
                        "info": "Мебельные модули из массива ясеня в багете авторской выкраски",
                        "links": [
                            {
                                "link": "modul_dlya_tv_leo_ii1",
                                "name": "для TV «Лео II»"
                            },
                            {
                                "link": "modul_dlya_tv_leo1",
                                "name": "для TV «Лео»"
                            },
                            {
                                "link": "dlya_tv_kvadratnyy_vinchentso",
                                "name": "для TV квадратный"
                            },
                            {
                                "link": "modul_dlya_tv_kvadratnyy_baget_toskana",
                                "name": "для TV квадратный / Тоскана"
                            },
                            {
                                "link": "modul_dlya_tv_kvadratnyy_baget_fodzhi",
                                "name": "для TV квадратный / Фоджи"
                            },
                            {
                                "link": "modul_dlya_tv_kvadratnyy_baget_vinchentso",
                                "name": "для TV квадратный/ Винченцо"
                            },
                            {
                                "link": "dlya_tv_pryamougolnyy_",
                                "name": "для TV прямоугольный "
                            },
                            {
                                "link": "modul_dlya_tv_pryamougolnyy_baget_toskana",
                                "name": "для TV прямоугольный / Тоскана"
                            },
                            {
                                "link": "modul_dlya_tv_pryamougolnyy_baget_fodzhi",
                                "name": "для TV прямоугольный /Фоджи"
                            },
                            {
                                "link": "modul_dlya_tv_pryamougolnyy_baget_vinchentso",
                                "name": "для TV прямоугольный/ Винченцо"
                            },
                            {
                                "link": "moduli_dlya_knig_i_tv_baget_toskana",
                                "name": "для книг и TV / Тоскана"
                            },
                            {
                                "link": "moduli_dlya_knig_i_tv_baget_fodzhi",
                                "name": "для книг и TV / Фоджи"
                            },
                            {
                                "link": "dlya_knig_i_tv_s_polkoy",
                                "name": "для книг и TV с полкой"
                            },
                            {
                                "link": "dlya_knig_i_tv_s_polkoy_fodzhi",
                                "name": "для книг и TV с полкой"
                            }
                        ]
                    },
                    {
                        "image": "collection_meb_02.jpg",
                        "title": "Мебельные коллекции",
                        "info": "Элитная мебель из массива ясеня, авторской выкраски в едином ансамбле для интерьера высокого стиля.",
                        "links": [
                            {
                                "link": "kollektsiya_alto",
                                "name": "Коллекция «Альто»"
                            },
                            {
                                "link": "kollektsiya_burzhua_i",
                                "name": "Коллекция «Буржуа I»"
                            },
                            {
                                "link": "kollektsiya_trio_kholl",
                                "name": "Коллекция «Трио- холл»"
                            },
                            {
                                "link": "kollektsiya_markiz_ii",
                                "name": "Коллекция. «Маркиз II»"
                            },
                            {
                                "link": "kollektsiya_gleys_freska",
                                "name": "Коллекция. Глейс"
                            },
                            {
                                "link": "kollektsiya_gleys_vinchentso",
                                "name": "Коллекция. Глейс"
                            },
                            {
                                "link": "kollektsiya_morenyy_dub_vinchentso",
                                "name": "Коллекция. Мореный дуб"
                            },
                            {
                                "link": "kollektsiya_morenyy_dub_vinchentso_gold",
                                "name": "Коллекция. Мореный дуб"
                            }
                        ]
                    }
                ],
                [
                    {
                        "image": "interrior.jpg",
                        "title": "Интерьерные панели",
                        "info": "Модульное решение интерьера из массива ясеня от Фабрики «Старт» – это просто, универсально, выгодно и эффектно!",
                        "links": [
                            {
                                "link": "1037",
                                "name": "Ливерпуль панели"
                            },
                            {
                                "link": "1036",
                                "name": "Президент панели"
                            },
                            {
                                "link": "802",
                                "name": "Кессонный потолок"
                            }
                        ]
                    },
                    {
                        "image": "garden_furniture_01.jpg",
                        "title": "Мебель уличная",
                        "info": "Садово-парковая мебель из бетона привлекательна своей фундаментальностью и ценой, станет хорошим дополнением к спортивной площадке",
                        "links": [
                            {
                                "link": "skameyka_bulvar",
                                "name": "Скамейка «Бульвар»"
                            }
                        ]
                    }
                ]
            ]
        }
    ])
    return (
        <>
            <Header />
            <Topmenu />
            <div id='container1'>
                <div className="no-index">
                    <div className='wrap-content-left'>
                        <div class="with-breadcrumbs">


                            <div class="bx-breadcrumb">
                                <div class="bx-breadcrumb-item" id="bx_breadcrumb_0" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">

                                    <a href="https://www.fabrika-start.ru/" title="Главная" itemprop="url">
                                        <span itemprop="title">Главная</span>
                                    </a>
                                </div>
                                <div class="bx-breadcrumb-item">
                                    <i class="fa fa-angle-right"></i>
                                    <span>Каталог товаров</span>
                                </div><div style={{ clear: "both" }}></div></div>
                            <h1>Каталог продукции Фабрики «Старт»</h1>
                        </div>
                        {
                            catalogData.map((item, index) => (
                                <CollectionWithHide data={item} key={index} />
                            ))
                        }
                    </div>
                    <LeftNavbar />
                </div>


                <br />

            </div>
            <Footer />
        </>


    )
}

export default Catalogs