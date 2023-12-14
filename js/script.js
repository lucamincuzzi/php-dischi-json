const { createApp } = Vue;

createApp({
    data() {
        return{
            discsArr: [],
            apiURL: "server.php",
        };
    },
    methods: {

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