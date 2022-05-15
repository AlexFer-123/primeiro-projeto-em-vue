<template>
  <div id="app">

    <HeaderWebsite />
    <router-view path="router.key" />
    <FooterWebsite />

  </div>
</template>

<script>
import './styles/global.css';
import HeaderWebsite from   './components/Header';
import FooterWebsite from './components/Footer';

export default {
  name: 'App',
  components: {
    HeaderWebsite,
    FooterWebsite,
  }
}
</script>

<style>
 
</style>
