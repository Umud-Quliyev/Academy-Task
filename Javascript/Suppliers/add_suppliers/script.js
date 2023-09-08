let addSupplierForm = document.getElementById("addSupplierForm");

addSupplierForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(addSupplierForm);
    let formDataObject = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    fetch('https://northwind.vercel.app/api/suppliers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataObject),
    })
        .then(response => response.json())
        .then(data => {
            alert('Supplier added successfully!');
            addSupplierForm.reset();
        })
});



