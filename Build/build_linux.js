const shell = require('shelljs');
const files = require('fs');

// remove result directory if present, then make it again empty
if(files.existsSync('result')){
	shell.exec('rm -r result');
}
shell.exec('mkdir result');

// not much to do, just copy all the files into the result folder
shell.exec('cp ../brainf.js result/brainf.js');
shell.exec('cp ../brainfuck.css result/brainfuck.css');
shell.exec('cp ../brainfuck.html result/brainfuck.html');

// set brainfuck.html as index
shell.exec('mv result/brainfuck.html result/index.html');