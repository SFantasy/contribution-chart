/**
 *
 * contribution.js.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-17
 * @update 2014-12-17
 */

var Contribution = (function () {

  function Contribution (target) {
    this.target = target;
    this.data = [];
    this.getData();
    this.drawGraph();
  }

  Contribution.prototype.getData = function () {
    var _this = this;

    var days,
        // 贡献最多的天
        bestDay = 0,
        // 最多贡献的数量
        maxCount = 0;

    if (_this.target) {
      days = $('rect.day', $(_this.target));

      days.each(function (i, item) {
        _this.data.push([i, $(item).data('count')]);
      });
    }
  };

  Contribution.prototype.drawGraph = function () {
    var _this = this;

    // CC chart
    $('body').append($('<div class="contribution-chart-container contribution-chart-hidden"><span class="contribution-chart-close">X</span><div id="contribution-chart-placeholder"></div></div>'));

    // CC toggle
    $('<p class="contribution-chart-toggle">View contribution in line chart.</p>').insertBefore($('.contributions-tab .boxed-group.flush').get(2));

    $.plot('#contribution-chart-placeholder', [{
      data: _this.data,
      color: '#8cc665',
      lines: { show: true }
    }]);

    $('.contribution-chart-toggle').on('click', function () {
      $('.contribution-chart-container').toggleClass('contribution-chart-hidden');
    });

    $('.contribution-chart-close').on('click', function () {
      $('.contribution-chart-container').removeClass('contribution-chart-hidden');
    });
  };

  return Contribution;

})();

$(window).load(function () {
  var contribution, target;

  target = document.getElementById('contributions-calendar');
  return contribution = new Contribution(target);
});
