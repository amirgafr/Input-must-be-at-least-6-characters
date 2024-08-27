


    const input = document.getElementById('myInput');
    const errorMessage = document.getElementById('errorMessage');

    input.addEventListener('input', function() {
      if (input.value.length < 6) {
        errorMessage.textContent = 'Input must be at least 6 characters long.';
      } else {
        errorMessage.textContent = '';
      }
    });