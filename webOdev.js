document.addEventListener('DOMContentLoaded', function() {
    // Sayfa yüklendiğinde oturum kontrolü yapılacak
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'login.html'; // Eğer oturum yoksa, kullanıcıyı giriş sayfasına yönlendir
    }
    
    // Giriş formunun gönderilmesi olayını dinle
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
        
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
        
            if (username === 'admin' && password === 'password') {
                sessionStorage.setItem('loggedIn', true); // Oturum bilgisini sakla
                window.location.href = 'webOdev.html'; // Doğru kullanıcı adı ve şifreyle anasayfaya yönlendir
            } else {
                document.getElementById('errorMessage').innerText = 'Kullanıcı adı veya şifre yanlış';
            }
        });
    }
});

