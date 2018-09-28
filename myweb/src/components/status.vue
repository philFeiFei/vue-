<template>
    <div>
        <h2>目前状态：{{$route.params.uid}}</h2>
        <p>{{statusDesc}}</p>
        
    </div>
</template>
<script>
    export default{
        name:'status',
        data(){
            return {
                statusDesc:'aaa',
            }
        },
        mounted:function(){
            
            //后期这里直接改成ajax请求的了呗。。。是吧。。。


            switch(this.$route.params.uid){



                case '1':
                    this.statusDesc ="我是科比，你们都懂的，我打球是牛逼的，无法超越的你懂的吧。不说了。我有三个女儿";
                    return;
                
                case '2':
                    this.statusDesc ="我是詹姆斯，你们都懂的，我有儿子，我搬到了洛杉矶，我要投资商业了。你懂得！";
                    return;
                
                case '3':
                    this.statusDesc ="我是Jordan，你们都懂的，我的各种产品，每年获得的利润无数。";
                    return;
                
                case '4':
                    this.statusDesc ="是我欧文，你们的德鲁大叔，你们懂得，运球我是最牛逼的。";
                    return;
                default:
                     this.statusDesc ="我是phil";
            }
        }
    }

</script>








