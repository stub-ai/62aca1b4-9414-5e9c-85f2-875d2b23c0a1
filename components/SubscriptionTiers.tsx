import React from 'react';

const SubscriptionTiers = () => {
  const tiers = [
    { name: 'Basic', accessLevel: 'Limited' },
    { name: 'Standard', accessLevel: 'Moderate' },
    { name: 'Premium', accessLevel: 'Full' },
    { name: 'Ultimate', accessLevel: 'Unlimited' },
  ];

  return (
    <div>
      <h1>Subscription Tiers</h1>
      {tiers.map((tier, index) => (
        <div key={index}>
          <h2>{tier.name}</h2>
          <p>Access Level: {tier.accessLevel}</p>
          {/* Here you can add a button to subscribe to this tier */}
        </div>
      ))}
    </div>
  );
};

export default SubscriptionTiers;