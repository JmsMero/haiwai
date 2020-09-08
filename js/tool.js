
/* rem */
!function (n) {
  var e = n.document, t = e.documentElement,
    i = 750, d = i / 100,
    o = "orientationchange" in n ? "orientationchange" : "resize",
    a = function () {
      if (t.clientWidth > 750) {
        t.style.fontSize = "100px";
      } else {
        var w = t.clientWidth || 320;
        w > 750 && (w = 750);
        t.style.fontSize = w / d + "px";
      };
    };
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);

/**
 * ajax Get 请求方法
 * @param obj
 * obj = {
 *  url: url,   // 请求地址{String}
 *  data: data, // 发送数据{json}
 *  successfn: function(data){}, // 成功方法{function} 
 *  errorfn: function(x,t,e){}   // 失败方法{function}
 * }
*/
function ajaxGet(obj) {
  $.ajax({
    type: "GET",
    url: obj.url,
    data: obj.data,
    async: true,
    dataType: "json",
    cache: false,
    xhrFields: {withCredentials: true},
    crossDomain: true,
    success: function(data) {
      obj.successfn(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      obj.errorfn(XMLHttpRequest, textStatus, errorThrown);
    }
  });
};
  
/**
 * ajax Post 请求方法
 * @param obj
 * obj = {
 *  url: url,   // 请求地址{String}
 *  data: data, // 发送数据{json}
 *  successfn: function(){}, // 成功方法{function} 
 *  errorfn: function(){}   // 失败方法{function}
 * }
*/
function ajaxPost(obj) {
  $.ajax({
    type: "POST",
    url: obj.url,
    data: obj.data,
    async: true,
    dataType: "json",
    cache: false,
    xhrFields: {withCredentials: true},
    crossDomain: true,
    success: function(data) {
      obj.successfn(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      obj.errorfn(XMLHttpRequest, textStatus, errorThrown);
    }
  });
};




function deviceOrient() {
  if (window.orientation == 0 || window.orientation == 180) {
    console.log("竖屏")
  };
  if (window.orientation == 90 || window.orientation == -90) {
    console.log("横屏")
  };
};
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", deviceOrient, false);
deviceOrient();