// []  , [1,2,3]
// perm, input
// [1],[2,3]  [1,2],[3]
//            [1,3],[2]
// [2],[1,3]  [2,1],[3]
//            [2,3],[1]
// [3],[2,3]  [3,2],[1]
//            [3,1],[2]

function permutator(permInput){
  var inputArr = permInput.split("");
  var currPerm = [];
  var permList = [];
  function recurse(inputArr, currPerm){
    if (inputArr.length === 0){
      $('#display-perm').append('<h1>' + currPerm.join("") + '</h1>');
    } else {
      inputArr.forEach(function(element, index){
        var branchInputArr = inputArr.slice();
        var branchCurrPerm = currPerm.slice();
        branchCurrPerm.push(branchInputArr[index]);
        branchInputArr.splice(index, 1);
        recurse(branchInputArr, branchCurrPerm);
      });
    }
    return permList;
  }
  return recurse(inputArr, currPerm);
}
////////////////////////////////////////////////////////
$(function(){
  $("#permutate-form").submit(function(event) {
    event.preventDefault();
    var permInput = $('#permutate-input').val();
    permutator(permInput);
  });
});
