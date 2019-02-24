export default {
    data: function() {
        return {
            javascript: {
                methods: [
                    'require',
                    'includes',
                    'forEach',
                    'split',
                    'trim'
                ],
                structures: [
                    'import',
                    'from',
                    'if',
                    'else',
                    'for',
                    'switch',
                    'case',
                    'break',
                    'return',
                    'while',
                    'do'       
                ]
            },
            css: {
                selectors: [
                    '.',
                    '#'
                ],
                pseudoSelectors: [
                    '[',
                    ':',
                    ']'
                ],
                tags: [
                    'a',
                    'abbr',
                    'acronym',
                    'address',
                    'applet',
                    'area',
                    'article',
                    'aside',
                    'audio',
                    'b',
                    'base',
                    'basefont',
                    'bdi',
                    'bdo',
                    'big',
                    'blockquote',
                    'body',
                    'br',
                    'button',
                    'canvas',
                    'caption',
                    'center',
                    'cite',
                    'code',
                    'col',
                    'colgroup',
                    'data',
                    'datalist',
                    'dd',
                    'del',
                    'details',
                    'dfn',
                    'dialog',
                    'dir',
                    'div',
                    'dl',
                    'dt',
                    'em',
                    'embed',
                    'fieldset',
                    'figcaption',
                    'figure',
                    'font',
                    'footer',
                    'form',
                    'frame',
                    'frameset',
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'head',
                    'header',
                    'hr',
                    'html',
                    'i',
                    'iframe',
                    'img',
                    'input',
                    'ins',
                    'kbd',
                    'label',
                    'legend',
                    'li',
                    'link',
                    'main',
                    'map',
                    'mark',
                    'meta',
                    'meter',
                    'nav',
                    'noframes',
                    'noscript',
                    'object',
                    'ol',
                    'optgroup',
                    'option',
                    'output',
                    'p',
                    'param',
                    'picture',
                    'pre',
                    'progress',
                    'q',
                    'rp',
                    'rt',
                    'ruby',
                    's',
                    'samp',
                    'script',
                    'section',
                    'select',
                    'small',
                    'source',
                    'span',
                    'strike',
                    'strong',
                    'style',
                    'sub',
                    'summary',
                    'sup',
                    'svg',
                    'table',
                    'tbody',
                    'td',
                    'template',
                    'textarea',
                    'tfoot',
                    'th',
                    'thead',
                    'time',
                    'title',
                    'tr',
                    'track',
                    'tt',
                    'u',
                    'ul',
                    'var',
                    'video',
                    'wbr'
                ]
            }
        }
    },
    methods: {
        capitalize(value) {
            return value.charAt(0).toUpperCase() + value.substr(1);
        },
        contains(value, array) {
            let positions = [];
            array.forEach(el => {
                if(value.indexOf(el) !== -1) {
                    positions.push(value.indexOf(el))
                }
            })
            return positions.length > 0
        },
        getCssObj(value, columns) {
            let obj = {}
            if((value.includes('.') || (value.includes('#') && !value.match(/[0-9A-Fa-f]{6}/g) && !value.match(/[0-9A-Fa-f]{3}/g)) || value.includes('[') || value.includes(']') || this.css.tags.includes(value)) && (!value.includes('/') || !value.includes('.scss')))
            {
                obj.type    = 'selector';
                obj.keyword = value;
                obj.value = []
            } else if(value.includes('@')){
                if(value.includes('import')) {
                    obj.type    = "string-keyword"
                    obj.keyword = value
                    obj.value   = ''
                } else {
                    obj.type    = "bracket-keyword"
                    obj.keyword = value
                    obj.value   = []
                }
            } else {
                var object;
                if(columns[columns.length - 1].type == 'string-keyword') {
                    columns[columns.length - 1].value = value;
                } else if(columns[columns.length - 1].type == 'selector') {
                    if(value.includes(':')) {
                        let obj = {};
                        obj.value   = ''
                        obj.type    = 'rule'
                        obj.keyword = value;
                        columns[columns.length - 1].value.push(obj);
                    } else {
                        columns[columns.length - 1].value[columns[columns.length - 1].value.length - 1].value = value
                    }
                } else {
                    columns[columns.length - 1].value.value = value
                }
            }
            return obj;
        },
        getJsObj(value, columns) {
            let obj = {}
            if(this.javascript.structures.includes(value)) {
                obj.type    = 'structure'
                obj.content = value
            } else if (this.javascript.methods.includes(value)) {
                obj.type    = 'method'
                obj.content = value
            } else {
                obj.type    = 'text'
                obj.content = value
            }
            return obj
        }
    },
    computed: {
        columns() {
            return this.$slots.default[0].text.split(/\n/gm).map(el => el.trim().split(/\s+(?=[^\]\]}]*([\[\[{]|$))/).filter(el => el != "{" && el != "")).filter(el => el != "" && el != "}")
        },
        rows() {
            const rows    = [];
            const columns = [];
            this.columns.forEach(row => {
                let obj = {};
                row.forEach(column => {
                    switch(this.type) {
                        case 'css':
                            obj = this.getCssObj(column, columns);
                            break;
                        case 'javascript':
                            obj = this.getJsObj(column, columns);
                            break;
                        default:
                            break;
                    }
                    if(Object.keys(obj).length > 0) {
                        columns.push(obj);
                    }
                });
                rows.push(columns);
            })
            return rows[0] ? rows[0] : rows
        }
    }
}