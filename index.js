// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 49.55411743057934, lng: 25.59078621238332 },
//     zoom: 8,
//   });
// }

//Phone validation
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+380 (99) 999 99 99");
im.mask(selector);

//Валидация полей имени и мыла
let validateForms = function (selector, rules, succesModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    //отправка формы по нужде)
    submitHandler: function (form) {},
  });
};

validateForms(
  ".form",
  {
    name: { required: true, minLength: 3, maxLength: 10 },
    email: { required: true, email: true },
    tel: { required: true },
    text: { required: true },
  },
  ".valSelect",
  "send goal"
);
// Regular custom validator via RegExp, similar checks for phone numbers and other fields
// THIS IS ONLY AN EXAMPLE
// const email = document.feedback.emailValidator;
// const name = document.feedback.nameValidator;
// function ValidateEmail(name, email) {
//   let validRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//   if (email.value.match(validRegex)) {
//     if (name.value.length >= 3 && name.value.length <= 10) {
//       name.classList.remove("isNotValid");

//       name.classList.add("isValid");
//     } else {
//       name.classList.add("isNotValid");
//     }
//     email.classList.remove("isNotValid");

//     email.classList.add("isValid");
//   } else {
//     email.classList.add("isNotValid");
//   }
// }
//Scrolling animation
window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 150) {
    document.getElementById("tableInfo").style = "display:block;";
  } else {
    document.getElementById("tableInfo").style = "display:none;";
  }
  if (scrolled > 350) {
    document.getElementById("formContainer").style = "display:block;";
  } else {
    document.getElementById("formContainer").style = "display:none;";
  }
};
