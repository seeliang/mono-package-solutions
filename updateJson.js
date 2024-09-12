const fs = require('fs');

const mergeObject = (obj1, obj2) => {
    const keys = Object.keys(obj2);
    keys.forEach(key => {
        if (obj1[key] && typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            obj1[key] = mergeObject(obj1[key], obj2[key]);
        } else {
            obj1[key] = obj2[key];
        }
    });
    return obj1;
}

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
        const jsonUpdate = mergeObject(jsonFile, update);

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