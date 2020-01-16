(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{588:function(n,t,e){"use strict";e.r(t),t.default="/* globals d3 */\nconst {Scene} = spritejs;\nconst container = document.getElementById('stage');\nconst scene = new Scene({\n  container,\n  width: 1200,\n  height: 1200,\n});\n\nconst dataset = [125, 121, 127, 193, 309];\n\nconst linear = d3.scaleLinear()\n  .domain([100, d3.max(dataset)])\n  .range([0, 500]);\n\nconst colors = ['#fe645b', '#feb050', '#c2af87', '#81b848', '#55abf8'];\n\nconst fglayer = scene.layer('fglayer');\nconst s = d3.select(fglayer);\n\ndocument.querySelector('#stage canvas').style.backgroundColor = '#eee';\n\nconst chart = s.selectAll('sprite')\n  .data(dataset)\n  .enter()\n  .append('sprite')\n  .attr('x', 450)\n  .attr('y', (d, i) => {\n    return 200 + i * 95;\n  })\n  .attr('width', 0)\n  .attr('height', 80)\n  .attr('bgcolor', '#ccc');\n\nchart.transition()\n  .duration(2000)\n  .attr('width', (d, i) => {\n    return linear(d);\n  })\n  .attr('bgcolor', (d, i) => {\n    return colors[i];\n  });\n\n// s.append('axis')\n//   .attr('ticks', [100, 200, 300, 400])\n//   .attr('axisScales', [linear])\n//   .attr('direction', 'bottom')\n//   .attr('pos', [450, 700])\n//   .attr('color', '#666');\n\nchart.on('click', (data) => {\n  /* eslint-disable no-console */\n  console.log(data, d3.event);\n  /* eslint-enable no-console */\n});"}}]);