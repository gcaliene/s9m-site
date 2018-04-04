///////////////////////////////
// TEMPLATE UPLOAD REQUIREMENTS
///////////////////////////////
const needsList = document.querySelector('#require');
const templateList = document.querySelector('#templates');

// Check value of template selection dropdown then open requirement window
function requirements() {
  // Chosen template is displayed
  needsList.innerHTML = `The ${templateList.value} template requires the following uploads for you to make:`;





  // Array of requirement items
  let items = ['Send us your artist/band biography. These are the accepted file formats: .doc, .docx, .rtf, .text, .txt', 'One image for your homepage. This image should idealy be a high quality image that is 300dpi.', 'One image to be used on the Biography Page of your site.', 'Up to eight images that you would like placed in your gallery.', 'One image that you would like to have featured in the Live Events section of the Moderato Template', 'One image that you would like featured in the circular image space in the Biography section of the Power Chord template', 'One image that you would like to have featured in the Contact section of the Power Chord template', 'An image for each member of your band. Make sure to provide their name and instrument. Up to six band members may be included.', 'Direct links to where your music can be purchased online', 'Direct links to online samples of your music (ie. SoundCloud, etc.)', 'Direct links to any video you may have on Youtube or Vimeo.'];

  // Appropriate lists are displayed based on template selection
  if(templateList.value == 'Augmented Fifth') {
    items.splice(4, 4);
    populateList();
  }

  // Function to populate requirement list
  function populateList() {

    for(var i = 0; i < items.length; i++) {
      let newLi = document.createElement('li');
      needsList.appendChild(newLi);
      newLi.innerHTML = items[i];
    };
  }

};
