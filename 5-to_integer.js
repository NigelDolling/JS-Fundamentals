let arg1 = process.argv[2];
arg1 = parseInt(arg1);

if (isNaN(arg1)) {
    console.log('Not a number');
} else {
    console.log('My number: ' + arg1); 
}
