import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 bg-blue-500 text-white">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/essays">Essays</Link>
        <Link href="/login">Login</Link>
        <Link href="/member">Member Page</Link>
      </nav>
    </header>
  );
};

export default Header;