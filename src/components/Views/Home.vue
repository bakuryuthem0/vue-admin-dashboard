<template>
	<v-layout column>
		<v-layout row wrap mb-3>
			<v-flex xs12 md9>
				<v-layout row wrap mb-3>
					<v-flex xs12>
						<h2>Dashboard</h2>
					</v-flex>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="dashboard" size="large" theme="primary" text-theme="white--text">
							<template slot="headline">
								Primary card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="face" size="large" theme="secondary" text-theme="white--text">
							<template slot="headline">
								Secondary card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="done_all" size="large" theme="green" text-theme="white--text">
							<template slot="headline">
								Success card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="clear" size="large" theme="red" text-theme="white--text">
							<template slot="headline">
								Error card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
				</v-layout>
				<v-layout row wrap my-3>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="dashboard" size="large" :full="true" theme="primary" text-theme="white--text">
							<template slot="headline">
								Primary card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="face" size="large" :full="true" theme="secondary" text-theme="white--text">
							<template slot="headline">
								Secondary card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="done_all" size="large" :full="true" theme="green" text-theme="white--text">
							<template slot="headline">
								Success card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
					<v-flex xs12 sm6 lg3 mb-2>
						<icon-card icon="clear" size="large" :full="true" theme="red" text-theme="white--text">
							<template slot="headline">
								Error card
							</template>
							<template slot="action">
								<v-layout row justify-content-around>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
									<v-flex>
										<router-link to="/dashboard" class="white--text">Link</router-link>
									</v-flex>
								</v-layout>
							</template>
						</icon-card>
					</v-flex>
				</v-layout>
				<v-layout row wrap my-3>
					<v-flex xs12>
						<v-card color="light-green" class="white--text">
							<v-layout row>
								<v-flex xs12 ref="barchart">
									<chart chart-type="Bar" :chart-data="Bars.data" :chart-options="Bars.options"></chart>
								</v-flex>
							</v-layout>
							<v-layout row>
								<v-flex xs12>
									<v-card-title class="pb-2" primary-title >
										<div>
											<div class="headline mb-2">Daily Sales</div>
											<div><v-icon class="white--text">trending_up</v-icon> 55% increase in today sales.</div>
										</div>
									</v-card-title>
									<v-card-actions class=" px-3 pt-2">
										<v-icon class="white--text mr-1">schedule</v-icon> Last updated 5 minutes ago
									</v-card-actions>
								</v-flex>
							</v-layout>
						</v-card>
					</v-flex>
				</v-layout>
				<v-layout row wrap my-3>
					<v-flex xs12 md6>
						<toolbar-card 
							title="Employees Stats" 
							sub-title="New employees on 15th September, 2016" 
							:showIcon="true" 
							icon="apps" 
							theme="primary">
							<template slot="content">
								<v-data-table
									:headers="collections.table.columns"
									:items="collections.table.items"
									class="elevation-1"
								>
									<template slot="items" slot-scope="props">
										<td>{{ props.item.id }}</td>
										<td class="text-xs-right">{{ props.item.name }}</td>
										<td class="text-xs-right">{{ props.item.email }}</td>
										<td class="text-xs-right">{{ props.item.salary }}</td>
									</template>
								</v-data-table>
							</template>
						</toolbar-card>
					</v-flex>
					<v-flex xs12 md6>
						<toolbar-card 
							title="Tasks" 
							theme="amber lighten-1" 
							text-color="grey--text text--darken-3">
							<template slot="toolbar">
								<v-btn icon>
									<v-icon class="grey--text text--darken-3">search</v-icon>
								</v-btn>
								<v-btn icon>
									<v-icon class="grey--text text--darken-3">refresh</v-icon>
								</v-btn>
							</template>
							<template slot="content">
								<v-list dense class="pb-3">
									<v-list-tile v-for="item in collections.iterator.items" :key="`list${item.id}`" class="my-2">
										<v-list-tile-content>
											<v-switch
												class="mt-0"
												v-model="values"
												:value="item.id"
												:label="item.text"
												:color="item.color"
											></v-switch>
										</v-list-tile-content>
									</v-list-tile>
								</v-list>
							</template>
						</toolbar-card>
					</v-flex>
				</v-layout>
			</v-flex>
			<v-flex xs12 md3>
				<v-layout row wrap>
					<v-flex xs12 mb-3>
						<v-card color="cyan" class="white--text">
							<v-layout row>
								<v-flex xs12>
									<chart chart-type="Pie" :chart-data="Pie.data" :chart-options="Pie.options"></chart>
								</v-flex>
							</v-layout>
							<v-layout row>
								<v-flex xs12>
									<v-card-title primary-title>
										<div>
											<div class="headline">Resource manages</div>
											<div><v-icon class="white--text">trending_up</v-icon> 6 users using resources.</div>
										</div>
									</v-card-title>
									<v-card-actions class="pa-3">
										<v-icon class="white--text">schedule</v-icon> updated 5 minutes ago
									</v-card-actions>
								</v-flex>
							</v-layout>
						</v-card>
					</v-flex>
					<v-flex xs12 mb-3>
						<v-card color="red" class="white--text">
							<v-layout row>
								<v-flex xs12>
									<chart :chart-data="Line.data" :chart-options="Line.options"></chart>
								</v-flex>
							</v-layout>
							<v-layout row>
								<v-flex xs12>
									<v-card-title class="pb-2" primary-title >
										<div>
											<div class="headline mb-2">Marketing campaing</div>
											<div><v-icon class="white--text">trending_up</v-icon> 55% increase in today sales.</div>
										</div>
									</v-card-title>
									<v-card-actions class=" px-3 pt-2">
										<v-icon class="white--text mr-1">schedule</v-icon> campaign sent 2 days ago
									</v-card-actions>
								</v-flex>
							</v-layout>
						</v-card>
					</v-flex>
					<v-flex xs12 mb-3>
						<v-card color="purple" class="white--text">
							<v-layout row>
								<v-flex xs12>
									<chart chart-type="Pie" :chart-data="Donut.data" :chart-options="Donut.options"></chart>
								</v-flex>
							</v-layout>
							<v-layout row>
								<v-flex xs12>
									<v-card-title class="pb-2" primary-title >
										<div>
											<div class="headline mb-2">Latest survey</div>
											<div><v-icon class="white--text">fingerprint</v-icon> 44 New surveys.</div>
										</div>
									</v-card-title>
									<v-card-actions class=" px-3 pt-2">
										<div class="d-flex justify-content-center align-items-center">
											<v-icon class="white--text mr-1">schedule</v-icon> Survey sent 5 days ago
										</div>
									</v-card-actions>
								</v-flex>
							</v-layout>
						</v-card>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-layout>
