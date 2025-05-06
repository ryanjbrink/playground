document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// JavaScript for Job Search Dashboard
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const jobType = document.getElementById('job-type').value;

    alert(`Filters applied:\nLocation: ${location}\nJob Type: ${jobType}`);
});