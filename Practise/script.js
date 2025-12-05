const addbtn = document.getElementById("addbtn");

 addbtn.addEventListener('click',function(){

    const inputVal = document.getElementById('itembox').ariaValueMax;
    let allItems = JSON.parse(localStorage.getItem('allItems'));
    let listItem =[];

    if(allItems  !== null){
        listItem = [...allItems,inputVal];
    }
    else{
        listItem.push(inputVal)
    }

    localStorage.setItem('allItems',JSON.stringify(listItem));

    document.getElementById('itembox').value = "";

    getValues();
 })

 function getValues(){

    let allItems = JSON.parse(localStorage.getItem('allItems'));
    let lists = document.getElementsByTagName('li');


    
    if(lists.length === 0){
        let li = document.createElement('li');
        li.innerHTML = allItems[0];
        document.getElementById('todo').appendChild(li);
    }

    else{
        let li = document.createElement('li');
        li.innerHTML = allItems[allItems.length - 1];
        document.getElementById('todo').appendChild(li);
    }
 }

 getValues();