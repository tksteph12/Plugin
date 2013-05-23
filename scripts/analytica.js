(function($) {
	$.fn.extend({
		// Rickshaw Plots
		drawRickShawChart : function(parameters) {
			// Set the defaults values of the rickshaw's plot plugin here
			var defaults = {
				'type' : "line",
				'dataSerie' : []
			}, options = $.extend(defaults, parameters);

			var datas = options.dataSeries, series = [];
			// Parsing the dataSeries and building the correct rickShaw data
			// series
			for ( var i = 0; i < datas.length; i++) {
				for ( var j = 0; j < datas[i].length; j++) {
					var value = datas[i][j];
					if (typeof value.y == 'undefined') {
						value.y = null;
						datas[i][j] = value;
					}
				}
				series.push({
					name : "Graph" + i,
					data : arguments[i],
					color : '#'
							+ Math.floor(Math.random() * 16777215).toString(16)
				});
			}

			return this.each(function() {
				var container = $(this), graph = new Rickshaw.Graph({
					element : document.querySelector(container),
					width : container.width,
					height : container.height,
					renderer : options.type,
					series : series
				});
				var x_axis = new Rickshaw.Graph.Axis.Time({
					graph : graph
				});

				var y_axis = new Rickshaw.Graph.Axis.Y({
					graph : graph,
					orientation : 'left',
					tickFormat : Rickshaw.Fixtures.Number.formatKMBT,
					element : document.getElementById('y_axis'),
				});

				graph.render();

				var legend = new Rickshaw.Graph.Legend({
					graph : graph,
					element : $('#legend')
				});

				var slider = new Rickshaw.Graph.RangeSlider({
					graph : graph,
					element : $('#slider')
				});

			});
		},

		drawFlotrChart : function(parameters) {

		}
	});
})(jQuery);
