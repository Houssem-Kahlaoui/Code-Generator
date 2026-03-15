const passwordBox = document.getElementById('password');
const generateBtn = document.querySelector('.container button'); // Plus précis
const copyImg = document.querySelector('.display img');

function genererMotDePasse() {
    const longueur = 8;
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let motDePasse = '';
    
    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[indexAleatoire];
    }
    
    passwordBox.value = motDePasse;
    console.log('Mot de passe généré :', motDePasse); // Pour vérifier
}

function copierMotDePasse() {
    if (passwordBox.value) {
        passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value)
            .then(() => {
                alert('Mot de passe copié !');
            })
            .catch(err => {
                console.error('Erreur lors de la copie : ', err);
            });
    } else {
        alert('Générez d\'abord un mot de passe !');
    }
}

// Vérifier que les éléments existent
console.log('passwordBox:', passwordBox);
console.log('generateBtn:', generateBtn);
console.log('copyImg:', copyImg);

// Ajouter les événements
if (generateBtn) {
    generateBtn.addEventListener('click', genererMotDePasse);
    console.log('Événement ajouté au bouton');
}

if (copyImg) {
    copyImg.addEventListener('click', copierMotDePasse);
}

// Générer au chargement
window.addEventListener('load', genererMotDePasse);