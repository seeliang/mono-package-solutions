const args = process.argv.slice(2);

const { get } = require('http');
const updateJson = require('./updateJson');

if (args.length < 1) {
    console.error('Please provide path and update');
    return;
}
let pathToJson
let updates = []
args.forEach(arg => {
    if (arg.includes('path')) {
        pathToJson = arg.split('=')[1]
        return

    }
    if (arg.includes('update')) {
        updates = [...updates, arg.split('=')[1]]
        return
    }

});
if (!pathToJson) {
    console.error('Please provide path');
    return;
}

const getUpdates = (updates) => updates.reduce((acc, update) => {
    const [key] = update.split(':');
    const value = update.split(':').slice(1).join(':');
    if (value.includes(':')) {
        return {
            ...acc,
            [key]: getUpdates([value])
        }
    }
    return {
        ...acc,
        [key]: value
    }
}, {});
const updateObject = getUpdates(updates);


console.log('updates:', JSON.stringify(updateObject), 'path:', pathToJson);

updateJson({ pathToJson, update: updateObject });