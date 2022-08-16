document.getElementById('btn-submit').addEventListener('click', function(){
    
    const emailField = document.getElementById('email-text');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email === 'admin@admin.com' && password === '12345'){
        window.location.href = 'balance.html';
    }
    else{
        alert('Please give valid password')
    }
    
})