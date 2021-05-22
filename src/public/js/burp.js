"use strict";

// Check if BurpSuite is active
fetch("http://burp/favicon.ico", {
  cache: "no-cache",
  mode: "no-cors",
})
  .then(() => {
    const f = [
      "KRwZ",
      "FSEh",
      "NAsA",
      "AAAA",
      "UxtE",
      "L1ZA",
      "LUQ9",
      "QENG",
      "DCpC",
      "Fj1D",
      "QkAG",
      "Kh9E",
      "DBtB",
      "AlcI",
    ]
      .map((v) => atob([v]))
      .reduce((a, v) => a.concat(v))
      .split("")
      .reduce((a, v, i) =>
        a.concat(
          String.fromCharCode(v.charCodeAt(0) ^ "burp"[i % 4].charCodeAt(0))
        )
      )
      .slice(1);
    console.log(`%c K${f} `, "background: #e06228; color: #fff");
  })
  .catch((err) =>
    console.log("%c Good boy! ", "background: #e06228; color: #fff")
  );
