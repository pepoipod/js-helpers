/**
 * 指定のms分だけSleepする.
 * @param waitMs
 * @returns {Promise<any>}
 */
export default waitMs =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, waitMs);
  });
