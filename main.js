
// Links 
Array.from(document.querySelectorAll("#container1 .left a")).map(item => {
    return [item.href.split("/")[7], item.innerText]
})

{
    let main = document.querySelector(".with-breadcrumbs")
    var data = {}
    let len = window.location.pathname.split("/").length
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    if (main.children[5].children.thumbnails) {

        data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])
    } else {
        data["images"] = Array.from(document.querySelector(".zoom").children[0].href.split("/")[6])

    }
    if (main.children[6].children[1].children[0].children) {
        data["sizes"] = Array.from(main.children[6].children[1].children[0].children).map(item => item.textContent.replace("ф", ""))

    }
    if (document.querySelector(".main.float-right.width772 table tr")) {
        data["table"] = Array.from(document.querySelectorAll(".main.float-right.width772 table tr")).map(item => item.textContent.split("\n").filter(item => {
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

    }

    if (document.querySelector(".parameters")) {

        let parametres = document.querySelector(".parameters")




        data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
            if (item.tagName == "DT") {
                return "br"
            } else if (item.tagName == "DD") {
                return [item.textContent, array[index + 1]?.textContent]
            }
        }).filter(item => item != undefined)
    }

    if (document.getElementById("tab-description")) {
        let description = document.getElementById("tab-description")
        data["description"] = Array.from(description.children[0].children).map(item => item.textContent)
    }



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
    } else if (document.querySelector(".click-color-sukno")) {
        let suknoSet = document.querySelectorAll(".click-color-sukno")
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





    if (document.querySelector("table.spec-com")) {
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
    }




    var name = window.location.pathname.split("/")[len - 2]

    console.log({
        [name]: data
    })



}

// Set
{
    let main = document.querySelector(".with-breadcrumbs")
    var data = {}
    let len = window.location.pathname.split("/").length
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


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.rel,
                suknoImage: item.href.split("/")[6]
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
                vkraskiImage: item.href.split("/")[6]
            }
        })
    } else {
        data["vkraski-color"] = false
    }




    if (document.querySelector("table.spec-com")) {
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
    }





    var name = window.location.pathname.split("/")[len - 2]

    console.log({
        [name]: data
    })



}



// Xit prodaj
{
    let main = document.querySelector(".with-breadcrumbs")
    var data = {}
    let len = window.location.pathname.split("/").length
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


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.rel,
                suknoImage: item.href.split("/")[6]
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
                vkraskiImage: item.href.split("/")[6]
            }
        })
    } else {
        data["vkraski-color"] = false
    }






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
    var name = window.location.pathname.split("/")[len - 2]

    console.log({
        [name]: data
    })



}

// Nastolniy pul
{
    let main = document.querySelector(".with-breadcrumbs")
    var data = {}
    let len = window.location.pathname.split("/").length
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])




    let parametres = document.querySelector(".parameters")



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


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.rel,
                suknoImage: item.href.split("/")[6]
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
                vkraskiImage: item.href.split("/")[6]
            }
        })
    } else {
        data["vkraski-color"] = false
    }




    if (document.querySelector("table.spec-com")) {
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
    }





    var name = window.location.pathname.split("/")[len - 2]

    console.log({
        [name]: data
    })



}




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

// Svtetilnik
{

    // Svetilnik
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


// Billiard Key
{
    let data = {}
    let keyName = document.querySelector("h1.float-right")

    data["images"] = Array.from(document.querySelectorAll("#thumbnails ul li a")).map(item => item.rel.split("/")[4])


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


    data["table"] = Array.from(document.querySelectorAll(".spec-table-0")).map(item => {
        return {
            shape: item.children[0].textContent,
            dlina: item.children[1].textContent,
            weight: item.children[2].textContent,
            price: parseInt(item.children[3].textContent.replaceAll("\n", "").trim().replaceAll(" ", "")) * 130
        }
    })

    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


    console.log({
        [name]: data
    })
}


// Key Box (Billiard Keyivnitsa)
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])
    data["sizes"] = Array.from(main.children[6].children[1].children[0].children).map(item => item.textContent.replace("ф", ""))



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
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]
    Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
        if (item.tagName === "SPAN") {
            item.parentElement.removeChild(item)
        }

        if (item.tagName == "P") {
            return {
                nameColour: item.textContent.replaceAll("\n", "").trim(),
                colours: Array.from(array[index + 1].children).map(item => {
                    return {
                        image: item.children[0].rel
                    }
                })
            }
        }
    }).filter(item => item !== undefined)

    console.log({
        [name]: data
    })




}

// Shar
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])




    let parametres = document.querySelector(".parameters")

    Array.from(parametres.children).forEach(item => {
        if (item.tagName == "BR") {
            item.parentElement.removeChild(item)
        }
    })


    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]


    console.log({
        [name]: data
    })




}


// Chexol
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")





    let parametres = document.querySelector(".parameters")

    Array.from(parametres.children).forEach(item => {
        if (item.tagName == "BR") {
            item.parentElement.removeChild(item)
        }
    })


    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)

    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]


    console.log({
        [name]: data
    })

}


// Stol

{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])




    let parametres = document.querySelector(".parameters")

    Array.from(parametres.children).forEach(item => {
        if (item.tagName == "BR") {
            item.parentElement.removeChild(item)
        }
    })


    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]
    Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
        if (item.tagName === "SPAN") {
            item.parentElement.removeChild(item)
        }

        if (item.tagName == "P") {
            return {
                nameColour: item.textContent.replaceAll("\n", "").trim(),
                colours: Array.from(array[index + 1].children).map(item => {
                    return {
                        image: item.children[0].rel
                    }
                })
            }
        }
    }).filter(item => item !== undefined)

    console.log({
        [name]: data
    })




}



