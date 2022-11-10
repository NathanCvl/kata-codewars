function well(x){
  let good = 0;
  for (const item of x) {
	  if ('good' === item) {
		  good++;
	  }
  }
	return good === 0 ? 'Fail!' : good === 1 || good === 2 ? 'Publish!' : 'I smell a series!';

}

console.log((well(['bad', 'bad', 'bad'])));
