// Sets up vertex and fragment shader
function loadVertexAndFragmentShader(gl, vertexShaderId, fragmentShaderId) {
  const vertexShaderScript = document.getElementById(vertexShaderId);
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderScript.innerHTML);
  gl.compileShader(vertexShader);

  const fragmentShaderScript = document.getElementById(fragmentShaderId);
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderScript.innerHTML);
  gl.compileShader(fragmentShader);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  return shaderProgram;
}

// Get A WebGL context
const canvas = document.getElementById('gl-canvas');
const gl =
  canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

// Load in vertex and fragment shaders
const shaderProgram = loadVertexAndFragmentShader(
  gl,
  'vertex-shader',
  'fragment-shader'
);
gl.useProgram(shaderProgram);

// Pulls attribute a_position out of vertex shader
const vertexPositionAttribute = gl.getAttribLocation(
  shaderProgram,
  'a_position'
);

//////// 🟢 CODE FOR CREATING A CIRCLE 🟢 ////////////
const n = 100;
const rad = 0.5;
const array = [];

const steps = 360 / n;
for (let i = 0.0; i <= 360 + steps; i += steps) {
  const j = i * (Math.PI / 180);

  array.push(Math.sin(j) * rad);
  array.push(Math.cos(j) * rad);
}

////////////////////////////////////////////////////////

// Create a buffer for a simple triangle
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);

// Enable vertex shader attribute for writing
gl.enableVertexAttribArray(vertexPositionAttribute);
// Write day to the vertex shader attribute from the buffer that we just created
gl.vertexAttribPointer(vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);

gl.clearColor(0.1375, 0.152, 0.164, 1.0);
// Clear scene with color set in gl.clearColor
gl.clear(gl.COLOR_BUFFER_BIT);
// Draw
gl.drawArrays(gl.LINE_STRIP, 0, array.length / 2);
