const list = document.querySelector('#book-list ul');


//DELETE BOOKS
//I put an event listener in the ul, so when I target the li will bublle up to the ul 
//and delete the li element, the child element
list.addEventListener('click',function(e){
 if(e.target.className == 'delete'){
     const li = e.target.parentElement;
     list.removeChild(li);
 }
});


//add books to the list
//first grab the form
const addForm = document.forms['add-book'];
//second: attach an event listener to the form
addForm.addEventListener('submit', function(e){
    //prevent the default behaviour of reloading the page:
    e.preventDefault();

    //then grab the value
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);

    //then create the elements to insert in the ul:
    //first create the li
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');


    //Add content to the bookname and deleteBtn
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes to the 
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');



   
    //combine the elements and insert them into de DOm
    //Append span tags into li
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    //Append the li to the Dom
    list.appendChild(li);
});



//Hide books
const hideBox = document.querySelector('#hide');
//add an event listener, change to see when the checkbox changes
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none";

    }else{
        list.style.display ="block";
    }



});

//MAKE A SEARCH FILTER
const searchBar = document.forms['search-books'].querySelector('input');
  //attach an event listener to this search btn.
  searchBar.addEventListener('keyup', function(e){
      //grab what the person is inputing here
      const term = e.target.value.toLowerCase();  //converted it to lower case

      //grab all the li tags
    const books = list.getElementsByTagName('li');
    //cicle through the li tags
    //fisrt turn into an arrary
    Array.from(books).forEach(function(book){ //now check if the title is equal to the field
        //grab the title
        const title = book.firstElementChild.textContent;
        //check if this term is in the title of the book
        if(title.toLocaleLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }


    })

  })

  //set Interval
  var count = 0
  var intId = setInterval(counter, 1000);

  function counter(){
      console.log(++count);
  }