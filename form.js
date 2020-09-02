const navbar=document.getElementById('changecolor')

  firebase.initializeApp({
    apiKey: "AIzaSyBgR-sYuZSD8qVy-zfRIkjfxIonLDrlmWw",
    authDomain: "webdesignhl.firebaseapp.com",
    projectId: "webdesignhl"
  });
   
  var db = firebase.firestore();


function guardar(){
    var nombre =document.getElementById('nombre').value;
    var email =document.getElementById('apellido').value;
    var texto =document.getElementById('fecha').value;
   
  
    console.log(nombre);
    console.log(apellido);
    console.log(fecha);

    db.collection("contact").add({
        first: nombre,
        middle: email,
        last: texto
       
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    document.getElementById('nombre').value='';
    document.getElementById('apellido').value='';
    document.getElementById('fecha').value='';
    
    alert("Hello! Ill contact you soon");

  } 
