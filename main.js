const vue = new Vue({
    el: '.container',
    data: {
        containerName: 'Hello VueJS'
    },
    methods: {
        changeContainerName: function({ target }) {
            this.containerName = target.value;
        }
    }
});

console.log(vue);