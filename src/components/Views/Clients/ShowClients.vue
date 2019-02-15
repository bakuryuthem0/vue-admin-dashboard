<template>
	<v-flex s12>
		holi
	</v-flex>
</template>
<script>
	export default {
		data: function() {
			return {
				clients: []
			}
		},
		created: function() {
			this.fetch();
		},
		methods: {
			async fetch() {
				this.clients = this.$http.get('oauth/clients')
			}
		},
		watch: {
			'$route': 'fetch'
		}
	}
</script>