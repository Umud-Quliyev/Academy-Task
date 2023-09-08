fetch('https://northwind.vercel.app/api/suppliers')
            .then(response => response.json())
            .then(data => {
                let table = document.querySelector('table');
                data.forEach(supplier => {
                    let row = table.insertRow();
                    row.insertCell().innerHTML = supplier.id;
                    row.insertCell().innerHTML = supplier.companyName;
                    row.insertCell().innerHTML = supplier.contactName;
                    row.insertCell().innerHTML = supplier.contactTitle;
                    row.insertCell().innerHTML = supplier.address ? supplier.address.country : "";
                    let actionsCell = row.insertCell();
                    actionsCell.innerHTML = `
                        <button onclick="deleteSupplier(this)">Delete</button>
                        <button onclick="showDetail(this)">Detail</button>
                    `;
                });
            })
            
            function deleteSupplier(button) {
                let row = button.parentNode.parentNode;
                let id = row.cells[0].innerText;

                fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
                    method: 'DELETE',
                })
                .then(response => {
                    if (response.ok) {
                        alert('Supplier delete!');
                        row.remove();
                    } else {
                        alert('Error.');
                    }
                })
            }

            function showDetail(button) {
                let row = button.parentNode.parentNode;
                let id = row.cells[0].innerText;
                let companyName = row.cells[1].innerText;
                let contactName = row.cells[2].innerText;
                let contactTitle = row.cells[3].innerText;
                let country = row.cells[4].innerText;
            
                let detailMessage = `ID: ${id}\nCompany Name: ${companyName}\nContact Name: ${contactName}\nContact Title: ${contactTitle}\nCountry: ${country}`;
            
                alert(detailMessage);
            
                
            }