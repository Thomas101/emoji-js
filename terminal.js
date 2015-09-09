(function(ns) {
	var previous = [];
	var previousPos = undefined;

	var escapeHTML = function(unsafe) {
		return String(unsafe)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
        	.replace(/>/g, "&gt;")
         	.replace(/"/g, "&quot;")
        	.replace(/'/g, "&#039;");
 	};

 	var consoleFormat = function(o) {
 		try {
 			o = JSON.stringify(o)
 		} catch (e) { }
 		return escapeHTML(o);
 	};

 	var terminal = function(inElem, histElem) {
 		// Add better emoji support in, browsers can be flakey
 		twemoji.size = '16x16';

		inElem.addEventListener('keypress', function(evt) {
			if (evt.keyCode === 13 && !evt.shiftKey && !evt.ctrlKey && !evt.altKey) {
				evt.preventDefault();
				if (this.value.trim().length) {
					var code = this.value.trim();
					previous.push(code);
					previousPos = undefined;
					histElem.innerHTML += '<div class="code">' + escapeHTML(code).replace(/\n/g, '<br />') + '</div>';
					this.value = '';
					var result = undefined;
					try {
						result = eval(code);
					} catch (e) {
						histElem.innerHTML += '<div class="error">' + escapeHTML(e) + '</div>';
					}
					histElem.innerHTML += '<div class="result">' + consoleFormat(result) + '</div>';

					// Move terminal down & add better emoji support in
					twemoji.parse(histElem);
					histElem.scrollTop = histElem.scrollHeight;
				} else {
					this.value = '';
				}
			}
		}, false);


		// Add histry support
		inElem.addEventListener('keydown', function(evt) {
			if (evt.keyCode === 38) {
				if (previousPos === undefined) {
					previousPos = previous.length;
				}
				if (previousPos > 0) {
					previousPos--;
					inElem.value = previous[previousPos];
				}
			}
			if (evt.keyCode === 40) {
				if (previousPos === undefined) {
					previousPos = previous.length;
				}
				if (previousPos < previous.length - 1) {
					previousPos++;
					inElem.value = previous[previousPos];
				}
			}
		});

		// Pre-focus
		inElem.focus();
		histElem.addEventListener('click', function(evt) {
			inElem.focus()
		});

		ns.console.log = function(str) {
			histElem.innerHTML += '<div class="result">' + consoleFormat(str) + '</div>';
			twemoji.parse(histElem);
		};
	};

	ns.terminal = terminal;
})(window);