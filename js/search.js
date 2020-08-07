// Auto complete

void function () {
    'use strict';
  
    horsey(document.querySelector('#hy'), {
      source: [{ list: ['banana', 'apple', 'orange', "choucroute"] }]
    });
  
    horsey(document.querySelector('#ly'), {
      source: function (data, done) {
        var items = ['banana', 'apple', 'orange'];
        var start = new Date();
        lyr.innerText = 'Loading...';
        setTimeout(function () {
          lyr.innerText = 'Loaded in ' + (new Date() - start) + 'ms!';
          done(null, [{ list: items.filter(function(item) {
            return item.indexOf(data.input) !== -1;
          }) }]);
        }, 2000);
      }
    });
  
    function events (el, type, fn) {
      if (el.addEventListener) {
        el.addEventListener(type, fn);
      } else if (el.attachEvent) {
        el.attachEvent('on' + type, wrap(fn));
      } else {
        el['on' + type] = wrap(fn);
      }
      function wrap (originalEvent) {
        var e = originalEvent || global.event;
        e.target = e.target || e.srcElement;
        e.preventDefault  = e.preventDefault  || function preventDefault () { e.returnValue = false; };
        e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
        fn.call(el, e);
      }
    }
  }();
  