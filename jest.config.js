module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
        "!**/coverage/**",
        "!**/config/**",
        "!**/migrations/**",
        "!**/seeds/**",
        "!jest.config.js",
        "!knexfile.js"
    ]
};