// triugolnik
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["image"] = document.querySelector(".zoom").children[0].href.split("/")[6]




    let parametres = document.querySelector(".parameters")

    Array.from(parametres.children).forEach(item => {
        if (item.tagName == "BR") {
            item.parentElement.removeChild(item)
        }
    })


    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })









    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]
    Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
        if (item.tagName === "SPAN") {
            item.parentElement.removeChild(item)
        }

        if (item.tagName == "P") {
            return {
                nameColour: item.textContent.replaceAll("\n", "").trim(),
                colours: Array.from(array[index + 1].children).map(item => {
                    return {
                        image: item.children[0].rel
                    }
                })
            }
        }
    }).filter(item => item !== undefined)

    console.log({
        [name]: data
    })




}






// Stul
{
    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = document.querySelector(".zoom").children[0].chidlren



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

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
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })
}



// puf

{
    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = document.querySelector(".zoom").children[0].chidlren



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

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
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })
}




// divan

{
    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = document.querySelector(".zoom").children[0].chidlren



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

            }
        })
    } else {
        data["collection"] = false
    }


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.parentElement.textContent,
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })

}



// Stolik

{
    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = document.querySelector(".zoom").children[0].chidlren



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)





    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

            }
        })
    } else {
        data["collection"] = false
    }


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.parentElement.textContent,
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })
}



// tumba
{

    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(document.getElementById("thumbnails").children[0].children).map(item => {
        return {
            image: item.children[0].rel.split("/")[4],

        }
    })



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

            }
        })
    } else {
        data["collection"] = false
    }


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.parentElement.textContent,
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })

}



// Polka

{
    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = document.querySelector(".zoom").children[0].href.split("/")[6]



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)





    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

            }
        })
    } else {
        data["collection"] = false
    }


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.parentElement.textContent,
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })
}



// zerkalo
{

    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = document.querySelector(".zoom").children[0].href.split("/")[6]



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)





    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

            }
        })
    } else {
        data["collection"] = false
    }


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.parentElement.textContent,
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })
}


// ramka pod kartina
{
    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = document.querySelector(".zoom").children[0].href.split("/")[6]



    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (item.tagName == "DT") {
            return "br"
        } else if (item.tagName == "DD") {
            return [item.textContent, array[index + 1]?.textContent]
        }
    }).filter(item => item != undefined)





    if (document.getElementById("slider-module-color")) {
        let collection = document.getElementById("slider-module-color")
        data["collection"] = Array.from(collection.children[0].children).map(item => {
            return {
                "data-sukno": item.children[0].dataset["sukno"].split("/")[4],
                table: item.children[0].dataset["table"]?.split("/")[4]

            }
        })
    } else {
        data["collection"] = false
    }


    if (document.querySelector(".click-color-sukno")) {

        let suknoSet = document.querySelectorAll(".click-color-sukno")
        data["sukno-color"] = Array.from(suknoSet).map(item => {
            return {
                name: item.parentElement.textContent,
                suknoImage: item.children[0].attributes["src"]?.nodeValue.split("/")[4]
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


    console.log({
        [name]: data
    })
}



// Mebelniy kolleksiya

{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])




    let parametres = document.querySelector(".parameters")

    Array.from(parametres.children).forEach(item => {
        if (item.tagName == "BR") {
            item.parentElement.removeChild(item)
        }
    })


    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]
    Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
        if (item.tagName === "SPAN") {
            item.parentElement.removeChild(item)
        }

        if (item.tagName == "P") {
            return {
                nameColour: item.textContent.replaceAll("\n", "").trim(),
                colours: Array.from(array[index + 1].children).map(item => {
                    return {
                        image: item.children[0].rel
                    }
                })
            }
        }
    }).filter(item => item !== undefined)

    console.log({
        [name]: data
    })




}






// Tennis
// Tennisniy stol 
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])




    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]


    console.log({
        [name]: data
    })




}


// Raketka
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])




    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]


    console.log({
        [name]: data
    })




}



// double fish
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4])




    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]


    console.log({
        [name]: data
    })




}



// sredstva    

{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = main.children[5].children.thumbnails ? Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4]) : document.querySelector(".zoom").children[0].href.split("/")[6];




    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]


    console.log({
        [name]: data
    })




}



// Теннисные тренажеры, оборудование
{


    let main = document.querySelector(".with-breadcrumbs")
    let data = {}
    data["name"] = main.children[2].textContent.replace("Коллекция ", "")
    data["images"] = main.children[5].children.thumbnails ? Array.from(main.children[5].children.thumbnails.children[0].children).map(item => item.children[0].attributes.rel.textContent.split("/")[4]) : document.querySelector(".zoom").children[0].href.split("/")[6];




    let parametres = document.querySelector(".parameters")




    data["parametres"] = Array.from(parametres.children).map((item, index, array) => {
        if (index % 2 == 0) {
            return [item.textContent, array[index + 1]?.textContent]
        } else {
            return "br"
        }
    })


    let description = document.getElementById("tab-description")
    data["description"] = Array.from(description.children).map(item => item.textContent)


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

    if (document.getElementById("tab-color")) {



        data["vkraski-color"] = Array.from(document.getElementById("tab-color").children[0].children).map((item, index, array) => {
            if (item.tagName === "SPAN") {
                item.parentElement.removeChild(item)
            }

            if (item.tagName == "P") {
                return {
                    nameColour: item.textContent.replaceAll("\n", "").trim(),
                    colours: Array.from(array[index + 1].children).map(item => {
                        return {
                            image: item.children[0].rel
                        }
                    })
                }
            }
        }).filter(item => item !== undefined)
    } else {
        data["vkraski-color"] = false
    }





    let len = window.location.pathname.split("/").length
    let name = window.location.pathname.split("/")[len - 2]


    console.log({
        [name]: data
    })




}



