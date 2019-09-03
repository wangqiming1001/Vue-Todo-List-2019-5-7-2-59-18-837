<template>
    <div id="input">
        <input type="text" :value= "inputText" @change="handleChange">
        <button @click="addInputText">add</button>
    </div>
</template>
<script>
export default {
    name:"CreateForm",
    data:function(){
        return{
            inputText:""
        }  
    },
    methods:{
        handleChange:function(event){
            console.log(event.target.value);
            this.$emit('addHandleChange',event.target.value)
        },
         addInputText:function(){
                 this.$emit('addHandle',this.inputText)
            }
    }
}
</script>