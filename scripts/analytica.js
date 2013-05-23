(function($) {
	$.fn.extend({
		// Rickshaw Plots
		drawRickShawChart : function(parameters) {
			// Set the defaults values of the rickshaw's plot plugin here
			var defaluts = {

			}, options = $.extend(defaults, parameters);

			var series = options.dataSeries;
			// Parsing the dataSeries and building the correct rickShaw data
			// series

			var realseries = [];
			for ( var i = 0; i < arguments.length; i++) {
				arguments[i] = parseData(arguments[i]);
				realseries.push({
					name : "XXX",
					data : arguments[i],
					color : '#'
							+ Math.floor(Math.random() * 16777215).toString(16)
				});
			}

			return this.each(function() {
				var container = $(this), graph = new Rickshaw.Graph({
					element : document.querySelector(v),
					width : container.width,
					height : container.height,
					renderer : options.type,
					series : options.serie
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
					element : document.getElementById('l' + cont)
				});

			});
		},

		drawFlotrChart : function(parameters) {

		}
	});
})(jQuery);
