var waitSecondsAsync = async (n) => {
    return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, n * 1000);
  });
};

var hiInTwoAsync = async () => {
  await waitSecondsAsync(2);
  return("hi");
}

module.exports = {
  waitSecondsAsync: waitSecondsAsync,
  hiInTwoAsync: hiInTwoAsync,
};
