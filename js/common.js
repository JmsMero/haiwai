
/**
 * 倒计时（--{分}:--{秒}）
 * @param {String} date 结束日期，例如：2020-03-30 15:50:00
 * @param {Function} endFunction 倒计时结束后触发方法，可选参数
 * */
function MSCountDown(date, endFunction) {
  // 显示倒计时
  function showCountDown(m,s) {
    $('.waiting-countdown').text(m + ' : ' + s);
  };

  // 个位前补零
  function addZero(i) {
    return i < 10 ? "0" + i: i + "";
  };

  // 转换结束时间
  var endDate = new Date(date);

  // 开始倒计时
  countDown(endDate);
  function countDown(endDate) {
    var nowtime = new Date();
    var endtime = endDate;
    var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    var m = addZero(parseInt(lefttime / 60 % 60));
    var s = addZero(parseInt(lefttime % 60));
    
    if ( lefttime > 0 ) {
      showCountDown(m, s);
    } else if ( lefttime == 0 && (1 / lefttime != -Infinity) ) {
      showCountDown(m, s);
      if (endFunction != undefined) {
        endFunction();
      };
    } else {
      return;
    }
    tID = setTimeout(function(){ countDown(endDate); }, 1000);
  };

};


$(function() {

  // 按钮添加点击复制
  var clipboard = new ClipboardJS("#openInAppBtn", {
    text: function (trigger) {
      // 返回要复制的内容
      return '这是复制的内容';
    }
  });
  clipboard.on("success", function (e) {
    // 复制复制成功后跳转
    window.location.href = $('#openInAppBtn a').data('href');
    e.clearSelection();
  });
  clipboard.on("error", function (e) {
    alert("复制失败");
  });
  
});

