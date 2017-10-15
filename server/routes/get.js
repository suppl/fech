'use strict';

var path = require('path');

module.exports = {

    index(req, res) {
        res.sendFile(path.resolve('./../release/index.html'));
    }
};