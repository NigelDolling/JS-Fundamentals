const arg = parseInt(process.argv[2]);

if (isNaN(arg)) {
    console.log('Missing number of occurrences');
} else if (arg > 0 ) {
    let output = '';
    for (let i = 0; i < arg; i++) {
        output += 'C is fun\n';
    }
    console.log(output.trim());
}
