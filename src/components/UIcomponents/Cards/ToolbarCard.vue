<template>
    <v-card>
        <v-toolbar dark :color="theme">
            <v-toolbar-side-icon v-if="showIcon">
                <v-icon :class="[textColor]" :small="sizeVal.small" :medium="sizeVal.medium" :large="sizeVal.large">{{ icon }}</v-icon>
            </v-toolbar-side-icon>
            <v-toolbar-title :class="[textColor]">
                {{ title }}
                <br>
                <small v-if="subTitle != ''">{{ subTitle }}</small>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <slot name="toolbar"></slot>
        </v-toolbar>
        <slot name="content"></slot>
    </v-card>
</template>
<script>
export default {
    name: 'toolbar-card',
    props: {
        theme: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'small'
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        },
        textColor: {
            type: String,
            default: 'white--text'
        }
    },
    computed: {
        sizeVal: function() { 
            return {
                small: this.size == 'small',
                medium: this.size == 'medium',
                large: this.size == 'large'
            }
        }
    }
}
</script>
