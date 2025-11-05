document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // 50px 이상 스크롤되면
            header.classList.add('scrolled'); // 'scrolled' 클래스 추가
        } else {
            header.classList.remove('scrolled'); // 아니면 제거
        }
    });

    // 부드러운 스크롤 (Anchor Link)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});