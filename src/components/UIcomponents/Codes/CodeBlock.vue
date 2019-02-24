<template>
    <div class="code-block">
        <div v-html="content">

        </div>
    </div>
</template>
<script>
import ReservedWords from '../../../mixins/Data/ReservedWords'
export default {
    name: 'code-block',
    mixins: [ReservedWords],
    props: {
        type: {
            type: String,
            default: 'javascript'
        }
    },
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        getCounter: function() {
            this.counter++
            return this.counter;
        },
        getValue(value) {
            if(value.match(/[0-9A-Fa-f]{6}/g) || value.match(/[0-9A-Fa-f]{3}/g)) {
                return `<span class="color">${value}</span>`;
            } else if(value.includes('px')) {
                let number = value.replace('px;', '');
                return `<span class="number">${number}</span><span class="structure">px;</span>`
            } else {
                return `<span class="string">${value}</span>`
            }
        } 
    },
    computed: {
        content: function() {    
            const content = [];
            this.rows.forEach(row => {
                content.push(`<span class="line">${this.getCounter()}</span>`);
                    content.push(`<span class="${row.type}">${row.keyword}</span> `)
                    if(typeof row.value == 'string') {
                        content.push(`<span class="string">${row.value}</span>`)
                    } else {
                        content.push('{ <br>')
                        row.value.forEach(rule => {
                            content.push(`<span class="line">${this.getCounter()}</span>`);
                            content.push(`<span class="rule">${rule.keyword}</span> `)
                            content.push(`${this.getValue(rule.value)}<br>`)
                        })

                        content.push(`<span class="line">${this.getCounter()}</span>`);
                        content.push('}')
                    }
                content.push('<br>')
            });
            return content.join('');
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