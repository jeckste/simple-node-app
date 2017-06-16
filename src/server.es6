var express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));
var apiRoutes = express.Router();
app.use('/api', apiRoutes);

apiRoutes.get('/ping', function (req, res) {
  res.send("app version: " + process.env.APP_VERSION);
});

app.listen(app.get('port'), function () {
    console.log('Listening on port ' + app.get('port'));
});
