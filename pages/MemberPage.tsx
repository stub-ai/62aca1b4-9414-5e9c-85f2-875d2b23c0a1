import React from 'react';
import Header from '../components/Header';

const MemberPage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold mb-4">Exclusive Content for Members</h1>
      {/* Here you can map through your exclusive content and display them */}
    </div>
  );
};

export default MemberPage;