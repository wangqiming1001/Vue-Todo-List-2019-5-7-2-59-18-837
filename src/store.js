export default{
    strict:true,
    state: {
      // 应用的数据
      test: 'hello vuex',
      todoList: [
        {content:'吃饭',status:'all'},
        {content:'睡觉',status:'active'},
        {content:'起床',status:'completed'}
    ],
      counterTotal:0
    },
    getters:{
        counterSum: function (state) {
            let sum = 0;
            state.counters.forEach(element => {
                sum = sum + element.value;
            });
            return sum;
        }
    },
    mutations:{
        minusValue(state,index){
            state.counters[index].value--;
            state.counterTotal--;
        },
        plusValue(state,index){
            state.counters[index].value++;
            state.counterTotal++;
        }
    }
  }