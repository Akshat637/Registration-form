
function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.myname.value;
    const email = event.target.myemail.value;
    const phonenumber = event.target.myphone.value;
    const date = event.target.mydate;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        email,
        name,
        phonenumber,
        date
    }
    axios.post(" https://crudcrud.com/api/fb36b96126104a7c8e9d3bebe7f615a0/appointmentData", obj)
        .then((res) => {
            showNewUserOnScreen(res.data)
            console.log(res);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> Somthing went wrong</h4>"
            console.log(err);
        })

    // localStorage.setItem(obj.email, JSON.stringify(obj))
    // showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/fb36b96126104a7c8e9d3bebe7f615a0/appointmentData")
        .then((res) => {
            console.log(res)
            for (var i = 0; i < res.data.length; i++) {
                showNewUserOnScreen(res.data[i])
            }
        })
        .catch((err) => {
            console.log(err)
        })
    // const localStorageObj = localStorage;
    // const localstoragekeys = Object.keys(localStorageObj)

    // for (var i = 0; i < localstoragekeys.length; i++) {
    //     const key = localstoragekeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showNewUserOnScreen(userDetailsObj)
    // }
})




function showNewUserOnScreen(user) {
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    // console.log(localStorage.getItem(user.emailId))
    if (localStorage.getItem(user.email) !== null) {
        removeUserFromScreen(user.email)
    }

    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user._id}> ${user.email} - ${user.name}
                                        <button onclick=deleteUser('${user._id}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user._id}')>Edit User </button>
                                     </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(myemail, myname, myphone, userId) {

    document.getElementById('email').value = myemail;
    document.getElementById('name').value = myname;
    document.getElementById('phone').value = myphone;

    deleteUser(userId)
}

function deleteUser(userId) {
    axios.delete(`https://crudcrud.com/api/fb36b96126104a7c8e9d3bebe7f615a0/appointmentData/${userId}`)
        .then((res) => {
            removeUserFromScreen(userId)
        })
        .catch((err) => {
            console.log(err)
        })

    // console.log(myemail)
    // localStorage.removeItem(myemail);
    // removeUserFromScreen(myemail);

}

function removeUserFromScreen(userId) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(myemail);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}









