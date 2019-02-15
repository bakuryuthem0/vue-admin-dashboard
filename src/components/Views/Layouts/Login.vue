<template>
	<v-content>
		<v-container fluid fill-height>
			<v-layout align-center justify-center>
				<v-flex xs12 sm8 md4>
					<v-card class="elevation-12">
						<v-toolbar dark color="primary">
							<v-toolbar-title>Login form</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-tooltip bottom>
								<v-btn
								slot="activator"
								icon
								large
								>
									<v-icon large>contact_support</v-icon>
								</v-btn>
								<span>Recover password</span>
							</v-tooltip>
						</v-toolbar>
						<v-card-text>
							<v-form>
								<v-text-field v-model="email" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
								<v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" :type="passwordType" :append-icon="passwordIcon" @click:append="show = !show"></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-switch v-model="remember" :label="`Remember me? ${willRemember}`"></v-switch>
							<v-spacer></v-spacer>
							<v-btn color="primary" @click="login">Login</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>
<script>
	export default {
		data: function() {
			return {
				show: false,
				remember: false,
				email: '',
				password: '',

			}
		},
		methods: {
			login : function() {
	    		this.$auth.login({
		            params: {
		              email: this.email,
		              password: this.password
		            }, 
		            success: (response) => {
		            	this.$store.commit('saveToken', response.data.access_token)
		            },
		            error: (error) => {
		            },
		            rememberMe: this.remember,
		            redirect: '/dashboard',
		            fetchUser: true,
		        })
    		}
    	},
	    computed : {
	    	passwordIcon : function() {
	    		return this.show === false ? 'visibility' : 'visibility_off';
	    	},
	    	passwordType : function() {
	    		return this.show === false ? 'password' : 'text'
	    	},
			willRemember: function() {
				return this.remember == true ? 'Yes' : 'No'
			}
		}
	}
</script>