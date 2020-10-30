
const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

//create element and render cafe

function renderCafe(doc){

    let li = document.createElement('li');
    let name =  document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');


    li.setAttribute('data-id',doc.id)
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';


    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafeList.appendChild(li);

    cross.addEventListener('click',(e) => {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    })




}


// getting data
db.collection('cafes').where('city','==','karachi').orderBy('name').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    })
})

//saving data 
form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('cafes').add({            // .add() takes object{} as a parameter this object represents document in firebase.
        name:form.name.value,
        city:form.city.value

    })            
    form.name.value='';
    form.city.value='';


});


// deleting data 

 