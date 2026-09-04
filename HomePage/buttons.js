    function copyUsername() {
  // Zkopíruje text do schránky
  navigator.clipboard.writeText('larrythefr0g').then(() => {
    // Najde popup element
    const toast = document.getElementById('toast');
    
    // Přidá třídu 'show', která spustí CSS animaci
    toast.className = "toast-notification show";
    
    // Po 3 sekundách (doba trvání animace) třídu odebere, aby se schoval
    setTimeout(() => { 
      toast.className = toast.className.replace("show", ""); 
    }, 3000);
  }).catch(err => {
    console.error('Error copying username: ', err);
  });
}

