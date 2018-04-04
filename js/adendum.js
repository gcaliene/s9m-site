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

};
