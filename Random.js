/**
 * ランダムな値を範囲から取得する.
 * @param min
 * @param max
 * @returns {*}
 */
export const range = (min, max) => Math.random() * (max - min) + min;


/**
 * ランダムな整数の値を範囲から取得する.
 * @param min
 * @param max
 * @returns {*}
 */
export const rangeInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


/**
 * 正規化された乱数を生成する.
 * 参考: http://fladdict.net/exp/random/
 * @param tryNum
 * @returns {number}
 */
export const normalizeVal = tryNum => [...Array(tryNum)].map(() => Math.random()).reduce((a, b) => a + b) / tryNum;


/**
 * 正規化されたランダムな値を範囲から取得する.
 * @param min
 * @param max
 * @param tryNum
 * @returns {*}
 */
export const normalizeRange = (min, max, tryNum) => normalizeVal(tryNum) * (max - min) + min;


/**
 * 正規化されたランダムな整数の値を範囲から取得する.
 * @param min
 * @param max
 * @param tryNum
 * @returns {*}
 */
export const normalizeRangeInt = (min, max, tryNum) => Math.floor(normalizeVal(tryNum) * (max - min)) + min;
