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
    