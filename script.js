

var turn = {
  ratio: 1.38,
  init: function (id) {
    console.log('init',id);
    var me = this;
    console.log('prop elements = me:',me);

    // event detect
    if (document.addEventListener) {
      this.el = document.getElementById(id); //set element
      this.resize();  // use funcition 
      this.plugins(); // use funcition 
      
      // *to change the content size to window*
      window.addEventListener('resize', function (e) {
        var size = me.resize();
        $(me.el).turn('size', size.width, size.height);
      }
      );
    }
  },
  resize: function () {
    // reset the width and height to the css defaults
    this.el.style.width = '';
    this.el.style.height = '';

    var width = this.el.clientWidth,
        height = Math.round(width / this.ratio),
        padded = Math.round(document.body.clientHeight * 0.9);

    // if the height is too big for the window, constrain it
    if (height > padded) {
      height = padded;
      width = Math.round(height * this.ratio);
    }

    // set the width and height matching the aspect ratio
    this.el.style.width = width + 'px';
    this.el.style.height = height + 'px';

    return {
      width: width,
      height: height
    };
  },
  plugins: function () {
    // run the plugin
    $(this.el).turn({
      // agrega tus propiedades
      gradients: true,
      acceleration: true,
      	// width: 400,
   	// height: 300,
   	autoCenter: true,
     display:'single',
        // zoom: 0,
    //  turnCorners: "bl,br,tl,tr,l.r"
    });

    
    // hide the scrolls
    document.body.className = 'hide-overflow';
  }
};


document.querySelector('.book-wrapper').addEventListener('swiped-left',function(e) {
  $("#book").turn('next');
  console.log(e.target); // element that was swiped
  console.log(e.detail); // event data { dir: 'down', xStart: 196, xEnd: 230, yStart: 196, yEnd: 4 }
})
document.querySelector('.book-wrapper').addEventListener('swiped-right',function(e) {
   $("#book").turn('previous');
   console.log(e.target); // element that was swiped
  console.log(e.detail); // event data { dir: 'down', xStart: 196, xEnd: 230, yStart: 196, yEnd: 4 }
})



turn.init('book');

