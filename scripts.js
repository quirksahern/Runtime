document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    const popup1 = document.getElementById('popup1');
    const popup2 = document.getElementById('popup2');

    // Step 1: Show popup and buttons after typing 5 characters
    inputField.addEventListener('input', function() {
        if (inputField.value.length === 5) {
            popup1.style.display = 'block';
        }
    });

    // Step 2: Check if the user clicked the correct button to continue
    document.getElementById('blueBtn').addEventListener('click', function() {
        popup1.style.display = 'none';
        inputField.focus();
    });

    // Step 3: Show popup and buttons after typing 15 characters
    inputField.addEventListener('input', function() {
        if (inputField.value.length === 15) {
            popup2.style.display = 'block';
        }
    });

    // Step 4: Check if the user clicked the correct button to continue
    document.getElementById('nightBtn').addEventListener('click', function() {
        popup2.style.display = 'none';
        inputField.focus();
    });

    // Step 5: Redirect to the completion page after typing 20 characters
    inputField.addEventListener('input', function() {
        if (inputField.value.length === 20) {
            window.location.href = "finish-page.html";
        }
    });
});

// Clear input field when returning from completion page
document.getElementById('inputField').value = ''; // Clear input field doesn't seem to be working well
