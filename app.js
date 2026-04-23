// Smooth Simulated Loading
function loadView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('loader').style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById(viewId).classList.add('active');
        window.scrollTo(0, 0);
    }, 300); // Faster, iOS-like snappy load
}

// Instant Back Navigation
function navigateTo(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
}

// Interactive List Striking
function toggleStrike(checkbox) {
    const container = checkbox.closest('.ingredient-item');
    if (checkbox.checked) {
        container.classList.add('checked');
    } else {
        container.classList.remove('checked');
    }
}

// Heart Icon Toggle
function toggleFavorite(element) {
    element.classList.toggle('active');
}

// Dark Mode Control
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
