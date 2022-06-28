$(document).ready(function() {
okayval= function(){
  var inpval = $('#TextInput').val();
  
    $('#sec_table tbody').append('<tr><td>' + inpval + 
    '</td><td><button type="button" id="done" class="Done" name="DONE" >DONE</button>' +
    '<button type="button" id="undone" class="UnDone" name="UNDONE" >UNDONE</button>' + 
    '<button type="button" id="del" class="Delete" name="DELETE" >DELETE</button></td>' +
    '<td id="status"></td></tr>');
  }

});




  $(document).on('click','.Done',function(){
    $(this).parent().siblings("#status").html("&#9989;");
  });

  $(document).on('click','.UnDone',function(){
    $(document).on('click','.Delete',function(){
      var rcount=$("#sec_table tr").length;
      if (rcount>2){
        debugger
      $(this).parent().parent().remove();}
    });

    $(this).parent().siblings("#status").html("&#x274C;");

  });

  