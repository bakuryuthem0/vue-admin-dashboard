<template>
    <v-card :icon="icon" :class="fullTheme">
        <v-layout :column="orientationType.column" :row="orientationType.row">
            <v-flex xs3 :class="['centered', this.textTheme, this.theme]">
                <v-icon :small="sizeVal.small" :medium="sizeVal.medium" :large="sizeVal.large" :class="[this.textTheme]">{{ icon }}</v-icon>
            </v-flex>
            <v-flex xs9>
                <v-card-title primary-title>
                    <div class="headline"><slot name="headline"></slot></div>
                </v-card-title>
                <v-card-actions class="pa-3">
                    <slot name="action"></slot>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
</template>
<script>
export default {
    name: 'icon-card',
    props: {
        size: {
            type: String,
            default: 'small'
        },
        theme: {
            type: String,
            default: 'default'
        },
        icon: {
            type: String,
            required: true
        },
        full: {
            type: Boolean,
            default: false
        },
        textTheme: {
            type: String,
            default: 'black'
        },
        orientation: {
            type: String,
            default: 'horizontal'
        }
    },
    computed: {
        fullTheme : function() {
            return this.full == true ? [this.theme, this.textTheme] : []
        },
        sizeVal: function() { 
            return {
                small: this.size == 'small',
                medium: this.size == 'medium',
                large: this.size == 'large'
            }
        },
        orientationType: function() {
            return {
                row: this.orientation == 'horizontal',
                column: this.orientation == 'vertical'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .centered {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
</style>
