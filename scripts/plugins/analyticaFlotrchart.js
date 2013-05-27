(function($) {
	$.fn.drawFlotrChart = function(parameters) {
		var defaults = {
			'type': "line",
			'dataSerie': []
		},
			options = $.extend(defaults, parameters),
			type = options.type;
		return this.each(function() {
			var datas = options.dataSeries;
			var container = $(this),
			cont = "#" + container[0].id;
			serie = buildFlotrSeries(datas);
			Flotr.draw(
				cont, [serie], {
				lines: {
					show: type == 'line'

				},
				bars: {
					show: type == 'bars'

				},
				candles: {
					show: type == 'candles'

				},
				pies: {
					show: type == 'pies'

				},
				bubbles: {
					show: type == 'bubbles'

				},
				radar: {
					show: type == 'radar'

				},
				stacked: {
					show: type == 'stacked'

				},

				fontColor: '#96a5b0',
				xaxis: {
					showLabels: true,
					color: '#95a5b'

				},
				yaxis: {
					tickDecimals: 0,
					color: '#96a5b0'
				},
				grid: {
					color: '#e9edef',
					verticalLines: false,
					outlineWidth: 0
				}
			});

		});

	};

	function buildFlotrSeries(arg) {
		var s = [];
		for (var i = 0; i < arg.length; i++) {
			arg[i] = parseData(arg[i]);
			for (var j = 0; j < arg[i].length; j++) {
				s.push([arg[i][j].x, arg[i][j].y]);
			}
		}
		return s;
	};

	function parseData(d) {
		/* Corriger les valeurs undefined dans le tableau de donnee*/
		for (var i = 0; i < d.length; i++) {
			var value = d[i];
			if (typeof value.y == 'undefined') {
				value.y = null;
				d[i] = value;
			}
		}
		return d;
	};

})(jQuery);