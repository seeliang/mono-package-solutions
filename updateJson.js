const fs = require('fs');

// Step 1: Read the existing json
module.exports = ({ pathToJson, update }) => {
    fs.readFile(pathToJson, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading json:', err);
            return;
        }

        // Step 2: Parse the JSON content
        const jsonFile = JSON.parse(data);

        // Step 3: Add the main field
        const jsonUpdate = {
            ...jsonFile,
            ...update
        };

        console.log('json updated:', jsonUpdate);

        // Step 4: Write the updated JSON back to json
        fs.writeFile(pathToJson, JSON.stringify(jsonUpdate, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing json:', err);
                return;
            }
            console.log('json updated successfully');
        });
    });
}