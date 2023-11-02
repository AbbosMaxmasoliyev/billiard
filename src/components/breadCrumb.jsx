import React from 'react'

const BreadCrumb = () => {
    return (
        <div class="bx-breadcrumb">
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_0" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemref="bx_breadcrumb_1">

                <a href="https://www.fabrika-start.ru/" title="Главная" itemprop="url">
                    <span itemprop="title">Главная</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_1" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" itemref="bx_breadcrumb_2">
                <i class="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/" title="Каталог товаров" itemprop="url">
                    <span itemprop="title">Каталог товаров</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_2" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child" itemref="bx_breadcrumb_3">
                <i class="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/sect/854/" title="Бильярд" itemprop="url">
                    <span itemprop="title">Бильярд</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item" id="bx_breadcrumb_3" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" itemprop="child">
                <i class="fa fa-angle-right"></i>
                <a href="https://www.fabrika-start.ru/catalog/sect/175/" title="Бильярдные коллекции" itemprop="url">
                    <span itemprop="title">Бильярдные коллекции</span>
                </a>
            </div>
            <div class="bx-breadcrumb-item">
                <i class="fa fa-angle-right"></i>
                <span>High-Style</span>
            </div>
        </div>
    )
}

export default BreadCrumb