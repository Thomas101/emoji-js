(function(ns) {
	var jsEval = ns.eval;
	var prefix = '__emoji_';
	var symbols = {};
	for (var i = 128512; i < 128512+79; i++) {
		symbols[i] = new RegExp(String.fromCodePoint(i), 'g');
	}

	var emojiEval = function(code) {
		for (var k in symbols) {
			code = code.replace(symbols[k], prefix + k);
		}
		return jsEval(code);
	};

	ns.eval = emojiEval;
})(window)