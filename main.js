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