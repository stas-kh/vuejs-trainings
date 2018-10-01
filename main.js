new Vue({
    el: '.container',
    data: {
        listItems: [
            {name: 'Cras justo odio', isActive: true},
            {name: 'Dapibus ac facilisis in', isActive: false},
            {name: 'Morbi leo risus', isActive: false},
            {name: 'Porta ac consectetur ac', isActive: false},
            {name: 'Vestibulum at eros', isActive: false}
        ]
    },
    computed: {
        getListItems() {
            return this.listItems;
        }
    },
    methods: {
        setActive(item) {
            this.listItems.forEach((i) => i.isActive = false);
            item.isActive = !item.isActive;
        }
    }
});