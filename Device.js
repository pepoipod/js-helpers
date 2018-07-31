import $ from 'jquery';
import { BREAK_POINT } from '../config';

export default class Device {
  /**
   * PCか判定.
   * @returns {boolean}p
   */
  static isPc() {
    return $(window).width() > BREAK_POINT;
  }

  /**
   * SPか判定.
   * @returns {boolean}
   */
  static isMobile() {
    return $(window).width() <= BREAK_POINT;
  }
}
