const exec = require('child_process').execSync;
const files = require('fs');

// remove result directory if present, then make it again empty
if(files.existsSync('result')){
	exec('rmdir /s /q result');
}
exec('mkdir result');

// not much to do, just copy all the files into the result folder
exec('copy "..\\brainf.js" "result\\brainf.js"');
exec('copy "..\\brainfuck.css" "result\\brainfuck.css"');
exec('copy "..\\brainfuck.html" "result\\brainfuck.html"');

// set brainfuck.html as index
exec('ren "result\\brainfuck.html" "index.html"');