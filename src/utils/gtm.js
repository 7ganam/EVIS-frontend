export const analytics = (w, d, s, l, i) => {
  w.dataLayer = window.dataLayer || [];
  w.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var dl = l != "dataLayer" ? "&l=" + l : "";
  var scr = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  /*
        To avoid Multiple installations of google tag manager detected warning
    */
  if (!scriptExists(scr)) {
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement("script");
    j.async = true;
    j.src = scr;
    f?.parentNode?.insertBefore(j, f);
  }
};
const scriptExists = (url) => {
  var scripts = document.getElementsByTagName("script");
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src == url) return true;
  }
  return false;
};
