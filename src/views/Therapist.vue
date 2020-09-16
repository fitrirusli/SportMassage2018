<template>
    <div>
        <div>
            <h2>Therapists List</h2>
            <router-link to="/dashboard">Back</router-link>
            <ul>
                <li v-for="therapist in therapists" :key="therapist['index']">
                    <router-link to="/facilitator">{{therapist.name}}</router-link>
                    <p>Specialization: 
                        <span v-for="speciality in therapist.speciality" :key="speciality['index']">
                            {{speciality}},
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            therapists:[
                {
                    name: "John Doe",
                    speciality:[
                        "Type A",
                        "Type B"
                    ]
                },
                {
                    name: "Jane Doe",
                    speciality:[
                        "Type B",
                        "Type C"
                    ]
                },
                {
                    name: "Fitri Rusli",
                    speciality:[
                        "Type C",
                        "Type D"
                    ]
                },
            ]
        }
    }
}
</script>

