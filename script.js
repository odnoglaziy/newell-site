document.querySelectorAll('.wallet button').forEach(btn => {
    btn.addEventListener('click', async () => {
        const text = btn.innerText.trim();
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            // fallback для http:// и file://
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        btn.classList.add('copied');
        setTimeout(() => btn.classList.remove('copied'), 1000);
    });
});
