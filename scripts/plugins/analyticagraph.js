(function($) {

	$fn.drawRickshawGraph = function(parameters) {
		var defaults = {
			'type': "line",
			'dataSerie': []
		},
			options = $.extend(defaults, parameters);
		return this.each(function() {
			var datas = options.dataSeries,
			var container = $(this);
			serie = buildRickShawSerie(datas);
			vargraph = new Rickshaw.Graph({
				element: document.querySelector(container),
				width: container.innerWidth,
				height: container.innerHeight,
				renderer: options.type,
				series: serie
			});
			var x_axis = new Rickshaw.Graph.Axis.Time({
				graph: graph
			});
			graph.render();

		});
	};

	function buildRickShawSerie() {
		var series = [];
		for (var i = 0; i < arguments.length; i++) {
			arguments[i] = parseData(arguments[i]);
			series.push({
				name: "SQL",
				data: arguments[i],
				color: '#' + Math.floor(Math.random() * 16777215).toString(16)
			});
		}
		return series;
	};

	function parseData(data) {
		/* Corriger les valeurs undefined dans le tableau de donnee*/
		for (var i = 0; i < data.length; i++) {
			var value = data[i];
			if (typeof value.y === 'undefined') {
				value.y = null;
				data[i] = value;
			}
		}
		return data;
	};


})(jQuery);