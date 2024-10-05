"use client";

import CoinScene from '@/components/CoinScene';

export default function HomePage() {
  return <>
  <h1 className='text-2xl font-semibold text-white text-center'>here is 3d model addded soon</h1>
  <p>this is under construction here a coin 3d model added and it will toss and it will show the tail and head with easeing animation </p>
  <CoinScene shouldFlip={true} />
  </>
}