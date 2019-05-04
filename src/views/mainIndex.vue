<template>
    <div>
        <mainHead></mainHead>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import mainHead from "../components/mainHead"
export default {
    name:"mainIndex",
    components:{
        mainHead
    }
}
</script>
<style scoped>

</style>

