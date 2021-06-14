$('body').on('click', '.showpassword1', function () {
  if ($('#password-input1').attr('type') == 'password') {
    $('#password-input1').attr('type', 'text');
  } else {
    $('#password-input1').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.showpassword2', function () {
  if ($('#password-input2').attr('type') == 'password') {
    $('#password-input2').attr('type', 'text');
  } else {
    $('#password-input2').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.showpassword3', function () {
  if ($('#password-input3').attr('type') == 'password') {
    $('#password-input3').attr('type', 'text');
  } else {
    $('#password-input3').attr('type', 'password');
  }
  return false;
});

const inputWrappers = document.querySelectorAll('.form-wrapper');
inputWrappers.forEach((el) => {
  el.querySelector('.form-input').addEventListener('focus', () => {
    el.querySelector('.form-dropdown-wrapper').classList.toggle('active');
  });
  el.querySelectorAll('.form-dropdown-item').forEach((item) => {
    item.addEventListener('click', () => {
      el.querySelector('.form-input').value = item.dataset.city;
      el.querySelector('.form-dropdown-wrapper').classList.toggle('active');
    });
  });
});

document.querySelector('.header__burger').addEventListener('click', () => {
  document.querySelector('.navigation').classList.toggle('active');
  document.body.classList.toggle('lock');
});
