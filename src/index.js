module.exports = function multiply(first, second) {
    function recording_mult(stack_first, stack_second)
  {
    var stack_result = [];
    var temp, result_mult, count = 0;
    temp = stack_second.pop();
    while(stack_first.length != 0)
    {
      result_mult = temp*stack_first.pop() + count;
      if(result_mult < 10)
      {
        stack_result.unshift(result_mult);
        count = 0;
      }
      else{
        count = Math.floor(result_mult/10);
        stack_result.unshift(result_mult - 10*count);
        if(stack_first.length == 0)
        {
          stack_result.unshift(count);
          break;
        }
      }
    }
    return stack_result;
  }
  function recording_sum(stack1,stack2,amount)//передавать еще 1 переменную -определяет количество младших разрядов
  {
    var result = [];
    var sum = 0, count = 0;
    for(var i = 0; i < amount; i++)
      result.unshift(stack1.pop());
    while(stack1.length != 0)
    {
      sum = stack1.pop()+stack2.pop() + count;
      if(sum < 10){
        count = 0;
        result.unshift(sum);
      }
      else{
        count = Math.floor(sum/10);
        result.unshift(sum - 10*count);
        if(stack2.length == 0)
        {
          result.unshift(count);
          break;
        }
      }
    }
    var temp;
    while(stack2.length != 0)
    {
         result.unshift(stack2.pop() + count);
         count = 0;
    }
     
      return result;
  }
  var temp;
  var stack_first = [];
  var stack_second = [];
  var stack_1slog = [];
  var stack_2slog = [];
  var amount = 0;
  if(first.length < second.length)
  {
    temp = first;
    first = second;
    second = temp;
  }
  stack_first = first.split("");
  stack_second = second.split("");
  stack_1slog = recording_mult(stack_first, stack_second);
 while(stack_second.length != 0)
 {
    amount++;
    stack_first = first.split("");
    stack_2slog = recording_mult (stack_first, stack_second);
    stack_1slog = recording_sum(stack_1slog, stack_2slog, amount);
 }
 temp = "";
 while(stack_1slog.length != 0)
    temp += stack_1slog.shift(); 


return temp;
}

