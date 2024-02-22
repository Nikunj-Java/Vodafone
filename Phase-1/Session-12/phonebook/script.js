let contacts =[];


function displayContacts(){
    let data='';
    for (let contact of contacts){
        data +=`<tr>
                <td>${contact.id}</td>
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td><button class='btn btn-danger' onClick='deleteContact(${contact.id})'>X</button></td>
                <td><button class='btn btn-success' onClick='EditContact(${contact.id})'>Edit</button></td>
        </tr>`
    }
    document.getElementById("contacts").innerHTML=data;
}

function addContact(){

    const name=document.getElementById('name').value;
    const phone=document.getElementById('phone').value;


    if(name.trim() == '' || phone.trim()==''){
        alert("Name and Phone fileds are Mendatory");
    }else{
        const obj={id:contacts.length+1,name,phone};
        contacts.push(obj);
        document.getElementById('name').value=''
        document.getElementById('phone').value=''
        //alert("Contact added Successfully");
        displayContacts();
    }
}