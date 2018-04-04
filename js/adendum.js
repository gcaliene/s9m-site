///////////////////////////////
// INITIALIZATION OF FIREBASE + STORAGE
///////////////////////////////
var config = {
  apiKey: "AIzaSyDKXz9de2f_Ob4sSmq-pWbnqYfmbL8QCFY",
  authDomain: "s9m-order-form.firebaseapp.com",
  databaseURL: "https://s9m-order-form.firebaseio.com",
  projectId: "s9m-order-form",
  storageBucket: "gs://s9m-order-form.appspot.com",
  messagingSenderId: "278750789582"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();



///////////////////////////////
// FORM COLLECTS AND SUBMITS ORDERS
///////////////////////////////
//Reference messages collection
var messagesRef = database.ref('messages');

//Listen for form submit
document.querySelector('#temp-order-form').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
  e.preventDefault();

  //Get values
  var domainOne = getInputVal('dom-name-one');
  var domainTwo = getInputVal('dom-name-two');
  var domainThree = getInputVal('dom-name-three');

  var artistName = getInputVal('artist-name');
  var artistEmail = getInputVal('artist-email');
  var artistPhone = getInputVal('artist-phone');

  var merchLinks = getInputVal('for-sale-links');
  var audioLinks = getInputVal('audio-sample-links');
  var videoLinks = getInputVal('video-links');

  //Save message
  saveMessage(domainOne, domainTwo, domainThree, artistName, artistEmail, artistPhone, merchLinks, audioLinks, videoLinks);
/*
  //Show alert
  document.querySelector('#submit-success').style.display = 'block';

  //Clear Form
  setTimeout(function() {
    document.querySelector('#entry-form').reset();
  }, 0001);

  //Hide alert after 3 secnds
  setTimeout(function() {
    document.querySelector('#submit-success').style.display = 'none';
  }, 3000);
}
*/
//Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save messages to firebase
function saveMessage(domainOne, domainTwo, domainThree, artistName, artistEmail, artistPhone) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    domainOne: domainOne,
    domainTwo: domainTwo,
    domainThree: domainThree,
    artistName: artistName,
    artistEmail: artistEmail,
    artistPhone: artistPhone,
    merchLinks: merchLinks,
    audioLinks: audioLinks,
    videoLinks: videoLinks
  });
}





///////////////////////////////
// TEMPLATE UPLOAD REQUIREMENTS
///////////////////////////////
const needsList = document.querySelector('#require');
const templateList = document.querySelector('#templates');

// Check value of template selection dropdown then display appropriate requirements
function requirements() {
  // Chosen template is displayed
  needsList.innerHTML = `The ${templateList.value} template requires the following file uploads:`;

  // Array of requirement items
  let items = [];

  items[0] = 'Your artist/band biography. These are the accepted file formats: .doc, .docx, .rtf, .text, .txt';
  items[1] = 'One image for your homepage. This image should idealy be a high quality image that is 300dpi.';
  items[2] = 'One image to be used on the Biography Page of your site.';
  items[3] = 'Up to eight images that you would like placed in your gallery.';
  items[4] = 'One image that you would like to have featured in the Live Events section of the Moderato Template';
  items[5] = 'One image that you would like featured in the circular image space in the Biography section of the Power Chord template';
  items[6] = 'One image that you would like to have featured in the Contact section of the Power Chord template';
  items[7] = 'An image for each member of your band. Make sure to provide their name and instrument. Up to six band members may be included.';
  items[8] = 'Direct links to where your music can be purchased online';
  items[9] = 'Direct links to online samples of your music (ie. SoundCloud, etc.)';
  items[10] = 'Direct links to any video you may have on Youtube or Vimeo.';

  // Appropriate lists are displayed based on template selection
  switch (templateList.value) {
    case 'Augmented Fifth':
      items.splice(4, 4);
      populateList();
      break;
    case 'Dorian Minor':
      items.splice(4, 4);
      populateList();
      break;
    case 'Moderato':
      populateList();
      break;
    case 'Power Chord':
      items.splice(7, 1);
      populateList();
      break;
    default:
      needsList.innerHTML = '';
      break;
  };

  // Function to populate requirement list
  function populateList() {

    for(var i = 0; i < items.length; i++) {
      let newLi = document.createElement('li');
      needsList.appendChild(newLi);
      newLi.style.paddingLeft = '12px';
      newLi.innerHTML = items[i];
    };
  }

}
};
