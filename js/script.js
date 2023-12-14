const { createApp } = Vue;

createApp({
    data() {
        return{
            discsArr: [],
            apiURL: "server.php",
            modalVis: false,
            activeDisc: 0,
        };
    },
    methods: {
        showModal(clickedDisc){
            this.modalVis = true;
            this.activeDisc = clickedDisc
        },
        dismissModal(){
            this.modalVis = false;
        }
    },
    created() {
        axios
        .get(this.apiURL)
        .then((resp) => {
            console.log(resp.data);
            const discs = resp.data
            this.discsArr = discs
            console.log("discsArr", this.discsArr);
        })
    },
}).mount("#app");