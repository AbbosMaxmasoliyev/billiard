let main = document.querySelector(".with-breadcrumbs")
let data = {}
data["name"] = main.children[2].textContent.replace("Коллекция ", "")
data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])
data["sizes"] = Array.from(main.children[6].children[1].children[0].children).map(item => item.textContent.replace("ф", ""))
data["table"] = Array.from(main.children[6].children[3].children[2].children).map(item => item.textContent.split("\n").filter(item => {
    if (!item.includes("Размер")) {
        return item
    }
}).map(item => item.trim())).map(item => {
    if (item[0] == "") {
        return {
            type: item[1],
            size: parseInt(item[2]),
            material_stol: item[3],
            plita_type: item[4],
            ves: item[6],
            leg: item[5],
            price: parseInt(item[10]) * 130
        }
    } else {
        return item
    }
})


let parametres = document.querySelector(".parameters")

Array.from(parametres.children).forEach(item => {
    if (item.tagName == "BR") {
        item.parentElement.removeChild(item)
    }
})


data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
    if (index % 2 == 0) {
        return [item.textContent, array[index + 1].textContent]
    } else {
        return "br"
    }
})


let description = document.getElementById("tab-description")
data["description"] = Array.from(description.children[0].children).map(item => item.textContent)


if (document.getElementById("slider-module-color")) {
    let collection = document.getElementById("slider-module-color")
    data["collection"] = Array.from(collection.children[0].children).map(item => {
        return {
            "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
            table: item.children[0].dataset["table"].split("/")[4]

        }
    })
} else {
    data["collection"] = false
}


if (document.querySelector(".set-color-sukno")) {

    let suknoSet = document.querySelectorAll(".set-color-sukno")
    data["sukno-color"] = Array.from(suknoSet).map(item => {
        return {
            name: item.parentElement.textContent,
            suknoImage: item.children[0].attributes["src"].nodeValue.split("/")[4]
        }
    })
} else {
    data["sukno-color"] = false
}

if (document.querySelector(".set-color-table")) {
    let setVkraski = document.querySelectorAll(".set-color-table")


    data["vkraski-color"] = Array.from(setVkraski).map(item => {
        return {
            name: item.parentElement.textContent,
            vkraskiImage: item.children[0].attributes["src"].nodeValue.split("/")[4]
        }
    })
} else {
    data["vkraski-color"] = false
}





let len = window.location.pathname.split("/").length
let name = window.location.pathname.split("/")[len - 2]


console.log({
    [name]: data
})











// bilyardniy Stol


let spanChildren = document.querySelector(".selected-category").children[1].children

let spanAnchor = Array.from(spanChildren).filter((item) => {
    if (item.tagName == "A") {
        return item
    }
})

spanAnchor.map(item => {
    let len = item.href.split("/").length
    return {
        link: item.href.split("/")[len - 2],
        name: item.textContent.replace("\n", "")
    }
})


{


    // /https://www.fabrika-start.ru/catalog/sect/178/good/omega/
    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])
    data["sizes"] = Array.from(main.children[6].children[1].children[0].children).map(item => item.textContent.replace("ф", ""))
    data["table"] = Array.from(main.children[6].children[3].children[2].children).map(item => item.textContent.split("\n").filter(item => {
        if (!item.includes("Размер")) {
            return item
        }
    }).map(item => item.trim())).map(item => {
        if (item[0] == "") {
            return {
                type: item[1],
                size: parseInt(item[2]),
                material_stol: item[3],
                plita_type: item[4],
                ves: item[6],
                leg: item[5],
                price: parseInt(item[10].replace(" ", "")) * 130
            }
        } else {
            return item
        }
    })


    let parametres = document.querySelector(".parameters")

    Array.from(parametres.children).forEach(item => {
        if (item.tagName == "BR") {
            item.parentElement.removeChild(item)
        }
    })


    Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item, array[index + 1]]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children[0].children).map(item => item.textContent)


    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"].split("/")[4]

            }
        })
    } else {
        data["collection"] = false
    }


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.rel,
                suknoImage: item.children[0].attributes["src"].nodeValue.split("/")[6]
            }
        })
    } else {
        data["sukno-color"] = false
    }

    if (document.querySelector(".click-color-table")) {
        let setVkraski = document.querySelectorAll(".click-color-table")


        data["vkraski-color"] = Array.from(setVkraski).map(item => {
            return {
                name: item.rel,
                vkraskiImage: item.children[0].attributes["src"].nodeValue.split("/")[6]
            }
        })
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]
    data["specification"] = {}

    data["specification"]["complectation"] = Array.from(document.querySelector("table.spec-com").children[0].children).map(item => {
        return {
            info: item.children[0].children[0].src
        }
    })

    data["specification"]["material"] = Array.from(document.querySelector("table.spec-mat").children[0].children).map(item => {
        return {
            info: item.children[0].children[0].src
        }
    })

    console.log({
        [name]: data
    })
    let dataId = document.querySelector(".switch-spec ul li a").attributes["data-el"].textContent
    let indexs = data.sizes
    let textItem = []
    indexs.map(async (item, index, array) => {
        console.log(item, dataId)
        await $.getJSON('/catalog/good/get-spec.php', {
            size: item,
            good: dataId
        }, function (result) {

            if (result.ERROR || !result.DATA) {
                alert('Нет данных по спецификации');
            } else {
                let div = document.createElement("div").cloneNode(true)

                div.innerHTML = result.DATA.TRANS
                textItem.push(div.children[0].children[0].children[0].children[1].textContent)

                if ($('.spec-balls').length == 0) {
                    $(".details-block ").append("<div class=\"spec-balls\"></div>");
                }
                $('.spec-balls').html(result.DATA.BALLS);

            }
        });
        if (index == array.length - 1) {
            data["specification"]["transport"] = textItem
        }
    })


    console.log({
        [name]: data
    })
}