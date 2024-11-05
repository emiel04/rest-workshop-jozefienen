function removeFromArrayByValue(arr, value) {
    let index = arr.indexOf(value);
    while (index !== -1) {
        arr.splice(index, 1);
        index = arr.indexOf(value); // check for the next occurrence
    }
}

function removeFromArrayByIndex(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    } else {
        throw new Error("Index out of bounds");
    }
}

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
};

export { removeFromArrayByValue, removeFromArrayByIndex, logger };
