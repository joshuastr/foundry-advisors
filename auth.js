// Password protection check
// Shared across all protected pages
if (sessionStorage.getItem('foundry_auth') !== 'true') {
    window.location.href = 'login.html';
}
