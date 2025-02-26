// フォーム送信のハンドリング
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('メッセージを受け付けました。');
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 