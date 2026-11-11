<template>
    <header>
        <nav class="navigation">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/main">Main</router-link> |
            <router-link to="/signup">Signup</router-link>
        </nav>
    </header>
</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    /*padding-top: .5em;
    padding-bottom: .5em;*/

    border: 1px solid #646174;
    background-color: #a49fc1;
    /*background-color: #a9b89a;*/
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;

    position: sticky;
    top: 0;
}
</style>
