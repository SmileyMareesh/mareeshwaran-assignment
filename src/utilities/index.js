export const calculateRewards = (amount) => {
    if (amount > 100) {
      return 2 * (amount - 100) + 50; // 2 points for every dollar over $100 + 1 point for every dollar between $50 and $100
    } else if (amount > 50) {
      return amount - 50; // 1 point for every dollar between $50 and $100
    }
    return 0; // No points for amounts less than $50
  };

  export const API_URL = 'http://localhost:3001/'