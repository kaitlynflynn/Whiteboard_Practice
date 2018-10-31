// Bitcoin Trading
// You're trying to make your fortune by trading Bitcoin. Suppose you want to automate this task. Write a function findMaxProfit that receives an array of today's Bitcoin prices. Your function should return the maximum profit you can make from a single buy and sell. You must buy first before selling; shorting is not allowed.

// Examples:
// const bitcoinPrices = [1050, 270, 1540, 3800, 2];
// findMaxProfit(bitcoinPrices);   // should return 3530, which is the max profit you can make from these prices by buying at 270 and selling at 3800

//WHITEBOARD YOUR APPROACH HERE: 
/* 
  Our function traverses the array of prices in a greedy
  fashion, keeping track of both the max profit we've seen
  up to that point as well as the min price we've seen so 
  far. On the next iteration, upate our variables if we find
  find a higher max profit and/or a new min price.
  In the case that we receive an array of all descending prices,
  our function will return the least negative value, though this
  is simply a design choice. The interviewee could choose to
  return 0 instead if the function would return a negative value.
*/

function findMaxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = prices[1] - minPrice;
  
    for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
  
      maxProfit = Math.max(currentPrice - minPrice, maxProfit);
      minPrice = Math.min(currentPrice, minPrice);
    }
  
    return maxProfit;
  }