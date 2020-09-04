// Validate incoming data
//  Checking if each data value is NOT null, undefined or "".
const validateData = (req, res, next) => {
    const data = req.body;
    let result = Object.values(data).some(isNoValue);
    if (result === true) {
        // If a value if not valid 
        res.json({
            message: 'Bad data.'
        });
        return;
    } else {
        next();
    }
}

const isNoValue = (val) => {
    if (val === null || val === "") return true;
    return false;
}


module.exports = {
    validateData,
};