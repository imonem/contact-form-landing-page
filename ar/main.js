//Global Firebase init
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEH6vR1eRuOm6HWqM-mlXCOSQhaoU76R8",
    authDomain: "contact-form-30ecd.firebaseapp.com",
    projectId: "contact-form-30ecd",
    storageBucket: "contact-form-30ecd.appspot.com",
    messagingSenderId: "864667746820",
    appId: "1:864667746820:web:9da2afdf0ffc1b806a6b51",
    measurementId: "G-CWY4NPH47Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//reference messages
let database = firebase.database();
let messagesReference = database.ref('messages');

// Listener for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form to firebase
function submitForm(e) {
    e.preventDefault();
    // fetch value from form
    let name = getInputVal('name');
    let email = getInputVal('email');
    let mobile = getInputVal('mobile');
    let type = getInputVal('type');
    let notes = getInputVal('notes');

    saveContacts(name, email, mobile, type, notes);
    //alert user of successful contact request submission
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //clear form
    document.getElementById('contactForm').reset();
}

//Get form values
const getInputVal = (id) => {
    return document.getElementById(id).value;
}

//function to save contact to firebase
const saveContacts = (name, email, mobile, type, notes) => {
    let newMessageReference = messagesReference.push();
    newMessageReference.set({
        name: name,
        email: email,
        mobile: mobile,
        type: type,
        notes: notes
    });
}