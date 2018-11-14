/* Lorenz System */
 function threedlorenz(){
		Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function(err, rows){
			  function unpack(rows, key) {
				  return rows.map(function(row)
				  { return row[key]; });
			  }
 				var a = 10;
				var b = 8/3;
				var c = 28;
				var n = 1000;
 				var x = [], y = [], z = [];
				/* Step size */
				var dt = 0.015;
 				for (i = 0; i < n; i++) {
				  x[i] = Math.random() * 2 - 1;
				  y[i] = Math.random() * 2 - 1;
				  z[i] = 30 + Math.random() * 10;
				}
 				var trace1 = {
				  x,   y,  z,
				  mode: 'markers',
				  marker: {
					size: 4,
					line: {
					  color: 'rgba(217, 217, 217, 0.14)',
					  width: 0.5
					},
					opacity: 0.8
				  },
				  type: 'scatter3d'
				};
 				var data = [trace1];
 				var layout = {
				  xaxis: {range: [-50, 50]},
				  yaxis: {range: [0, 50]},
				  zaxis: {range: [-50, 50]},
				  margin: {l:5,r:5,b:0,t:5}
				};
 				Plotly.plot('3ddiv', data, layout);
 				function compute () {
				  var dx, dy, dz;
				  var xh, yh, zh;
				  for (var i = 0; i < n; i++) {
					dx = a * (y[i] - x[i]);
					dy = x[i] * (c - z[i]) - y[i];
					dz = x[i] * y[i] - b * z[i];
 					xh = x[i] + dx * dt * 0.5;
					yh = y[i] + dy * dt * 0.5;
					zh = z[i] + dz * dt * 0.5;
 					dx = a * (yh - xh);
					dy = xh * (c - zh) - yh;
					dz = xh * yh - b * zh;
 					x[i] += dx * dt;
					y[i] += dy * dt;
					z[i] += dz * dt;
				  }
				}
 				function update () {
				  compute();
 				  Plotly.animate('3ddiv', data, {
					transition: {
					  duration: 0,
					},
					frame: {
					  duration: 0,
					  redraw: false,
					},
				  xaxis: {range: [-50, 50]},
				  yaxis: {range: [0, 50]},
				  zaxis: {range: [-50, 50]},
				  margin: {l:5,r:5,b:0,t:0}
				  });
 				  requestAnimationFrame(update);
				}
 				requestAnimationFrame(update);
 				});
}
 function push_button()
{
	plot_attractor();
}
 function plot_attractor()
{

		Plotly.purge(graph);
		/* Pre defined Constants */
		var a = 10;
		var b = 8/3;
		var c = 28;
		/* Number of Particles */
		var n = 100;
		/* User can change value of constants */
		var inputs = document.getElementById("frm1");
		//ar a = eval(inputs.elements[1].value);
		//ar b = eval(inputs.elements[2].value);
		//ar c = eval(inputs.elements[3].value);
		//ar n = eval(inputs.elements[4].value);
//		var text = "";
//		text = a + "<br>" + b + "<br>" + c + "<br>";
		//document.getElementById("demo").innerHTML = text;
		var x = [], y = [], z = [];
		/* Step size */
		var dt = 0.015;
 		for (i = 0; i < n; i++) {
		  x[i] = Math.random() * 2 - 1;
		  y[i] = Math.random() * 2 - 1;
		  z[i] = 30 + Math.random() * 10;
		}
 		Plotly.plot('graph', [{
		  x: x,
		  y: z,
		  mode: 'markers'
		}], {
		  xaxis: {range: [-40, 40]},
		  yaxis: {range: [0, 60]}
		})
 		function compute () {
		  var dx, dy, dz;
		  var xh, yh, zh;
		  for (var i = 0; i < n; i++) {
			dx = a * (y[i] - x[i]);
			dy = x[i] * (c - z[i]) - y[i];
			dz = x[i] * y[i] - b * z[i];
 			xh = x[i] + dx * dt * 0.5;
			yh = y[i] + dy * dt * 0.5;
			zh = z[i] + dz * dt * 0.5;
 			dx = a * (yh - xh);
			dy = xh * (c - zh) - yh;
			dz = xh * yh - b * zh;
 			x[i] += dx * dt;
			y[i] += dy * dt;
			z[i] += dz * dt;
		  }
		}
 		function update () {
		  compute();
 		  Plotly.animate('graph', {
			data: [{x: x, y: z}]
		  }, {
			transition: {
			  duration: 0,
			},
			frame: {
			  duration: 0,
			  redraw: false,
			}
		  });
 		  requestAnimationFrame(update);
		}
 		requestAnimationFrame(update);
 }
