const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const message = document.getElementById('input-message');
const subject = document.getElementById('subject');
const submit = document.getElementById('form-contact');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

name.addEventListener('input', () => {
  if (name.value.trim().length >= 3) {
    nameError.classList.remove('error--visible');
  } else {
    nameError.innerText = 'Nome deve conter pelo menos 3 caracteres';
    nameError.classList.add('error--visible');
  }
});

email.addEventListener('input', () => {
  if (emailPattern.test(email.value)) {
    emailError.classList.remove('error--visible');
  } else {
    emailError.innerText = 'Email inválido';
    emailError.classList.add('error--visible');
  }
});

message.addEventListener('input', () => {
  if (message.value.trim() !== '') {
    messageError.classList.remove('error--visible');
  } else {
    messageError.innerText = 'Mensagem não pode ser vazia';
    messageError.classList.add('error--visible');
  }
});

submit.addEventListener('submit', (e) => {
  e.preventDefault();

  if (name.value.trim().length < 3 || !emailPattern.test(email.value) || message.value.trim() === '') {
    return;
  }

  let emailBody = `
  <b>Nome:</b> ${name.value}
  <br>
  <b>Email:</b> ${email.value}
  <br>
  <b>Message:</b>
  <br>
  ${message.value}
  `; 

  Email.send({
    SecureToken : "4db073bd-905a-47ea-917a-5588bc2887ab",
    To : 'ablemosjunior@gmail.com',
    From : "ablemosjunior@gmail.com",
    Subject : `${name.value} ${subject.value}`,
    Body : emailBody
  }).then(
    submit.innerHTML = `
      <div class="form__success">
        <div class="check"></div>
        <p class="form__confirm">E-mail enviado!</p>
      </div>
    `
  );
});

/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };