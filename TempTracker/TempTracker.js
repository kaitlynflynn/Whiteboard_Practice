// Write a class TempTracker that tracks the max, min, mean, and mode of temperature values as they are inserted into the tracker. This class should have the following methods:

// insert() - records a new temperature.
// getMax() - returns the highest temperature we've seen so far.
// getMin() - returns the lowest temperature we've seen so far.
// getMean() - returns the mean of all temperatures we've seen so far.
// getMode() - returns a mode of all temperatures we've seen so far.
// Favor speeding up the get methods over the insert method. Aim to get each of the get methods down to constant runtime.

// getMean() should return a float. The rest of the methods can return integers. Temperatures should be recorded in Fahrenheit, so we can assume a range of 0 to 140.

// If there is more than one mode, return any of the modes.

// WHITEBOARD YOUR APPROACH HERE: 
class TempTracker {
    constructor() {
      // for mode
      // populate occurrences array with 0s from 0 to 140
      // 140 being the max temperature 
      this.occurrences = Array(140).fill(0);
      this.maxOccurrences = 0;
      this.mode = null;

      // for mean
      this.numberOfReadings = 0;
      this.totalSum = 0;
      this.mean = null;

      // for min and max
      this.minTemp = null;
      this.maxTemp = null;
  }

  insert(temp) {
    // for mode
    // increment the number of times this temp as appeared
    this.occurrences[temp]++;
    // update our maxOccurences and mode variables if necessary
    if (this.occurrences[temp] > this.maxOccurrences) {
      this.mode = temp;
      this.maxOccurrences = this.occurrences[temp];
    }

    // for mean
    this.numberOfReadings++;
    this.totalSum += temp;
    this.mean = this.totalSum / this.numberOfReadings;

    // for min and max
    if (this.maxTemp === null || temp > this.maxTemp) {
      this.maxTemp = temp;
    }
    if (this.minTemp === null || temp < this.minTemp) {
        this.minTemp = temp;
    }
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}
