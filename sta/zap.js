{ signal : [
  { name: "clk",  wave: "p......" },
  { name: "bus",  wave: "x.34.5x",   data: "head body tail" },
  { name: "wire", wave: "0.1..0." },
]}

document.addEventListener("DOMContentLoaded", function() {
    if (window.WaveDrom) WaveDrom.ProcessAll();
    // console.log("WaveDrom processed all diagrams.");
  });