</template>
<script>
	import Chart from '../UIcomponents/Charts/Chart'
	import IconCard from '../UIcomponents/Cards/IconCard'
	import ToolbarCard from '../UIcomponents/Cards/ToolbarCard'
	export default {
		components: {
			Chart,
			IconCard,
			ToolbarCard
		},
		data () {
			return {
				values: [1,3,4],
				collections: {
					table: {
						columns: [
							{value: 'id', text: 'ID'},
							{value: 'name', text: 'Name'},
							{value: 'email', text: 'Email'},
							{value: 'salary', text: 'Salary'}
						],
						items: [
							{
								id: 1,
								name: 'John',
								email: 'john.doe@example.com',
								salary: 36.73
							},
							{
								id: 2,
								name: 'Marcus',
								email: 'marcus.doe@example.com',
								salary: 46.73
							},
							{
								id: 3,
								name: 'Mary',
								email: 'mary.doe@example.com',
								salary: 16.73
							},
							{
								id: 4,
								name: 'Peter',
								email: 'peter.doe@example.com',
								salary: 26.73
							},
						]
					},
					iterator: {
						items: [
							{
								id: 1,
								text: 'Sign contract for "What are conference organizers afraid of?"',
								color: 'red'
							},
							{
								id: 2,
								text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
								color: 'cyan'
							},
							{
								id: 3,
								text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
								color: 'orange'

							},
							{
								id: 4,
								text: 'Create 4 Invisible User Experiences you Never Knew About',
								color: 'indigo'
							},
							{
								id: 5,
								text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
								color: 'warning'
							},
							{
								id: 6,
								text: 'Material icons are delightful, beautifully crafted symbols for common actions and items',
								color: 'danger'
							}
						]
					}
				},
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
						width: 1000,
  						height: 300,
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
</style>