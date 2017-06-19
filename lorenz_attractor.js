/* Lorenz System */

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
		var a = Number(inputs.elements[1].value);
		var b = Number(inputs.elements[2].value);
		var c = Number(inputs.elements[3].value);
		var n = Number(inputs.elements[4].value);
		var text = "";
		text = a + "<br>" + b + "<br>" + c + "<br>";
		/*document.getElementById("demo").innerHTML = text;*/
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


