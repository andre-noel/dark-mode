// Pega o checkbox
const botaoDark = document.getElementById('toggle-dark');

// Verifica se tem no localStorage seleção do dark theme
if (localStorage.getItem('data-theme') == 'dark') {
  botaoDark.checked = true;
}

// Liga a função ao checkbox
botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (!botaoDark.checked){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
});