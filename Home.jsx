import { useState, useEffect } from 'react';

export default function Home() {
  const [wallets, setWallets] = useState({
    invest: 0,
    profit: 0,
    staking: 0,
  });

  const [uid, setUid] = useState('100001');
  const [referral, setReferral] = useState('');

  useEffect(() => {
    setWallets({ invest: 200, profit: 40, staking: 160 });
    setReferral('RSX100001');
  }, []);

  const handleWithdraw = () => {
    const amount = wallets.profit;
    const fee = amount * 0.02;
    const receive = amount - fee;
    alert(`A 2% fee (${fee.toFixed(2)} USDT) will be charged. You will receive ${receive.toFixed(2)} USDT. Request sent.`);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#6b21a8' }}>Royal Staking</h1>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ background: '#f3e8ff', padding: '1rem', borderRadius: '1rem', flex: 1 }}>
          <p>Invest Wallet</p>
          <p style={{ fontSize: '1.5rem' }}>{wallets.invest} USDT</p>
        </div>

        <div style={{ background: '#f3e8ff', padding: '1rem', borderRadius: '1rem', flex: 1 }}>
          <p>Profit Wallet</p>
          <p style={{ fontSize: '1.5rem' }}>{wallets.profit} USDT</p>
          <button onClick={handleWithdraw} style={{ marginTop: '1rem', width: '100%' }}>
            Withdraw
          </button>
        </div>

        <div style={{ background: '#f3e8ff', padding: '1rem', borderRadius: '1rem', flex: 1 }}>
          <p>Staking Wallet</p>
          <p style={{ fontSize: '1.5rem' }}>{wallets.staking} USDT</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <p>UID: <strong>{uid}</strong></p>
        <p>Referral Code: <strong>{referral}</strong></p>
      </div>
    </main>
  );
}
