webpackHotUpdate("static/development/pages/projects/manticore.js",{

/***/ "./src/Helpers/glitch.js":
/*!*******************************!*\
  !*** ./src/Helpers/glitch.js ***!
  \*******************************/
/*! exports provided: setup, draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");

var glitch;
var isLoaded = false;
var setup = (_ref) => {
  var {
    statue,
    bg = 'rgba(255, 255, 255, 0)'
  } = _ref,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["statue", "bg"]);

  return (p5, canvasParentRef) => {
    p5.createCanvas(other.statueW, other.statueH).parent(canvasParentRef);
    p5.background(0);
    p5.loadImage(statue, function (img) {
      glitch = new Glitch(img, p5, other);
      isLoaded = true;
    });
  };
};
var draw = p5 => {
  p5.clear();
  p5.background('rgba(255, 255, 255, 0)');

  if (isLoaded) {
    glitch.show();
  }
};

class Glitch {
  constructor(img, p5, params) {
    this.p5 = p5;
    this.params = params;
    this.channelLen = 4;
    this.imgOrigin = img;
    this.imgOrigin.loadPixels();
    this.copyData = [];
    this.flowLineImgs = [];
    this.shiftLineImgs = [];
    this.shiftRGBs = [0];
    this.scatImgs = [];
    this.throughFlag = true;
    this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);
    this.offsetX = this.params.offsetX;
    this.offsetY = this.params.offsetY;
    this.imgPosX = 0;
    this.imgPosY = 0;
    this.imgW = this.params.proportions === '3/4' ? this.p5.height * 3 / 4 : this.params.statueW;
    this.imgH = this.params.statueH;

    switch (this.params.posX) {
      case 'left':
        this.imgPosX = 0 + this.offsetX;
        break;

      case 'center':
        this.imgPosX = (this.p5.width - this.imgW) / 2 + this.offsetX;
        break;

      case 'right':
        this.imgPosX = this.p5.width - this.imgW + this.offsetX;
        break;
    }

    switch (this.params.posY) {
      case 'top':
        this.imgPosY = 0 + this.offsetY;
        break;

      case 'center':
        this.imgPosY = (this.p5.height - this.imgH) / 2 + this.offsetY;
        break;

      case 'bottom':
        this.imgPosY = this.p5.height - this.imgH + this.offsetY;
    } // flow line


    for (var i = 0; i < 1; i++) {
      var o = {
        pixels: null,
        t1: this.p5.floor(this.p5.random(0, 1000)),
        speed: this.p5.floor(this.p5.random(4, 15)),
        randX: this.p5.floor(this.p5.random(24, 80))
      };
      this.flowLineImgs.push(o);
    } // shift line


    for (var _i = 0; _i < 6; _i++) {
      var _o = null;
      this.shiftLineImgs.push(_o);
    } // shift RGB


    for (var _i2 = 0; _i2 < 1; _i2++) {
      var _o2 = null;
      this.shiftRGBs.push(_o2);
    } // scat images


    for (var _i3 = 0; _i3 < 3; _i3++) {
      var scatImg = {
        img: null,
        x: 0,
        y: 0
      };
      this.scatImgs.push(scatImg);
    }
  }

  replaceData(destImg, srcPixels) {
    for (var y = 0; y < destImg.height; y++) {
      for (var x = 0; x < destImg.width; x++) {
        var r = void 0,
            g = void 0,
            b = void 0,
            a = void 0;
        var index = void 0;
        index = (y * destImg.width + x) * this.channelLen;
        r = index;
        g = index + 1;
        b = index + 2;
        a = index + 3;
        destImg.pixels[r] = srcPixels[r];
        destImg.pixels[g] = srcPixels[g];
        destImg.pixels[b] = srcPixels[b];
        destImg.pixels[a] = srcPixels[a];
      }
    }

    destImg.updatePixels();
  }

  flowLine(srcImg, obj) {
    var destPixels, tempY;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    obj.t1 %= srcImg.height;
    obj.t1 += obj.speed;
    tempY = this.p5.floor(this.p5.noise(obj.t1) * srcImg.height); // tempY = this.p5.floor(obj.t1)

    for (var y = 0; y < srcImg.height; y++) {
      if (tempY === y) {
        for (var x = 0; x < srcImg.width; x++) {
          var r = void 0,
              g = void 0,
              b = void 0,
              a = void 0;
          var index = void 0;
          index = (y * srcImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          destPixels[r] = srcImg.pixels[r] + obj.randX;
          destPixels[g] = srcImg.pixels[g] + obj.randX;
          destPixels[b] = srcImg.pixels[b] + obj.randX;
          destPixels[a] = srcImg.pixels[a];
        }
      }
    }

    return destPixels;
  }

  shiftLine(srcImg) {
    var offsetX;
    var rangeMin, rangeMax;
    var destPixels;
    var rangeH;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    rangeH = srcImg.height;
    rangeMin = this.p5.floor(this.p5.random(0, rangeH));
    rangeMax = rangeMin + this.p5.floor(this.p5.random(1, rangeH - rangeMin));
    offsetX = this.channelLen * this.p5.floor(this.p5.random(-40, 40));

    for (var y = 0; y < srcImg.height; y++) {
      if (y > rangeMin && y < rangeMax) {
        for (var x = 0; x < srcImg.width; x++) {
          var r = void 0,
              g = void 0,
              b = void 0,
              a = void 0;
          var r2 = void 0,
              g2 = void 0,
              b2 = void 0;
          var index = void 0;
          index = (y * srcImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          r2 = r + offsetX;
          g2 = g + offsetX;
          b2 = b + offsetX;
          destPixels[r] = srcImg.pixels[r2];
          destPixels[g] = srcImg.pixels[g2];
          destPixels[b] = srcImg.pixels[b2];
          destPixels[a] = srcImg.pixels[a];
        }
      }
    }

    return destPixels;
  }

  shiftRGB(srcImg) {
    var randR, randG, randB;
    var destPixels;
    var range;
    range = 16;
    destPixels = new Uint8ClampedArray(srcImg.pixels);
    randR = (this.p5.floor(this.p5.random(-range, range)) * srcImg.width + this.p5.floor(this.p5.random(-range, range))) * this.channelLen;
    randG = (this.p5.floor(this.p5.random(-range, range)) * srcImg.width + this.p5.floor(this.p5.random(-range, range))) * this.channelLen;
    randB = (this.p5.floor(this.p5.random(-range, range)) * srcImg.width + this.p5.floor(this.p5.random(-range, range))) * this.channelLen;

    for (var y = 0; y < srcImg.height; y++) {
      for (var x = 0; x < srcImg.width; x++) {
        var r = void 0,
            g = void 0,
            b = void 0,
            a = void 0;
        var r2 = void 0,
            g2 = void 0,
            b2 = void 0;
        var index = void 0;
        index = (y * srcImg.width + x) * this.channelLen;
        r = index;
        g = index + 1;
        b = index + 2;
        a = index + 3;
        r2 = (r + randR) % srcImg.pixels.length;
        g2 = (g + randG) % srcImg.pixels.length;
        b2 = (b + randB) % srcImg.pixels.length;
        destPixels[r] = srcImg.pixels[r2];
        destPixels[g] = srcImg.pixels[g2];
        destPixels[b] = srcImg.pixels[b2];
        destPixels[a] = srcImg.pixels[a];
      }
    }

    return destPixels;
  }

  getRandomRectImg(srcImg) {
    var startX;
    var startY;
    var rectW;
    var rectH;
    var destImg;
    startX = this.p5.floor(this.p5.random(0, srcImg.width - 30));
    startY = this.p5.floor(this.p5.random(0, srcImg.height - 50));
    rectW = this.p5.floor(this.p5.random(30, srcImg.width - startX));
    rectH = this.p5.floor(this.p5.random(1, 50));
    destImg = srcImg.get(startX, startY, rectW, rectH);
    destImg.loadPixels();
    return destImg;
  }

  setImage() {
    this.p5.push();
    this.p5.image(this.imgOrigin, this.imgPosX, this.imgPosY, this.imgW, this.imgH);
    this.p5.pop();
  }

  show() {
    this.replaceData(this.imgOrigin, this.copyData);
    var n = this.p5.floor(this.p5.random(100));

    if (n > 75 && this.throughFlag) {
      this.throughFlag = false;
      setTimeout(() => {
        this.throughFlag = true;
      }, this.p5.floor(this.p5.random(40, 400)));
    }

    if (!this.throughFlag) {
      this.p5.push();
      this.p5.image(this.imgOrigin, this.imgPosX, this.imgPosY, this.imgW, this.imgH);
      this.p5.pop();
      return;
    } // flow line


    this.flowLineImgs.forEach((v, i, arr) => {
      arr[i].pixels = this.flowLine(this.imgOrigin, v);

      if (arr[i].pixels) {
        this.replaceData(this.imgOrigin, arr[i].pixels);
      }
    }); // shift line

    this.shiftLineImgs.forEach((v, i, arr) => {
      if (this.p5.floor(this.p5.random(100)) > 50) {
        arr[i] = this.shiftLine(this.imgOrigin);
        this.replaceData(this.imgOrigin, arr[i]);
      } else {
        if (arr[i]) {
          this.replaceData(this.imgOrigin, arr[i]);
        }
      }
    }); // shift rgb

    this.shiftRGBs.forEach((v, i, arr) => {
      if (this.p5.floor(this.p5.random(100)) > 65) {
        arr[i] = this.shiftRGB(this.imgOrigin);
        this.replaceData(this.imgOrigin, arr[i]);
      }
    });
    this.setImage(); // scat image

    this.scatImgs.forEach(obj => {
      this.p5.push();
      this.p5.translate((this.p5.width - this.imgOrigin.width) / 2, (this.p5.height - this.imgOrigin.height) / 2);

      if (this.p5.floor(this.p5.random(100)) > 80) {
        obj.x = this.p5.floor(this.p5.random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7));
        obj.y = this.p5.floor(this.p5.random(-this.imgOrigin.height * 0.1, this.imgOrigin.height));
        obj.img = this.getRandomRectImg(this.imgOrigin);
      }

      if (obj.img) {
        this.p5.image(obj.img, obj.x, obj.y);
      }

      this.p5.pop();
    });
  }

}

/***/ })

})
//# sourceMappingURL=manticore.js.b25d0f2db94049e647f2.hot-update.js.map