const scriptURL = 'https://script.google.com/macros/s/AKfycbx-ZzfbneGsZ5Bs95-xHMuSBG5vOBtiC2sRFbvHrDk5AUX0NebtHTbGWMULv-x6FAqs/exec';
const form = document.forms['submit-to-google-sheet'];
const sucess = document.getElementById('success');
const progressText = document.getElementById('progressText');
const url = './loading.html';

form.addEventListener('submit', e => {
  e.preventDefault();
  // Simulasi loading (misalnya, fetch data dari server)
  const progressBar = document.getElementById('progressBar');
  progressBar.style.transition = 'width 5s ease-in-out';
  progressBar.style.width = "0%";
  progressText.textContent = "Sending data...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      // Update progress bar setelah form dikirim
      const progressInterval = setInterval(() => {
        const currentWidth = parseInt(progressBar.style.width);
        if (currentWidth >= 100) {
          clearInterval(progressInterval);
          progressText.textContent = "Success! Redirecting...";
          // Sembunyikan progress bar setelah beberapa waktu
          setTimeout(() => {
            progressBar.style.display = 'none';
            window.location.replace(url);
          }, 2000);
        } else {
          progressBar.style.width = `${currentWidth + 10}%`;
        }
      }, 100);
    })
    .catch(error => {
      console.error('Error!', error.message);
      progressText.textContent = "Error occurred!";
      // Sembunyikan progress bar setelah beberapa waktu
      setTimeout(() => {
        progressBar.style.display = 'none';
      }, 2000);
    });
});