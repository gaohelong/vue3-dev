<template>
  <img alt="Vue logo" src="@/assets/images/logo.png">
  <Nav msg="nav" />
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <div v-for="(item, index) in repositories" :key="index">
    {{ item.name }}
  </div>
</template>

<style src="@/assets/css/main.css"></style>

<script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { fetchUserList } from '@/common/api/user';
  import HelloWorld from '@/components/HelloWorld.vue';
  import Nav from '@/components/Nav.vue';

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld,
      Nav
    },
    setup() {
      const repositories = ref([]);
      const getUserRepositories = async () => {
        let userList = await fetchUserList();
        repositories.value = userList.data.list;
      }

      onMounted(() => {
        getUserRepositories();
        console.log('组件挂载完成');
      });

      return {
        repositories
      }
    }
  });
</script>
