// ---- Connect Wallet (MetaMask) ----
const connectWalletBtn = document.getElementById('connectWallet');

connectWalletBtn.addEventListener('click', async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask not detected. Please install the extension and try again.');
    return;
  }
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const short = accounts[0].slice(0, 6) + '...' + accounts[0].slice(-4);
    connectWalletBtn.textContent = short;
    connectWalletBtn.classList.remove('btn-outline');
    connectWalletBtn.classList.add('btn-ghost');
  } catch (e) {
    console.error(e);
    alert('Connection cancelled.');
  }
});

// ---- Mint placeholder ----
document.getElementById('mintBtn').addEventListener('click', () => {
  alert('Mint function coming soon!');
});
