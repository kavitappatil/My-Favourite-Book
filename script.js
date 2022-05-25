var comments, item;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


comments = [];


document.getElementById('add').addEventListener('click', (event) => {
  comments.unshift(getNumberOrString(document.getElementById('ycomment').value));
  let element_display_comments = document.getElementById('display_comments');
  element_display_comments.replaceChildren();
  comments.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_display_comments.appendChild(new_li);
  });
  let element_ycomment = document.getElementById('ycomment');
  element_ycomment.innerText = '';

});