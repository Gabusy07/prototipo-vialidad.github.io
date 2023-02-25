function openPDF() {
    window.open('./XXXXXXXXXXXXXXXXXX.pdf', '_blank');
  }

  function validateForm(form) {
    // Get the values of the email and password fields
    var email = form.email.value;
    var password = form.password.value;
  
    // Check if the email and password match the saved values
    if (email === 'saved_email@example.com' && password === 'saved_password') {
      // Redirect to index.html if login is successful
      window.location.href = 'https://github.com/No-Country/C9-G34/tree/feat/profile-page/frontend/src/pages';
    } else {
      // Redirect to errorPage.html if login fails
      window.location.href = 'https://www.youtube.com/watch?v=b9O9NI-RJ3o&t=871s';
    }
  }