(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{564:function(n,e,t){"use strict";t.r(e),e.default="const {Scene} = spritejs;\nconst {Cube, Sphere, shaders} = spritejs.ext3d;\nconst container = document.getElementById('container');\nconst scene = new Scene({\n  container,\n  displayRatio: 2,\n});\nconst layer = scene.layer3d('fglayer', {\n  camera: {\n    fov: 35,\n    pos: [5, 3, 6],\n  },\n});\nlayer.camera.lookAt([0, -0.5, 0]);\n\nconst program = layer.createProgram({\n  ...shaders.NORMAL,\n  cullFace: null,\n});\n\nconst s1 = new Sphere(program, {\n  phiLength: Math.PI, // \u534a\u7403\n  x: -1,\n  rotateY: -90,\n});\n\nconst s2 = s1.cloneNode();\ns2.attr({\n  x: 1,\n  rotateY: 90,\n});\n\nconst c = new Cube(program, {\n  rotateY: 45,\n  scale: 0.5,\n});\n\nlayer.append(s1, s2, c);\n\nlayer.root.animate([\n  {rotateY: 0},\n  {rotateY: 360},\n], {\n  duration: 19000,\n  iterations: Infinity,\n});\n\nc.animate([\n  {rotateY: 0},\n  {rotateY: 360},\n], {\n  duration: 11000,\n  iterations: Infinity,\n});"}}]);