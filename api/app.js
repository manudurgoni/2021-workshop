const timeout = (t, val) => {
  return new Promise(function(resolve) {
      setTimeout(function() {
          resolve(val);
      }, t);
  });
}


const getRecommandations = async () => {
  await timeout(1000)
  console.log('j’attendu 1s')
}

getRecommandations()