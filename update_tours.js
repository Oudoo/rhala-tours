const fs = require('fs');

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add exact bullet point to ALL 'included' arrays if not present
    const guideBullet = '"A private certified English Speaking Egyptologist During all day tours (All languages are available for extra charge)"';
    
    // Replace "Entrance Fees to Sites" or similar in included, and add "Entrance Fees" to excluded
    content = content.replace(/"Entrance Fees to Sites",?\s*/g, '');
    content = content.replace(/"Entrance fees(?: to [^"]+)?",?\s*/g, '');
    content = content.replace(/"Entrance to [^"]+",?\s*/g, '');
    
    // Make sure we add "Entrance Fees" to excluded arrays
    content = content.replace(/excluded:\s*\[/g, 'excluded: [\n          "Entrance fees to all sites",');
    
    // Add the guide bullet point
    content = content.replace(/included:\s*\[/g, 'included: [\n          ' + guideBullet + ',');

    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
}

updateFile('src/data/toursData.ts');
updateFile('src/data/dayToursData.ts');

