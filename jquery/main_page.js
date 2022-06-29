// $(document).ready(function() {
// okayval= function(){
//   var inpval = $('#TextInput').val();
//   if(val !== ""){
  
//     $('#sec_table tbody').append('<tr><td>' + inpval + 
//     '</td><td><button type="button" id="done" class="Done" name="DONE" >DONE</button>' +
//     '<button type="button" id="undone" class="UnDone" name="UNDONE" >UNDONE</button>' + 
//     '<button type="button" id="del" class="Delete" name="DELETE" >DELETE</button></td>' +
//     '<td id="status"></td></tr>');
//   }
// }
// });




//   $(document).on('click','.Done',function(){
//     $(this).parent().siblings("#status").html("&#9989;");
//   });

//   $(document).on('click','.UnDone',function(){
//     $(document).on('click','.Delete',function(){
//       let rcount=$("#tbody tr").length;
//       debugger
//       if (rcount>3 && $(this).parent().siblings("#status").html() ==="&#x274C;");{

//       $(this).parent().parent().remove();}
//     });

//     $(this).parent().siblings("#status").html("&#x274C;");

//   });

  



$('#ok').click(function(){
    let val=$('#TextInput').val();

    $('#TextInput').val("")
    if(val !== ""){
        $('#sec_table').append(
          `<tr>
                <td>${val}</td>
                <td>
                    <input type="button" value="done" class="Done">
                    <input type="button" value="undone" class="UnDone">
                    <input type="button" value="delete" class="Delete">
                </td>
                <td id ="status">  </td>
                </tr>`
          )
    }

    $('.Done').click(function(){
        $(this).parent().siblings("#status").html("&#9989;");
    });

    
    
    $('.UnDone').click(function(){
        
      $(this).parent().siblings("#status").html("&#x274C;");
        
    });
    
    $('.Delete').click(function(){

        let tablength = $('#sec_table tr').length;
        if(tablength > 2 && $(this).parent().siblings('#status').html() === '❌'){
            $(this).parent().parent().remove();
    }
    })


});