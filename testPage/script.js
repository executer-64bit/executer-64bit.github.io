document.addEventListener('DOMContentLoaded', () => {
  // 1. Afficher la date actuelle au format Terminal (ex: [2026-07-24 17:37])
  const dateSpan = document.getElementById('current-date');
  if (dateSpan) {
    const now = new Date();
    const formattedDate = `[${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}]`;
    dateSpan.textContent = formattedDate;
  }

  // 2. Survol des sujets pour "root: hexdump "
  const hoveredTopicSpan = document.getElementById('hovered-topic');
  const topicLinks = document.querySelectorAll('.topic-link');

  topicLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      hoveredTopicSpan.textContent = link.textContent;
    });

    link.addEventListener('mouseleave', () => {
      hoveredTopicSpan.textContent = '';
    });
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const btnShowCipher = document.getElementById('btn-show-cipher');
  const cipherDisplay = document.getElementById('cipher-display');
  const ciphertextContent = document.getElementById('ciphertext-content');

  // Exemple de bloc Ciphertext AES-256-GCM + IV (Vecteur d'initialisation) pré-calculé
  // Vous pouvez remplacer cette chaîne par votre propre Ciphertext produit en local
  const AES_256_CIPHERTEXT = 
    "CIPHER: 5dec643e282da03586be9e22abe1adbf8ade17f33e164771a30d29881b0c4503 | " + 
    "IV: 5f1a437d0dea59ede42cd83260fad463";

  if (btnShowCipher) {
    btnShowCipher.addEventListener('click', () => {
      // Affichage du bloc
      cipherDisplay.classList.remove('hidden');
      
      // Insertion du ciphertext
      ciphertextContent.textContent = AES_256_CIPHERTEXT;
    });
  }
});