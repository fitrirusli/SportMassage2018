<template>
    <div>
        <h2>Dashboard</h2>
        <router-link to="/login">Logout</router-link>
        <div class="nav">
            <router-link class="link" to="/type">Massage List</router-link>
            <router-link class="link" to="/facilitator">Massage Therapist</router-link>
        </div>
    </div>
</template>
<style>
    .nav{
        text-align: center;

    }
    div .link{
        padding-right: 10px;
        text-align: center;
    }
</style>

