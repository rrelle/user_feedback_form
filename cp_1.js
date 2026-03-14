const form= document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const commentCount = document.getElementById('comment-count');
const feedbackDisplay = document.getElementById('feedback-display');

commentsInput.addEventListener('input', function() {
    commentCount.textContent = `Comment count: ${commentsInput.value.length}`;
});
//Tooltip message for submit button
function showTooltip(field, message) {
    let tooltip = field.nextElementSibling;
    if (!tooltip || !tooltip.classList.contains('tooltip')) {
        tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        field.insertAdjacentElement('afterend', tooltip);
    }
    tooltip.textContent = message;
}
function hideTooltip(field) {
    let tooltip = field.nextElementSibling;
    if (tooltip && tooltip.classList.contains('tooltip')) 
        tooltip.remove();
    }
    //Mouseover event for name
nameInput.addEventListener('mouseover', function() {
    showTooltip(nameInput, 'Please enter your full name');
});
//Mouseout event for name
nameInput.addEventListener('mouseout', function() {
    hideTooltip(nameInput);
});
//Mouseover event for email
emailInput.addEventListener('mouseover', function() {
    showTooltip(emailInput, 'Please enter a valid email address');
});
//Mouseout event for email
emailInput.addEventListener('mouseout', function() {
    hideTooltip(emailInput);
});
//Mouseover event for comments
commentsInput.addEventListener('mouseover', function() {
    showTooltip(commentsInput, 'Please provide your feedback');
});
//Mouseout event for comments
commentsInput.addEventListener('mouseout', function() {
    hideTooltip(commentsInput);
});
//Submit event for form
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const Olderror = document.querySelectorAll('.error');
    Olderror.forEach(error => error.remove());
    let isValid = true;
    if (nameInput.value.trim() === '') {
        const error = document.createElement('div');
        error.classList.add('error');
        error.textContent = 'Please enter your name';
        nameInput.parentNode.insertBefore(error, nameInput.nextSibling);
        isValid = false;
    }
    if (emailInput.value.trim() === '') {
        const error = document.createElement('div');
        error.classList.add('error');   
        error.textContent = 'Please enter your email';
        emailInput.parentNode.insertBefore(error, emailInput.nextSibling);
        isValid = false;
    }
    if (commentsInput.value.trim() === '') {
        const error = document.createElement('div');
        error.classList.add('error');   
        error.textContent = 'Please enter your comments';
        commentsInput.parentNode.insertBefore(error, commentsInput.nextSibling);
        isValid = false;
    }
    if (isValid) {
        const entry = document.createElement('div');
        entry.classList.add('feedback-entry');
        entry.innerHTML = `<strong>${nameInput.value}</strong> (${emailInput.value}): <p>${commentsInput.value}</p>`;
        feedbackDisplay.appendChild(entry);
        form.reset();
        commentCount.textContent = 'Comment count: 0';
    }
});
//event bubbling for feedback entries
form.addEventListener('input', function(event) {
    console.log(`Input event from ${event.target.id}`);
});


