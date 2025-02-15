document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[src="/assets/erpnext/images/erpnext-logo-blue.png"]');
    images.forEach(function(img) {
        img.src = '/files/i36t-Module-Core.png';
        img.style.visibility = 'visible';
        var parentDiv = img.closest('a');
        if (parentDiv) {
            parentDiv.querySelector('.app-title').textContent = 'Core36T';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[src="/assets/hrms/images/frappe-hr-logo.svg"]');
    images.forEach(function(img) {
        img.src = '/files/i36t-Module-HR.png';
        img.style.visibility = 'visible';
        var parentDiv = img.closest('a');
        if (parentDiv) {
            parentDiv.querySelector('.app-title').textContent = 'HR36T';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[src="/assets/helpdesk/desk/favicon.svg"]');
    images.forEach(function(img) {
        img.src = '/files/i36t-Module-Helpdesk.png';
        img.style.visibility = 'visible';
        var parentDiv = img.closest('a');
        if (parentDiv) {
            parentDiv.querySelector('.app-title').textContent = 'Helpdesk36T';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[src="/assets/insights/frontend/insights-logo.png"]');
    images.forEach(function(img) {
        img.src = '/files/i36t-Module-Insights.png';
        img.style.visibility = 'visible';
        var parentDiv = img.closest('a');
        if (parentDiv) {
            parentDiv.querySelector('.app-title').textContent = 'Insights36T';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[src="/assets/builder/frontend/builder_logo.png"]');
    images.forEach(function(img) {
        img.src = '/files/i36t-Module-Builder.png';
        img.style.visibility = 'visible';
        var parentDiv = img.closest('a');
        if (parentDiv) {
            parentDiv.querySelector('.app-title').textContent = 'Builder36T';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[src="/assets/healthcare/images/healthcare.svg"]');
    images.forEach(function(img) {
        img.src = '/files/i36t-Module-Healthcare.png';
        img.style.visibility = 'visible';
        var parentDiv = img.closest('a');
        if (parentDiv) {
            parentDiv.querySelector('.app-title').textContent = 'Healthcare36T';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img[src="/assets/lms/images/lms-logo.png"]');
    images.forEach(function(img) {
        img.src = '/files/i36t-Module-Learning.png';
        img.style.visibility = 'visible';
        var parentDiv = img.closest('a');
        if (parentDiv) {
            parentDiv.querySelector('.app-title').textContent = 'Learning36T';
        }
    });
});