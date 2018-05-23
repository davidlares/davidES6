module.exports = function average(...args){
	var numbers = args;
	var min = args.reduce( (sum,x) => sum + x, 0) / args.length;
	return min;
}