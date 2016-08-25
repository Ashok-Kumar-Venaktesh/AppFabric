const spawn = require('child_process').spawn;
var cloneGit = function(callback1){
	const ls = spawn('git',['clone', 'https://github.com/Ashok-Kumar-Venaktesh/Assignments.git']);

	ls.stdout.on('data', (data) => {
	  console.log(`stdout: ${data}`);
	});

	ls.stderr.on('data', (data) => {
	  console.log(`stderr: ${data}`);
	});

	ls.on('close', (code) => {
	  console.log(`child process exited with code ${code}`);
	  callback1();
	});

}


module.exports = cloneGit; 