const express = require('express');
const Path = require('path');
const bodyParser = require('body-parser');

const routes = express.Router();

const assetFolder = Path.resolve(__dirname, '../client');
const npms = Path.resolve(__dirname, '../bower_components/');

routes.use(express.static(assetFolder));
routes.use('/bower_components', express.static(npms));

routes.get('/*', function(req,res) {
	res.sendFile(assetFolder + '/index.html');
});

const app = express();

app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 8000;
app.listen(port);
console.log("Environment: ", process.env.NODE_ENV);
console.log("Express server listening on port: ", port);
