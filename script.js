function validateForm() {
    let email =  document.getElementById('email').value;
    let password =  document.getElementById('password').value;
    const alertDiv =  document.getElementById('alert');

    if (email === '' || password === '') {
        alertDiv.textContent = 'Please fill both email and password!';
      } else {
        alertDiv.textContent = '';
        window.location.href = "https://www.google.com/";
      }  
}