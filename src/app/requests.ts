import React from 'react';

export async function getAutocomplete() {
  const res = await fetch(
    'https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete'
  );
  return res.json();
}
