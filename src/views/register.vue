<template>
   <div>
    <input v-model='mobile'/>
    <input v-model='password'/>
    <button @click='tryLogin_in()'>注册</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                mobile:'',
                password:''
            }
        },
        components:{
        },
      methods:{
        tryLogin_in(){
          const vm=this
          const user = {
            phone : vm.mobile,
            password : vm.password
		  }
		  console.log(user)
        }
      }
    }

</script>