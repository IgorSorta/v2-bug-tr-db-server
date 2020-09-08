// Creating error message end save in log file
const handleDbErrors = (error) => {
    const err = `
    Database ${error.name}:
    Message: ${error.message}
    << ${error.stack} >>
    ${"-".repeat(100)}`;
    console.log(err);

};

module.exports = {
    handleDbErrors,
}