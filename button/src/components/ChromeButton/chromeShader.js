// export function initChromeShader(canvas, video) {
//  const gl = canvas.getContext("webgl");
//  if (!gl) return;
//  canvas.width = 300;
//  canvas.height = 90;
//  const vertexShaderSrc = `
//    attribute vec2 position;
//    varying vec2 vUv;
//    void main() {
//      vUv = position * 0.5 + 0.5;
//      gl_Position = vec4(position, 0.0, 1.0);
//    }
//  `;
//  const fragmentShaderSrc = `
//    precision mediump float;
//    uniform sampler2D videoTexture;
//    varying vec2 vUv;
//    void main() {
//      vec2 uv = vUv;
//      // convex chrome distortion
//      float dist = distance(uv, vec2(0.5));
//      uv += (uv - 0.5) * dist * 0.35;
//      // subtle wave distortion
//      uv.y += sin(uv.x * 12.0) * 0.01;
//      vec4 color = texture2D(videoTexture, uv);
//      // chrome brightness + contrast
//      color.rgb = mix(color.rgb, vec3(0.95), 0.25);
//      // fresnel highlight
//      float fresnel = pow(1.0 - dist, 2.5);
//      color.rgb += fresnel * 0.25;
//      gl_FragColor = color;
//    }
//  `;
//  function compile(type, source) {
//    const shader = gl.createShader(type);
//    gl.shaderSource(shader, source);
//    gl.compileShader(shader);
//    return shader;
//  }
//  const program = gl.createProgram();
//  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShaderSrc));
//  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShaderSrc));
//  gl.linkProgram(program);
//  gl.useProgram(program);
//  const buffer = gl.createBuffer();
//  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
//  gl.bufferData(
//    gl.ARRAY_BUFFER,
//    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
//    gl.STATIC_DRAW
//  );
//  const position = gl.getAttribLocation(program, "position");
//  gl.enableVertexAttribArray(position);
//  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
//  const texture = gl.createTexture();
//  gl.bindTexture(gl.TEXTURE_2D, texture);
//  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
//  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
//  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
//  function render() {
//    gl.bindTexture(gl.TEXTURE_2D, texture);
//    gl.texImage2D(
//      gl.TEXTURE_2D,
//      0,
//      gl.RGBA,
//      gl.RGBA,
//      gl.UNSIGNED_BYTE,
//      video
//    );
//    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
//    requestAnimationFrame(render);
//  }
//  render();
// }
export function initChromeShader(canvas, video) {
 const gl = canvas.getContext("webgl");
 if (!gl) return;
 canvas.width = 320;
 canvas.height = 96;
 const vs = `
   attribute vec2 position;
   varying vec2 vUv;
   void main() {
     vUv = position * 0.5 + 0.5;
     gl_Position = vec4(position, 0.0, 1.0);
   }
 `;
 const fs = `
   precision mediump float;
   uniform sampler2D videoTexture;
   varying vec2 vUv;
   void main() {
     vec2 uv = vUv;
     // FIX: mirror orientation
     uv.y = 1.0 - uv.y;
     // Convex chrome curvature
     float d = distance(uv, vec2(0.5));
     uv += (uv - 0.5) * d * 0.4;
     // Subtle brushed movement
     uv.x += sin(uv.y * 14.0) * 0.008;
     vec4 color = texture2D(videoTexture, uv);
     // Chrome tonemapping
     color.rgb = mix(color.rgb, vec3(0.96), 0.3);
     // Edge highlight (fresnel)
     float edge = pow(1.0 - d, 3.0);
     color.rgb += edge * 0.35;
     gl_FragColor = color;
   }
 `;
 function compile(type, src) {
   const s = gl.createShader(type);
   gl.shaderSource(s, src);
   gl.compileShader(s);
   return s;
 }
 const program = gl.createProgram();
 gl.attachShader(program, compile(gl.VERTEX_SHADER, vs));
 gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fs));
 gl.linkProgram(program);
 gl.useProgram(program);
 const buffer = gl.createBuffer();
 gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
 gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
   -1, -1, 1, -1, -1, 1, 1, 1
 ]), gl.STATIC_DRAW);
 const pos = gl.getAttribLocation(program, "position");
 gl.enableVertexAttribArray(pos);
 gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
 const texture = gl.createTexture();
 gl.bindTexture(gl.TEXTURE_2D, texture);
 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
 gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
 function render() {
   gl.bindTexture(gl.TEXTURE_2D, texture);
   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
   gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
   requestAnimationFrame(render);
 }
 render();
}
