const UA = window.navigator.userAgent.toLocaleLowerCase();

class Device {
  /**
   * モバイル判定
   * @returns {boolean}
   */
  static isMobile() {
    return (
      UA.indexOf('iphone') >= 0 ||
      UA.indexOf('ipod') >= 0 ||
      UA.indexOf('android') >= 0 && UA.indexOf('mobile') >= 0
    );
  }

  /**
   * タブレット判定
   * @returns {boolean}
   */
  static isTablet() {
    return UA.indexOf("ipad") >= 0 ||
      (UA.indexOf("android") >= 0 && UA.indexOf("mobile") < 0);
  }

  /**
   * safari判定
   * @returns {boolean}
   */
  static isSafari() {
    return UA.indexOf('safari') >= 0 && UA.indexOf('chrome') < 0;
  }

  /**
   * IE、Edge判定
   * @returns {boolean}
   */
  static isMsBrowser() {
    return UA.indexOf('msie') >= 0 ||
      UA.indexOf('trident') >= 0 ||
      UA.indexOf('edge') >= 0;
  }
}

export default Device;
