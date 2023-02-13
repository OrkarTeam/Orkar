const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = form.elements.email.value;
    const wallet = form.elements.wallet.value;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const bio = form.elements.bio.value;
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('wallet', wallet);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('bio', bio);
    
    const pfp = form.elements.pfp.files[0];
    formData.append('pfp', pfp);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/signup', true);
    
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    };
    
    xhr.send(formData);
});
