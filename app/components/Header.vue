<template>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/example">Example</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

nav li a {
  text-decoration: none;
  color: #2b4765
}
</style>