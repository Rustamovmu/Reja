console.log("browser.js is running");

function itemTemplate(item) {
    return `
        <li 
                class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
           >
                <span class="item-text">${item.reja}</span>
                <div>
                   <button data-id="${item._id}" class="edit-item btn btn-secondary btn-sm me-2" style="border-radius: 25px; padding: 5px 15px">
                       Edit
                    </button>
                    <button data-id="${item._id}" class="delete-item btn btn-danger btn-sm" style="border-radius: 25px; padding: 5px 15px">
                      Delete
                    </button>
                </div>
            </li>
    `;
}
let createField = document.getElementById("create-field");
document
    .getElementById("create-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        axios
            .post("/create-item", { reja: createField.value  })
            .then(function (response) {
                document.getElementById("item-list").insertAdjacentHTML(
                    "beforeend",
                    itemTemplate(response.data)
                );
                createField.value = "";
                createField.focus();
            })
            .catch(function (err) {
                console.log("Iltimos, keyinroq qayta urinib ko'ring!");
            });
});


document.addEventListener("click", function (e) {
    // delete operation
    console.log(e.target);
    if (e.target.classList.contains("delete-me")) {
        // alert("siz delete tugmasini bosdingiz");
        if (confirm("Rostdan ham bu rejani o'chirmoqchimisiz?")) {
        //     alert("Ha deb javob berdingiz, bu rejani o'chirasiz");
        // } else {
        //     alert("Yo'q deb javob berdingiz, bu rejani o'chirmaysiz");
        // }
        axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
            .then(function (response) {
                e.target.parentElement.parentElement.remove();
            })
            .catch(function (err) {
                console.log("Iltimos, keyinroq qayta urinib ko'ring!");
            });
        }
    }

    // edit operation
    if (e.target.classList.contains("edit-me")) {
        alert("siz edit tugmasini bosdingiz");
    }
});
        