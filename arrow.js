var inputs = process.argv.slice(2);
var result = inputs.map( d => {
	return d.charAt(0);
}).reduce(function(previous, elem){
	return previous + elem;
})

console.log(`[${inputs}] becomes "${result}"`);