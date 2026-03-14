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
    if (tooltip && tooltip.classList.contains('tooltip')) {
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