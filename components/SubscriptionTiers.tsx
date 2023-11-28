import React from 'react';

const SubscriptionTiers = () => {
  const tiers = [
    { name: 'Basic', accessLevel: 'Limited' },
    { name: 'Standard', accessLevel: 'Moderate' },
    { name: 'Premium', accessLevel: 'Full' },
    { name: 'Ultimate', accessLevel: 'Unlimited' },
  ];

  return (
    <div className="p-4 rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-4">Subscription Tiers</h1>
      {tiers.map((tier, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-xl font-semibold">{tier.name}</h2>
          <p>Access Level: {tier.accessLevel}</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Subscribe</button>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionTiers;