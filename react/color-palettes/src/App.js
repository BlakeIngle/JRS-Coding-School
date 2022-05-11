import logo from './logo.svg';
import './App.css';
import ColorCard from './components/ColorCard';
import ColorPalette from './components/ColorPalette';
import ColorForm from './components/ColorForm';
import { useState } from 'react';

function App() {

  const [palettes, setPalettes] = useState([]);

  function generatePalette(hexColor) {
    // do stuff here
    console.log(hexColor);
    // convert to hsl/hsb
    let hslColor = hexToHSL(hexColor);
    // generate other colors
    console.log(hslColor[0]);

    let tris = makeTritoneHues(...hslColor);// hues: [[h, s, l], [h, s, l]]
    let shades = makeShades(...hslColor);// hues: [[h, s, l], [h, s, l]]

    tris = {
      title: "Tritones",
      colors: tris.map(([h, s, l]) => HSLToHex(h, s, l))
    }
    shades = {
      title: "Shades",
      colors: shades.map(([h, s, l]) => HSLToHex(h, s, l))
    }

    setPalettes([tris, shades]);
  }

  function makeTritoneHues(hue, s, l) {
    let hues = [[hue, s, l]];
    // [hue, s, l]

    hues.push([(hue + 120) % 360, s, l]);
    hues.push([(hue + 240) % 360, s, l]);

    return hues;
  }

  function makeShades(h, s, l) {

    let colors = [];
    let totalSteps = 5;
    let stepSize = 15;
    let firstStep = 20;
    let d = (l - 50) % 10;
    // d: offset from good numbers -> will include the actual given color in the end palette

    for (let i = 0; i < totalSteps; i++) {
      let l = (firstStep + d + (stepSize * i));
      colors.push([h, s, l]);
    }

    return colors;
  }

  function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
      h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l];
  }
  function HSLToHex(h, s, l) {
    console.log("h", h);
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return "#" + r + g + b;
  }

  return (
    <div className="App">

      <div className="hero-root">
        <h1>Pick a color, any color!</h1>
        <ColorForm onGenerate={generatePalette} />
      </div>

      {palettes.map(p => (
        <ColorPalette key={p.title}
          gradientName={p.title}
          hexColors={p.colors} />
      ))}

    </div>
  );
}

export default App;
