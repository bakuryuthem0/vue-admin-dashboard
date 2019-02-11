<template>
	<v-navigation-drawer v-model="drawer" absolute temporary></v-navigation-drawer>
    <v-toolbar color="primary" dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout row wrap>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
</template>
<script>
	export default {
		data: function() {
		    return {
		      	drawer: false
		    }
	  	}
	}
</script>