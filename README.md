Simple D3 graphing with angular integration
===========================================

This project does d3 rendering of time series data(double precision)
with Angular.js factory and nvd3 rendering using JSON.

Overview
========

Using a simple Angular.js module I demonstrate how 
 you can show double precision sample values changing against timestamps
from a database.

We use Google's Angular material and this is based on
 material design principles.

Populate DB
===========

Since we are dealing with serious double precision data we use
postgresDB for this.

Here is how you populate it.

psql -U postgres
psql> create database d3samples;
psql> create table d3samples(id serial,feed_id integer, ts timestamp,val
double precision);
psql> insert into d3samples values(DEFAULT, 20, 'now()', 23432.343);
...
psql>quit


Contact
=======

Girish Venkatachalam <girish@gayatri-hitech.com>
