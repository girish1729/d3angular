Simple D3 graphing with angular integration
===========================================

This project does d3 rendering of time series data
(double precision float)
with Angular.js factory and nvd3 rendering using JSON
 from a HTTP express server fetching samples from postgres DB.

Overview
========

Using a simple Angular.js module we see how
 you can show double precision sample values 
against timestamps
from a database.

We use Google's Angular material and this is based on
 material design principles.

You find as and when you move slider the graph gets updated dynamically
demonstrating Angular's data binding principles.

Populate DB
===========

Since we are dealing with serious double precision data we use
postgresDB for this.

Here is how you populate it.
```
psql -U postgres
psql> create database d3samples;
psql> \c d3samples;
psql> create table d3samples(id serial,feed_id integer, ts timestamp,val
double precision);
psql> insert into d3samples values(DEFAULT, 20, 'now()', 23432.343);
psql> insert into d3samples values(DEFAULT, 20, 'now()', 32.0343);
psql> insert into d3samples values(DEFAULT, 20, 'now()', 132.0343);
psql> insert into d3samples values(DEFAULT, 20, 'now()', 82.038);
psql> insert into d3samples values(DEFAULT, 20, 'now()', 92.033);
...
psql>quit
```

Screenshots
===========

![shot1](https://cloud.githubusercontent.com/assets/6890469/23990173/36d1fe64-0a5b-11e7-8fd0-f45a5f2296d2.png)
![shot2](https://cloud.githubusercontent.com/assets/6890469/23990184/3efab61c-0a5b-11e7-905b-a08366880281.png)


Contact
=======

Girish Venkatachalam <girish@gayatri-hitech.com>
