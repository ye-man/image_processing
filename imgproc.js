/**
 * ImgProc.js
 *
 * A collection of image processing funcitons centered on the HTML5 canvas.
 * This file serves as a base for other files in this package and contains
 * common utility functions used throughout the package.
 * 
 * @namespace ImgProc
 * @author Ken Bellows <ken.bellows@live.com>
 */

/**
 * The built in image data interface; represents the underlying pixel data of an area of a &lt;canvas&gt; element.
 * <br /><br />
 * <strong>Note:</strong> Below is a limited summary of the most commonly used properties and methods of ImageData in this package.
 * @external ImageData
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ImageData|ImageData}
 * @property {Uint8ClampedArray} data - Effectively a 1-dimensional array of pixel data in the format <code>[R, G, B, A, R, G, B, A, ...]</code>
 * @property {Number} width - The width of the image, i.e. the number of pixels per row
 * @property {Number} height - The height of the image, i.e. the number of rows in the image
 */

(function(wnd) {
  // reference the imgproc namespace if it exists, or create it if it doesn't already exist
  var imgproc = wnd.imgproc || (wnd.imgproc={});

  /**
   * Finds the index in an {@link external:ImageData} object of the first byte of the pixel at position (x, y) in the image.
   * @function getPixelLocation
   * @memberof ImgProc
   * @param {external:ImageData} imgData
   * @param {Number} x
   * @param {Number} y
   * @returns {Number}
   */
  imgproc.getPixelLocation = function(imgData, x, y) {
    return (y*imgData.width + x)*4; // if pixel (x,y) is the nth pixel, the pixel location is n*4, since each pixel has 4 values (RGBA)
  };

  /**
   * Returns an object with the RGBA information of the pixel at position (x, y) in an {@link external:ImageData} object.
   * @function getPixelLocation
   * @memberof ImgProc
   * @param {external:ImageData} imgData
   * @param {Number} x
   * @param {Number} y
   * @returns {Object}
   */
  imgproc.getPixel = function (imgData, x, y) {
    var pl = imgproc.getPixelLocation(x,y);
    return {
      r: imgData.data[pl],   // red byte
      g: imgData.data[pl+1], // green byte
      b: imgData.data[pl+2], // blue byte
      a: imgData.data[pl+3]  // alpha byte
    };
  };

  /**
   * Determines the average (arthimetic mean) of a list of numbers.
   * Also available as the <code>imgproc.mean</code>.
   * @function average
   * @memberof ImgProc
   * @param {Number[]} nums
   * @returns {Number}
   * @example
   * expect (imgproc.average([2, 4, 4, 4, 5, 5, 7, 9])).toEqual(5)
   */
  imgproc.average = imgproc.mean = function(nums) {
    return nums.reduce(function(sum, n){ return sum+n; })/nums.length;
  };

  /**
   * Determines the standard deviation of a list of numbers.
   * @function standardDeviation
   * @memberof ImgProc
   * @param {Number[]} nums
   * @returns {Number}
   * @example
   * expect (imgproc.standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toEqual(2)
   * @see {@link https://en.wikipedia.org/wiki/Standard_deviation|wiki:"Standard deviation"}
   * @todo Implement
   */
  imgproc.standardDeviation = function(nums) {
     
  };

})(window);
