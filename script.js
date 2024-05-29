document.getElementById('loginBtn').addEventListener('click', function() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let staticUsername = 'mmm';
    let staticPassword = '123mmm';

    if (username === staticUsername && password === staticPassword) {
        alert('Вы успешно вошли в систему!');
        document.getElementById('questionSection').style.display = 'block';
        document.getElementById('loginBtn').style.display = 'none'; 
        document.getElementById('username').style.display = 'none'; 
        document.getElementById('password').style.display = 'none'; 
    } else {
        alert('Неправильный логин или пароль!');
    }
});

document.getElementById('QuestionBtn').addEventListener('click', function() {
    const question = prompt('Введите ваш вопрос:');
    if (question) {
        alert(`Ваш вопрос: "${question}" был добавлен!`);
        document.querySelector('.container').style.display = 'none'; 
    }
});
