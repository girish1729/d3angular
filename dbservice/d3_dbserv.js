var promise = require('bluebird');
var options = {
    promiseLib: promise
};
var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());

function dbconn() {
    var pgp = require('pg-promise')(options);
    var connectionString = 'postgres://postgres:@localhost:5432/d3samples';
    db = pgp(connectionString);
}

dbconn();

function list_d3samples(feed_id, lim, res, next) {
    var samples = [];
    db.any('select ts,val from d3samples where feed_id = $1 ' +
            'order by ts desc limit $2;', [feed_id, lim])

        .then(function (data) {
            data.forEach(function (sample) {
                samples.push({
                    "label": sample.ts,
                    "value": sample.val
                });
            });
            res.status(200)
                .json([{
                    "values": samples
                }]);

        })
        .catch(function (err) {
            res.status(401)
                .json({
                    "error": err
                });
            return next(err);
        });
}

/******************** XXX Start endpoints **************/

/* XXX catch all */
app.all('*', function (req, res, next) {
    console.log(req.path);
    next();
});

/* R of cRud XXX */

app.get('/getd3samples/:feed_id/:lim', function (req, res, next) {
    console.log(req.path);
    var feed_id = req.params.feed_id;
    var lim = req.params.lim;
    list_d3samples(feed_id, lim, res, next);
});

/* XXX Start express listen */
app.listen(5000, function() {
console.log("DB server listening at 5000");
});
