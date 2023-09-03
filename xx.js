const imgInputHelper = document.getElementById("add-single-img");
const imgInputHelperLabel = document.getElementById("add-img-label");
const imgContainer = document.querySelector(".custom__image-container");
const imgFiles = [];

const addImgHandler = () => {
    const file = imgInputHelper.files[0];
    if (!file) return;

    // Generate img preview
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const newImg = document.createElement("img");
        newImg.src = reader.result;

        // Clear existing images
        imgContainer.innerHTML = '';

        // Store the selected image
        selectedImage = file;

        // Append the new image and delete button
        imgContainer.appendChild(newImg);
        imgContainer.appendChild(deleteButton);

        // Show the delete button
        deleteButton.style.display = "block";
    };

    // Reset image input
    imgInputHelper.value = "";
  };
  imgInputHelper.addEventListener("change", addImgHandler);



  const deleteImgHandler = () => {
    // Clear the selected image
    selectedImage = null;

    // Clear the image container and hide the delete button
    imgContainer.innerHTML = '';
    deleteButton.style.display = "none";

    // Reset the input field
    imgInputHelper.value = "";
};

deleteButton.addEventListener("click", deleteImgHandler);
  document
    .querySelector(".custom__form")
    .addEventListener("submit", customFormSubmitHandler);

