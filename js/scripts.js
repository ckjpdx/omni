// []  , [1,2,3]
// perm, input
// [1],[2,3]  [1,2],[3]
//            [1,3],[2]
// [2],[1,3]  [2,1],[3]
//            [2,3],[1]
// [3],[2,3]  [3,2],[1]
//            [3,1],[2]

function permCount(permInput){
  var hasRepeats = /(.)\1+/;
  var inputArr = permInput.split("");
  var permArr = [];
  var noRepeatPermCount = 0;
  function recurse(inputArr, permArr){
    if (inputArr.length === 0){
      var permStr = permArr.join("");
      if (!(hasRepeats.test(permStr))) {
        noRepeatPermCount++;
      }
    } else {
      inputArr.forEach(function(element, index){
        var branchInputArr = inputArr.slice();
        var branchPermArr = permArr.slice();
        branchPermArr.push(branchInputArr[index]);
        branchInputArr.splice(index, 1);
        recurse(branchInputArr, branchPermArr);
      });
    }
  }
  recurse(inputArr, permArr);
  return noRepeatPermCount;
}
////////////////////////////////////////////////////////
$(function(){
  $("#permutate-form").submit(function(event) {
    event.preventDefault();
    var permInput = $('#permutate-input').val();
    $('#display-perm').text(permCount(permInput));
  });
});
