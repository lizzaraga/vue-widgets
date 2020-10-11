<template>
  <div id="app">
   <CirclePlaceholder bgColor="#19197415" :radius="100">
     <CircleLoader :radius="40" />
   </CirclePlaceholder>
  <Margin top="10px">
     <LinePlaceholder width="100px" bgColor="dodgerblue"/>
  </Margin>

  <Margin top = "20px">
    <Divider :thickness="2" bgColor="#ccc"/>
  </Margin>

  <Margin top="30px">
    <Stack height="100px">
     <AbsoluteBox height="50px" width="50px" bgColor="crimson"/>
     <AbsoluteBox left="50px" top="50px" height="50px" width="50px" bgColor="royalblue"/>
     <AbsoluteBox left="100px"  height="50px" width="50px" bgColor="black"/>
    </Stack>
  </Margin>
  </div>

  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.loader{
  

  &::after{
    border-top-color: brown !important;
  }
}
</style>
