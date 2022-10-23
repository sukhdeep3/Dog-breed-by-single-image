let dropdown = $("#dropdown");
let allowSubmit = true;
let breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data) {
  let list = data.message;
  // console.log(list);

  for (const breed in list) {
    // console.log(breed);
    dropdown.append(`
    <option id="option" value="${breed}">${breed}</option>`);
  }
});
dropdown.change(function () {
  allowSubmit = true;
});

function displayDog(breed) {
  let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

  $("#imageCont img").remove();
  // console.log('hello3');

  $.get(url, function (data) {
    // console.log('hello4');
    let imageUrl = data.message;
    $("#imageCont").append(
      '<img style="height: 100%; width: 100%" src="' +
        imageUrl +
        '" alt="' +
        breed +
        '">'
    );
  });
}

$("#getImage-btn").click(function (e) {
  e.preventDefault();

  // console.log("Hello1");
  if (allowSubmit) {
    // console.log('hello2');
    breed = dropdown.val();
    displayDog(breed);
    allowSubmit = false;
  }
});

$("#next-btn").click(function (e) {
  // console.log('hello5');
  e.preventDefault();
  if (breed !== undefined) {
    // console.log('hello6');
    displayDog(breed);
  }
});
