<template>
    <v-layout row wrap>
        <v-flex xs12 sm6 md4>
            <v-card>
                <v-card-title>
                    <h2 class="headline">How to use them?</h2>
                </v-card-title>
                <v-card-text>
                    <p>
                        We use <a hrf="https://gionkunz.github.io/chartist-js/">Chartis</a> charts, if it does not suit you, fell free to use another library.
                    </p>
                    <p>
                        First thing you should add the css needed in the parent component where you will use the charts.
                    </p>
                    <div class="code-block">
                        <span class="line">1</span>@<span class="keyword">import</span><span class="string"> "chartist/dist/scss/chartist.scss"</span>;
                    </div>
                    <br>
                    <p class="mb-2">Then we add the chart component</p>
                    <div class="code-block">
                        <span class="line">1</span> <span class="keyword">import</span> Chart <span class="keyword">from </span> <span class="string">'../UIcomponents/Charts/Chart'</span>
                        <br>
                        <span class="line">2</span> <span class="keyword">export default</span> {
                        <br>
                        <span class="line">3</span> <span class="string ident-1">components</span>: {
                        <br>
                        <span class="line">4</span> <span class="ident-2">Chart</span>
                        <br>
                        <span class="line">5</span> <span class="ident-1">}</span>
                        <br>
                        <span class="line">6</span> }
                    </div>
                    <br>
                    <p>And at last we add the component</p>
                    <div class="code-block">
                        <span class="line">1</span> <span><</span><span class="tag">chart</span><span> <span class="string"> chart-type="Bar"</span>></span> <span></</span><span class="tag">chart</span><span>></span> 
                    </div>
                </v-card-text>
                <v-card-title>
                    <h2 class="headline">Chart props</h2>
                </v-card-title>
                <v-card-text>
                    <div class="mb-3">
                        <h3 class="teal--text text--lighten-1">
                            <em>chart-type</em>
                        </h3>
                        <p>Define the chart type, the accepted values are:</p>
                        <ul>
                            <li>Line</li>
                            <li>Bars</li>
                            <li>Pie</li>
                            <li>Donut</li>
                        </ul>
                    </div>
                    <div class="code-block mb-3">
                        <span class="line">1</span> <span><</span><span class="tag">chart</span><span> <span class="string"> chart-type="Bar"</span>></span> <span></</span><span class="tag">chart</span><span>></span> 
                    </div>
                    <div class="mb-3">
                        <h3 class="teal--text text--lighten-1">
                            <em>chart-data</em>
                        </h3>
                        <p>Define the chart type, the accepted values are:</p>
                        <ul>
                            <li>Line</li>
                            <li>Bars</li>
                            <li>Pie</li>
                            <li>Donut</li>
                        </ul>
                    </div>
                    <div class="code-block mb-3">
                        <span class="line">1</span> <span class="keyword">export default</span> {
                            <br>
                            <span class="line">2</span> <span class="comment ident-1">//Line chart data object</span>
                            <br>
                            <span class="line">3</span> <span class="string ident-1">data </span>: <span class="method">function</span>() {
                            <br>
                            <span class="line">4</span><span class="keyword ident-2">return</span> {
                            <br>
                            <span class="line">5</span> <span class="ident-3">data</span>: {
                            <br>
                            <span class="line">6</span> <span class="string ident-4">label</span> : [<span class="string">'Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'</span>],
                            <br>
                            <span class="line">7</span> <span class="string ident-4">series</span>: [
                            <br>
                            <span class="line">8</span> <span class="ident-5">[<span class="number">5</span>, <span class="number">4</span>, <span class="number">3</span>, <span class="number">7</span>, <span class="number">5</span>, <span class="number">10</span>],</span>
                            <br>
                            <span class="line">9</span> <span class="ident-5">[<span class="number">3</span>, <span class="number">2</span>, <span class="number">9</span>, <span class="number">5</span>, <span class="number">4</span>, <span class="number">6</span>],</span>
                            <br>
                            <span class="line">10</span> <span class="ident-5">[<span class="number">2</span>, <span class="number">1</span>, <span class="number">-3</span>, <span class="number">-4</span>, <span class="number">-2</span>, <span class="number">0</span>]</span>
                            <br>
                            <span class="line">11</span> <span class="ident-4">]</span>
                            <br>
                            <span class="line">12</span> <span class="ident-3">}</span>
                            <br>
                            <span class="line">13</span> <span class="ident-2">}</span>
                            <br>
                            <span class="line">14</span><span class="ident-1">}</span>
                            <br>
                            <span class="line">15</span>}
                    </div>
                    <div class="mb-3">
                        <h3 class="teal--text text--lighten-1">
                            <em>chart-options</em>
                        </h3>
                        <p>Define the chart options, it accept and javaSript Object:</p>
                    </div>
                    <div class="code-block">
                        <span class="line">1</span> <span class="keyword">export default</span> {
                        <br>
                        <span class="line">2</span> <span class="comment ident-1">//Line chart options</span>
                        <br>
                        <span class="line">3</span> <span class="string ident-1">data</span>: <span class="method">function</span>() {
                        <br>
                        <span class="line">4</span> <span class="keyword ident-2">return</span> {
                        <br>
                        <span class="line">5</span> <span class="string ident-3">options</span>: {
                        <br>
                        <span class="line">6</span> <span class="string ident-4">width</span>: <span class="number">1000</span>,
                        <br>
                        <span class="line">7</span> <span class="string ident-4">height</span>: <span class="number">300</span>,
                        <br>
                        <span class="line">8</span> <span class="string ident-4">seriesBarDistance</span>: <span class="number">15</span>
                        <br>
                        <span class="line">9</span> <span class="ident-3">}</span>
                        <br>
                        <span class="line">10</span> <span class="ident-2">}</span>
                        <br>
                        <span class="line">11</span> <span class="ident-1">}</span>
                        <br>
                        <span class="line">12</span>}
                    </div>
                    <p>For more information about the data and options, you can check the plugin page <a hrf="https://gionkunz.github.io/chartist-js/">here</a></p>
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex xs12 sm6 md8>
            <v-card class="mb-3">
                <v-card-title>
                    <h3 class="headline">
                        Bars Chart
                    </h3>
                </v-card-title>
                <v-card-text>
                    <chart chart-type="Bar" :chart-data="Bars.data" :chart-options="Bars.options"></chart>
                </v-card-text>
            </v-card>
            <v-card class="mb-3">
                <v-card-title>
                    <h3 class="headline">
                        Line Chart
                    </h3>
                </v-card-title>
                <v-card-text>
                    <chart chart-type="Line" :chart-data="Line.data" :chart-options="Line.options"></chart>
                </v-card-text>
            </v-card>
            <v-card class="mb-3">
                <v-card-title>
                    <h3 class="headline">
                        Donut Chart
                    </h3>
                </v-card-title>
                <v-card-text>
                    <chart chart-type="Pie" :chart-data="Donut.data" :chart-options="Donut.options"></chart>
                </v-card-text>
            </v-card>
            <v-card class="mb-3">
                <v-card-title>
                    <h3 class="headline">
                        Pie Chart
                    </h3>
                </v-card-title>
                <v-card-text>
                    <chart chart-type="Pie" :chart-data="Pie.data" :chart-options="Pie.options"></chart>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
