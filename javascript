const toggle = document.createElement('button');
toggle.innerHTML = '🌓';
toggle.style.position = 'fixed';
toggle.style.bottom = '20px';
toggle.style.right = '20px';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
