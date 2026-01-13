document.addEventListener('DOMContentLoaded', () => {
    const notifBtn = document.getElementById('notification');
    const profileBtn = document.getElementById('profile');
    const notifDropdown = document.getElementById('notifDropdown');
    const profileDropdown = document.getElementById('profileDropdown');

    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown?.classList.remove('header__dropdown--active');
            notifDropdown.classList.toggle('header__dropdown--active');
        });
    }

    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            notifDropdown?.classList.remove('header__dropdown--active');
            profileDropdown.classList.toggle('header__dropdown--active');
        });
    }

    window.addEventListener('click', () => {
        notifDropdown?.classList.remove('header__dropdown--active');
        profileDropdown?.classList.remove('header__dropdown--active');
    });
});