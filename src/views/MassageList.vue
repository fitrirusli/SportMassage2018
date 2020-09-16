<template>
    <div>
        <div>
            <h2>Massage List</h2>
            <p>*Display list of massages and their categories*</p>
            <router-link to="/dashboard">Back</router-link>
            <ul>
                <li v-for="massage in massages" :key="massage['index']">
                    <router-link to="/type">{{massage.name}}</router-link>
                    <p>{{massage.type}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            massages:[
                {
                    name: "Massage A",
                    type:"Type A"
                },
                {
                    name: "Massage B",
                    type:"Type B"
                },
                {
                    name: "Massage C",
                    type:"Type C"
                }
            ]
        }
    }
}
</script>

