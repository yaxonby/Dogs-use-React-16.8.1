import React from 'react';

export default function Loading({ isLoading, pastDelay, error }) {
  if (isLoading && pastDelay) {
    return <p>Loading...</p>;
  } if (error && !isLoading) {
    return <p>Error!</p>;
  }
  return null;
}
