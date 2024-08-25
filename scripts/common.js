
// querySelectorAll() <- 복수 DOM 선택 API
// querySelector()
// getElementById()

const hamburgerBtnEl = document.getElementById('hamburgerBtn');
const handleClickHamburger = () => {
    const bodyEl = document.body
    bodyEl.classList.toggle('hamburger-off');
}

hamburgerBtnEl.addEventListener('click', handleClickHamburger)