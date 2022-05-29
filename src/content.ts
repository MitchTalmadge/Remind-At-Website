import sites from './sites';

(() => {
  const url = location.href;
  for(let pattern of sites) {
    if(url.match(pattern)) {
      alert("On Air?");
      return;
    }
  }  
})();
