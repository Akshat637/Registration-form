
function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.myname.value;
    const email = event.target.myemail.value;
    const phonenumber = event.target.myphone.value;
    const date  =  event.target.mydate;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber,
        date
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
}

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.email}')> Delete User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function deleteUser(myemail) {
    console.log(myemail)
    localStorage.removeItem(myemail);
    removeUserFromScreen(myemail);

}

function removeUserFromScreen(myemail) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(myemail);

    parentNode.removeChild(childNodeToBeDeleted)
}








