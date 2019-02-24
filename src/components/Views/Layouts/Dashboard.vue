<template>
  <div>
  	<v-navigation-drawer v-model="drawer" :fixed="true" temporary>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ $auth.user().email }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <v-list-tile slot="activator" :to="{ name : item.url}">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.title }}
                </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          
          <v-list-tile 
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="{ name : subItem.url}"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
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
            action: 'dashboard',
            title: 'Dashboard',
            url: 'dashboard',
            active: true,
            items: []
          },
          {
            action: 'memory',
            title: 'Ui Components',
            active: false,
            items: [
              { 
                title: 'Charts',
                url: 'charts'
              }
            ]
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