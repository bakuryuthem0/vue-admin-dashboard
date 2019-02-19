<template>
  <div>
    
  	<v-navigation-drawer v-model="drawer" absolute temporary>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.url"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/dashboard">
          Dashboard
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout">
        Logout
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <router-view :key="$router.path">
          </router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </div>
  
</template>
<script>
  import swal from 'sweetalert'
  import {EventBus} from '../../../plugins/EventBus'
	export default {
    
		data: function() {
	    return {
	      drawer: false,
        items: [
          {
            icon: 'account_box',
            title: 'Clients',
            url: 'clients'
          }
        ]
		  }
	  },
    mounted: function(){
      EventBus.$on("notification", $event => {
        swal($event.title, $event.message, $event.type);
      });
    },
    methods: {
      async logout() {
        this.$http.post('/auth/logout').then(response => {
          if(response.data.type == 'success') {
            this.$router.replace('/');
          }
        }).catch(err => {

        });
      }
    }
	}
</script>