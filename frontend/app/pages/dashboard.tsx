'use client'

import React from 'react';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href="/team">Manage Teams</Link>
        </li>
        <li>
          <Link href="/player">Manage Players</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;