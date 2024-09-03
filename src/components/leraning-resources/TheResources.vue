<template>
    <base-card>
     
      <base-button @click="changeTab('StoredResources')" :mode="storedResBtn">Stored Resources</base-button>
      <base-button @click="changeTab('AddResources')" :mode="addResBtn">Add Resources</base-button>
    </base-card>
  
    <keep-alive>
     <component :is="selectedTab" ></component>
    </keep-alive>
    

  </template>
  
  <script>
  import StoredResources from './StoredResources.vue';
  import AddResources from './AddResources.vue';
  
  export default {
    components: {
      StoredResources,
      AddResources
    },
    data() {
      return {
        selectedTab: 'StoredResources', 
        storedResources: [
          {
            id: 'official-guide',
            title: 'Official Guide',  
            description: 'The official documentation',
            link: 'https://vuejs.org/'
          },
          {
            id: 'google',
            title: 'Google',  
            description: 'Learn how to google!',
            link: 'https://google.com/'
          }
        ]
      };
    },
    methods: {
      
      changeTab(tab) {
        this.selectedTab = tab;
      },
      addResources(title, description, link){
        const newResources = {
            id: Date().toString(),
            title: title,
            description:description,
            link: link,
        }

        this.storedResources.unshift(newResources)
        this.selectedTab = 'StoredResources'
      },
      dealateRes(resId){
        const resIndex = this.storedResources.findIndex(res => res.id == resId)
        this.storedResources.splice(resIndex, 1)
      }
    },
    provide() {
      return {
        resources: this.storedResources,
        addResources: this.addResources,
        dealateRes: this.dealateRes
      };
    },
    computed: {
        storedResBtn(){
            return this.selectedTab === 'StoredResources' ? null : 'flat'
        },
        addResBtn(){
            return this.selectedTab === 'AddResources' ? null : 'flat'
        }
    }
  };
  </script>
  