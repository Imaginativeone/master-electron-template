// This file is required by the index.html file and will be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Chromium provides a parser for the returned DOM data.
const parser = new DOMParser();

const linksSection       = document.querySelector('.links');
const errorMessage       = document.querySelector('.error-message');
const newLinkForm        = document.querySelector('.new-link-form');
const newLinkUrl         = document.querySelector('.new-link-url');
const newLinkSubmit      = document.querySelector('.new-link-submit');
const clearStorageButton = document.querySelector('.clear-storage');

newLinkUrl.addEventListener('keyup', () => {
  newLinkSubmit.disabled = !newLinkUrl.validity.valid;
});

const clearForm = () => {
  newLinkUrl.value = null;
};

newLinkForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const url = newLinkUrl.value; // From the input control...

  fetch(url)
    .then(response => response.text())
    .then(parseResponse)
    .then(findTitle)
});

// Helper functions for zero-ing in on the <title> element
// See the definition of a "calculation" in the book, "Grokking Simplicity" by Eric Normand - 
// a book about Functional Programming (FP). Normand also has an interesting podcast.
const parseResponse = (text) => {
  // console.log(parser.parseFromString(text, 'text/html'));
  return parser.parseFromString(text, 'text/html');
}

const findTitle = (nodes) => {
  // console.log(nodes.querySelector('title').innerText);
  return nodes.querySelector('title').innerText;
}
