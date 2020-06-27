module.exports=(freq, base)=>{
	const cen = (Math.log(freq/base)/Math.log(Math.pow(2, 1/1200)))%1200;
	return Math.round(cen<0?cen+1200:cen);
}
