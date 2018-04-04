///////////////////////////////
// TEMPLATE UPLOAD REQUIREMENTS
///////////////////////////////
const needsList = document.querySelector('#require');
const templateList = document.querySelector('#templates');

// Check value of template selection dropdown then open requirement window
function requirements() {
  needsList.innerHTML = `The ${templateList.value} template requires the following uploads for you to make:`;










  let newLi = document.createElement('li');
  needsList.appendChild(newLi);
  newLi.innerHTML = '6 pictures';
}
