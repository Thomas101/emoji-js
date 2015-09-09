# emoji-js 😀

emoji-js is a high-performance, 362byte language for the modern web. It's designed to be lightweight, flexible, and fully compatable with vanilla JavaScript. The code can be compiled or interpolated at run-time and is converted into the equivalent JavaScript. The compiled output is readable and pretty-printed, will work in every JavaScript runtime and always runs faster than the equivalent handwritten JavaScript†.

## What does it do?
Is it no obvious? It allows you to use emoji's in your code. Not just in strings, but as variable names too. Take this example...

```js
var 😎 = { "language":"emoji-js", "performance":"great" };
for (var 😃 in 😎) {
  console.log(😃 + " = " + 😎[😃]);
}

> language = emoji-js
> performance = great
```

## How do I get it?
You can start off with the in-browser demo http://htmlpreview.github.io/?https://raw.githubusercontent.com/Thomas101/emoji-js/master/index.html

Once you're convinced this is for you (because lets face it, who is it not for?)
1.) Clone the repository

`git clone https://github.com/Thomas101/emoji-js.git`

2.) Add the following to your page header

`<script type="text/javascript" src="emojijs.js"></script>`

3.) Just use **eval throughout your codebase**†† and you're off!

```js
eval('var 😎 = { "language":"emoji-js", "performance":"great" }; for (var 😃 in 😎) { console.log(😃 + " = " + 😎[😃]); }');
```
It's recommended that you use a side-loader function to insert your emoji-js code rather than placing all your code on a single line and within quotes, but that's up to you. Sometimes it's good to keep your line count to a minimum!

## Language features
emoji-js is a dynamic, weakly typed, prototype-based language with first-class functions and emoji's. Alongside all the key features that the core JavaScript engine provides it also provides other key features that require post-processing of your code. No need to install http://gruntjs.com/, http://gulpjs.com/ or http://brunch.io/ to minify and obfuscate your code, emoji-js comes with these features pre-built into the parser.

### Language features : Minification
Now that you're able to relace all those long variable names with emoji's the size of your code will shrink in no time reducing the payload that has to be delivered to the client. Just take the following example...

```js
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demo").innerHTML = "The total is: " + total;
```

```js
var 😀 = 5;
var 😁 = 6;
var 😂 = 😀 + 😁;
document.getElementById("demo").innerHTML = "The total is: " + 😂;
```

### Language features : Obfuscation
By using emoji-js you can guarantee that your code will be harder to copy, harder to change and harder to maintain for anyone else. Besides making your code almost unreadable to anyone who doesn't understand what 😀😁😂😃😄😅😆😇😈👿 means, it also ensures that anyone trying to copy your code will undoubtedly come up against utf-encoding issues or text-input issues.

## Performance
Because emoji-js runs ontop of a JavaScript engine you get all the great performance advantages of modern JavaScript as well as the added bost of 🙀 😺 and 🐶. See for yourself, once you've tried emoji-js in your browser you'll be convinced about the instant performance boost your code receives, even when you choose not to name anything with an emoji†.

## Browser Support
emoji-js works across all major browsers† and has been thoroughly tested across all major browsers and versions†.

Here's our official support list, if you find any problems you should report them immediately so we can improve support

* iOS 4 and higher††
* Android 1.6 and higher††
* IE6 and higher††
* Firefox†
* Safari†
* Chrome

## Node Support
Node Support is coming very soon so you can 🐶 on your server

## Todo
* Support More emojis
* More tests
* Get the chromium team to add our repo into their codebase so everyone can enjoy emoji-js


## License
WTFPL http://www.wtfpl.net/about/

There really is nothing of value in this repository. Really.


😀 😁 😂 😃 😄 😅 😆 😇 😈 👿 😉 😊 😋 😌 😍 😎 😏 😐 😑 😒 😓 😔 😕 😖 😗 😘 😙 😚 😛 😜 😝 😞 😟 😠 😡 😢 😣 😤 😥 😦 😧 😨 😩 😪 😫 😬 😭 😮 😯 😰 😱 😲 😳 😴 😵 😶 😷

† probably

†† not a good idea
