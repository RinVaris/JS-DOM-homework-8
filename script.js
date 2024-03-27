"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const input = document.getElementById("from");
const text = document.querySelector("span");

input.addEventListener("input", () => {
  text.textContent = input.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

btn.addEventListener("click", () => {
  message.classList.add("animate_animated", "animate_fadeInLeftBig");
  message.style.visibility = "visible";
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('.form-control');

  function validateField(field) {
    const isValid = field.value.trim() !== '';
    if (isValid) {
      field.classList.remove("error");
    } else {
      field.classList.add("error");
    }
    return isValid;
  }

  function validateForm() {
    let formIsValid = true;
    inputs.forEach(function(input) {
      if (!validateField(input)) {
        formIsValid = false;
      }
    });
    return formIsValid;
  }

  function onSubmit(event) {
    event.preventDefault();
    const formIsValid = validateForm();
    if (formIsValid) {
      console.log("Форма отправлена");
    } else {
      console.log("Ошибка");
    }
  }

  form.addEventListener("submit", onSubmit);

  inputs.forEach(function(input) {
    input.addEventListener("input", function() {
      validateField(input);
    });
  });
});
