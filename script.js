function store(){
    var car = {
        cbrand: cbrand.value,
        cprice: cprice.value,
        ckey: ckey.value
    }
        // Check if any of the fields is empty
        if (cbrand.value == '' || cprice.value == '' || ckey.value == '') {
            alert('Please fill in all the fields !!!');
        }
        else{
            if(car.ckey in localStorage){
            alert("This key alredy exist...")
        }
        else{
              localStorage.setItem(car.ckey, JSON.stringify(car));
              alert('Car details added successfully...');


              cbrand.value = '';
              cprice.value = '';
              ckey.value = '';
        }
}
}
function retrieve() {
    let key = document.getElementById("retkey").value;

    if (key in localStorage) {
        // Retrieve the stored car object using the key
        let car = JSON.parse(localStorage.getItem(key));

        card.innerHTML = `<div class="card mt-2 mb-3 border rounded-lg shadow-lg ms-3" style="width: 18rem; background-color: #def0e3; ">
                         
                          <ul class="list-group list-group-flush " >
                          <li class="list-group-item  text-start" style="background-color: #def0e3;">Car Brand :<b  style="color: #6951ae;"> ${car.cbrand}</b></li>
                          <li class="list-group-item  text-start" style="background-color: #def0e3;">Price :<b style="color: #6951ae;"> ${car.cprice}</b></li>
                          <li class="list-group-item  text-start" style="background-color: #def0e3;">Key :<b style="color: #6951ae;"> ${car.ckey}</b></li>
                          </ul>
                          <button type="button" class="btn-close position-absolute top-0 end-0 m-2" onclick="closeCard()"></button>
                          </div>`;
                          
        // Clear the input field after displaying retrieved details
        document.getElementById("retkey").value = '';
    } else {
        alert('Enter a valid key !!!');
        document.getElementById("retkey").value = '';
    }
}


function closeCard() {
    var cardToRemove = document.querySelector('.card');
    if (cardToRemove) {
        cardToRemove.remove(); // Remove the entire card from the DOM
    }
}

function remove() {
    var keyToRemove = document.getElementById('remkey').value;
    console.log('Key to remove:', keyToRemove);

    if (!keyToRemove) {
        alert('Please enter a key to remove records.');
        return;
    }

    if (keyToRemove in localStorage) {
        localStorage.removeItem(keyToRemove);
        alert('Records removed successfully...');
    } else {
        alert('Entered key does not match any records !!!');
    }

    // Clear the input field after removing records
    document.getElementById('remkey').value = '';
}


function removeall(){
    localStorage.clear()
    alert('All the details removed successsfully...')
}


