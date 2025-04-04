// Seeded random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate a stable pattern of 400 cells
export const patternCells = Array(400)
  .fill(0)
  .map((_, i) => {
    // Use the index as a stable seed for "randomness"
    return seededRandom(i * 13) > 0.8;
  }); 