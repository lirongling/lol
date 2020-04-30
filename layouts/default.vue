<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background-color: #0a0a0c;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
.flex {
  display: flex;
}
.j-star {
  justify-content: flex-start;
}
.j-end {
  justify-content: flex-end;
}
.j-center {
  justify-content: center;
}
.f-column {
  flex-direction: column;
}
.a-center {
  align-items: center;
}
.a-end {
  align-items: flex-end;
}
.f-wrap {
  flex-wrap: wrap;
}
.j-between {
  justify-content: space-between;
}
.j-around {
  justify-content: space-around;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ellipsiss {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.border {
  border: 1rpx rgb(226, 223, 223) solid;
}
.border-bottom {
  border-bottom: 1rpx rgb(226, 223, 223) solid;
}
</style>