import Chart from '../../UIcomponents/Charts/Chart'
export default {
    name: 'charts',
    components: {Chart},
    data: function() {
        return {
            Line: {
                data: {
                    labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6'],
                    series: [
                        [5, 4, 3, 7, 5, 10],
                        [3, 2, 9, 5, 4, 6],
                        [2, 1, -3, -4, -2, 0]
                    ]
                },
                options: {
                    width: 300,
                    height: 200,
                    // Don't draw the line chart points
                    showPoint: false,
                    // Disable line smoothing
                    lineSmooth: false,
                    // X-Axis specific configuration
                    axisX: {
                    // We can disable the grid for this axis
                    showGrid: false,
                    // and also don't show the label
                    showLabel: false
                    },
                    // Y-Axis specific configuration
                    axisY: {
                        // Lets offset the chart a bit from the labels
                        offset: 60,
                        // The label interpolation function enables you to modify the values
                        // used for the labels on each axis. Here we are converting the
                        // values into million pound.
                        labelInterpolationFnc: function(value) {
                            return '$' + value + 'm';
                        }
                    }
                }
            },
            Bars: {
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    series: [
                        [5, 4, 7, 3, 24, 63, 50, 14, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                        [3, 2, 7, 3, 24, 63, 50, 14, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
                    ]
                },
                options: {
                    width: 420,
                    height: 200,
                    seriesBarDistance: 15
                }
            },
            Pie: {
                data: {
                    series: [5, 4, 3, 7, 5, 10]
                },
                options: {
                    width: 300,
                    height: 200
                }
            },
            Donut: {
                data: {
                    series: [5, 4, 3, 7, 5, 10]
                },
                options: {
                    donut: true,
                    width: 300,
                    height: 200
                }
            }
        }
    }
}
</script>
<style lang="scss">
    @import "chartist/dist/scss/chartist.scss";
    .code-block {
        width: 100%;
        color: #F8F8F2;
        padding: 2em 3em;
        background-color: #272822;
        &::selection {
            background-color: #49483E
        }
        .keyword, .tag, .structure {
            font-weight: 500; 
            color: #F92672;
        }
        .selector, .string {
            color: #A6E22E;
        }
        .rule {
            color: #66D9EF;
            margin-left: 24px;
        }
        .number, .color {
            color: #AE81FF;
        }
        .method {
            color: #6ec3ff;
        }
        .comment {
            color: #555555;
        }
        .line {
            width: 25px;
            color: #777;
            display: inline-block;
        }
        @for $i from 1 to 6 {
            .ident-#{$i} {
                margin-left: (24*$i)+0px
            }
        }
    }
</style>