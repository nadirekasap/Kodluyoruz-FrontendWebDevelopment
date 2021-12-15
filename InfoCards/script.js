let data = [
    {name : "Nadire",
    age : 24
    },
    {name : "William",
    age : 22
    },
    {name : "Jon",
    age : 26
    },
    {name : "Serena",
    age : 20
    },
    {name : "Alice",
    age : 32
    },
    {name : "Tony",
    age : 40
    },
]

const info = document.querySelector("#info");
let details = data.map(function(item) {
    return "<div>" + item.name + " " + "is " + item.age + " years old." + "</div>";
});

info.innerHTML = details.join("\n");