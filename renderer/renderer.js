// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

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
