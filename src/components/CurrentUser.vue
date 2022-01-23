<template>
    <div class="container">
        <v-container>
            <v-row>
                <v-col
                sm="4"
                lg="4"
                xs="12"
                md="12"
                >
                <v-text-field
                    v-model="currentUser.name"
                    label="Имя"
                ></v-text-field>
                </v-col>

                <v-col
                sm="4"
                lg="4"
                xs="12"
                md="12"
                >
                <v-text-field
                    v-model="currentUser.email"
                    label="Email"
                ></v-text-field>
                </v-col>

                <v-col
                sm="12"
                xs="12"
                md="12"
                lg="4"
                >
                <v-text-field
                    v-model="currentUser.phone"
                    label="Телефон"
                ></v-text-field>
                </v-col>
                <v-col
                sm="12"
                xs="12"
                md="12"
                lg="4"
                >
                <v-text-field
                    v-model="currentUser.website"
                    label="Веб-сайт"
                ></v-text-field>
                </v-col>
                <v-col
                sm="12"
                xs="12"
                md="12"
                lg="4"
                >
                <v-text-field
                    v-model="currentUser.username"
                    label="Никнейм"
                ></v-text-field>
                </v-col>
                <v-col
                sm="12"
                xs="12"
                md="12"
                lg="4"
                >
                <v-text-field
                    v-model="currentUser.company.name"
                    label="Название компании"
                ></v-text-field>
                </v-col>
                <v-col
                xs="12"
                sm="12"
                md="12"
                lg="4"
                >
                <v-text-field
                    v-model="currentUser.address.city"
                    label="Город"
                ></v-text-field>
                </v-col>
                <v-col
                xs="12"
                sm="12"
                md="12"
                lg="4"
                >
                <v-text-field
                    v-model="currentUser.address.street"
                    label="Улица"
                ></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="save" color="green">Сохранить</v-btn>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentUser:[],
           
        }
    },
    methods:{
        save(){
            this.currentUser=this.currentUser
        }
    },
    created(){ 
        this.currentUser = this.$route.params.data
        console.log(this.currentUser)
    }
}
</script>
<style scoped>

</style>