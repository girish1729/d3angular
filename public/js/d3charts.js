angular.module('D3Angular')
    .service('D3charts', function () {

        this.drawbarchart = function (sel, samples) {
            nv.addGraph(function () {
                var chart = nv.models.discreteBarChart()
                    .x(function (d) {
                        return d.label
                    })
                    .y(function (d) {
                        return d.value
                    })
                    .staggerLabels(true)
                    .showValues(true)
                    .duration(250);
                d3.select(sel)
                    .datum(samples)
                    .call(chart);
                nv.utils.windowResize(chart.update);
                return chart;
            });
        };

        this.drawlinegraph = function (sel, samples) {

            var boo = samples[0].values;
            boo.forEach(function (j) {
                p = d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ")
                    .parse;
                j.label = p(j.label);
            });

            nv.addGraph(function () {
                var chart = nv.models.lineChart()
                    .useInteractiveGuideline(true)
                    .x(function (d) {
                        return d.label
                    })
                    .y(function (d) {
                        return parseFloat(d.value)
                    })
                    .showLegend(true)
                    .showYAxis(true)
                    .showXAxis(true);
                d3.select(sel)
                    .datum(samples)
                    .call(chart);
                nv.utils.windowResize(chart.update);
                return chart;
            });
        };

    });
