const checkStatus = (req, res, next) => {
    res.status(200)
        .send({
            info: 'Server is working'
        });
}

module.exports = {
    checkStatus,
};