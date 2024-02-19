document.addEventListener('DOMContentLoaded', function () {
  // Add this script to handle the click event for the "Resumé" icon
  document.getElementById('resumeLink').addEventListener('click', function (event) {
    event.preventDefault();

    // Specify the URL of the Resumé PDF file
    var resumeUrl = 'https://github.com/wykky/portfolio/blob/main/images/RESUME%CC%81_V8.pdf';

    // Open a popup window with the Resumé PDF file
    window.open(resumeUrl, 'ResumePopup', 'width=600,height=400,scrollbars=yes');
  });
});
