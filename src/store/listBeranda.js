import axios from "axios";

const state = () => ({
    list : [],
});

const mutations = {
    setList(state, param){
        state.list = [...param];
    },
};

const actions = {
    fetchList(store){
        axios
        .get("https://newsapi.org/v2/everything",{
            params : {
                q : "tesla",
                from : "2022-03-07",
                shortBy : "publishedAt",
                apiKey : "0ba9250e1f904ab389d8776058311d2f",
            },
        })
        .then((response)=>{
            store.commit("setList", response.data.articles);
        })
        .catch((err)=> console.log(err));
    },
};
export default {
    state,
    mutations,
    actions,
}