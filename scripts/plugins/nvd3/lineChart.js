(function($) {

  $.fn.drawlineChartWithNvds3 = function(datas) {
    var defaults = {}, options = $.extend(defaults, datas);

    return this.each(function() {
      nv.addGraph(function() {
        var chart = nv.models.cumulativeLineChart()
          .x(function(d) {
          return d[0]
        })
          .y(function(d) {
          return d[1] / 100
        }) //adjusting, 100% is 1.00, not 100 as it is in the data
        .color(d3.scale.category10().range());

        chart.xAxis
          .tickFormat(function(d) {
          return d3.time.format('%x')(new Date(d))
        });

        chart.yAxis
          .tickFormat(d3.format(',.1%'));
        var container = $(this);
        d3.select('#s' + container[0].id)
          .datum(data)
          .transition().duration(500)
          .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
      });

    });
  };
})(jQuery);