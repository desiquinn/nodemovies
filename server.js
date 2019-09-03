const express = require('express');0

const server = express();


server.get('/', (req, res) => {
    res.status(200).json({api: 'up...'});
});

// export default server; // ES2015 Modules
module.exports = server; // CommonJS modules (node)