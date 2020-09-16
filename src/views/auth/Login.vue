<template>
    <div>
        <div class="form">
            <p>*This is just a low-level prototype. No need to key in details.*</p>
            <p>Click login to proceed</p>
            <div class="form-group">
                <label for="">Username/IC:</label>
                <input type="text">
            </div>
            <div class="form-group">
                <label for="">Password:</label>
                <input type="password">
            </div>
            <router-link to="/dashboard" tag="button">Login</router-link>
        </div>
    </div>
</template>
