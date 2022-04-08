<template>
  <v-app>
    <main>
    <v-app-bar 
    fixed
    color="primary" 
    dark 
    clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>News App</v-toolbar-title>
    </v-app-bar>
    <v-row>
      <v-col cols="3">
        <v-navigation-drawer 
            v-model="drawer"
            clipped-left
            fixed
            dark
            color="blue darken-1"
            style="z-index: 1" 
            class="my-15"
            >
              <v-list nav style="margin-top: 24px;">
                <v-list-item v-for="item in items" :key="item.title" link>
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
          </v-navigation-drawer>
      </v-col>
        <v-col cols="8" style="margin-top: 24px; padding-top: 24px">
          <!-- Content Here -->
          
          <v-card  v-for="(article, index) in newsList" :key="index" class="my-3" hover>
              <v-img
                height="350px"
                v-bind:src="article.urlToImage"
              ></v-img>
                <v-container fill-height fluid>
                  <v-layout>
                    <v-flex xs12 align-end d-flex>
                      <span class="headline">{{article.title}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              <v-card-text class="text-justify">
                {{ article.description }}
              </v-card-text>
              <v-card-actions>
                <v-chip small color="secondary" class="white--text">
                 {{article.author}}
                </v-chip>
                <v-spacer></v-spacer>
                <v-btn icon class="red--text">
                  <v-icon small>mdi-reddit</v-icon>
                </v-btn>
                <v-btn icon class="light-blue--text">
                  <v-icon small>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--darken-4">
                  <v-icon small>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon class="red--text">
                  <v-icon small>mdi-google-plus</v-icon>
                </v-btn>
                <v-btn icon class="blue--text text--darken-4">
                  <v-icon small>mdi-linkedin</v-icon>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn small replace color="info" v-bind:href="article.url" target="_blank" >Read More</v-btn>
              </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="1"></v-col>
    </v-row>
    </main>
  </v-app>
  
</template>

<script>
export default {
  name: "pageNews",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Reddit", icon: "mdi-reddit" },
        { title: "Google", icon: "mdi-google" },
        { title: "Linkedin", icon: "mdi-linkedin" },
        { title: "Twitter", icon: "mdi-twitter" },
        { title: "Recode", icon: "mdi-google-cardboard" },
        { title: "Google", icon: "mdi-google" },
        { title: "Google Assistant", icon: "mdi-google-assistant" },
        { title: "Apple Cloud", icon: "mdi-apple-icloud" },
        { title: "Apple", icon: "mdi-apple" },
      ],
      mini: true,
    };
  },
  computed: {
    newsList(){
      return this.$store.state.listBeranda.list;
    },
  },
 methods : {
    fetchNewsList(){
      this.$store.dispatch("listBeranda/fetchList");
    },
    redirect(index){
      this.$router.push('/news/'+index)
    }
  },
  mounted(){
    this.fetchNewsList();
  },
};
</script>
