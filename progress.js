document.getElementById('navigate-to-progress-bar').addEventListener('click', () => {
    document.getElementById('main-ui').style.display = 'none';
    document.getElementById('progress-bar-ui').style.display = 'block';
    updateProgress(0); 
    startProgressAnimation();
});

document.getElementById('back-to-main').addEventListener('click', () => {
    document.getElementById('progress-bar-ui').style.display = 'none';
    document.getElementById('main-ui').style.display = 'flex';
});

document.querySelectorAll('#back-to-home').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'habittracker.html';
    });
});

function updateProgress(newProgress) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    // Ensure progress is within 0-100 range
    const progress = Math.min(100, Math.max(0, newProgress));
    
    progressBar.style.width = `${progress}%`;
    progressText.innerText = `${progress}%`;
}

function startProgressAnimation() {
    let progress = 0;
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
        } else {
            progress += 10;
            updateProgress(progress);
        }
    }, 500);
}
