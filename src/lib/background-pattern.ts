export const generatePatternCells = (seed: number) => {
  return Array(400)
    .fill(0)
    .map((_, i) => {
      // Use the index and seed for stable "randomness"
      const isWhite = ((i * 13 + seed) % 100) > 80;
      return isWhite;
    });
};

// Pre-generate patterns for different sections
export const patternCells = generatePatternCells(1);
export const heroPatternCells = generatePatternCells(2);
export const benefitsPatternCells = generatePatternCells(3); 