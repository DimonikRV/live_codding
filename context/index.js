export const timer = {
  secondsPassed: 0,
  minsPassed: 0,

  startTimer() {
    setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {},
  stopTimer() {},
  resetTimer() {},
};
