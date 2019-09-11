//渲染表格
var str = '';
change()
function change(){
	$.ajax({
		url:'http://127.0.0.1:8000/user',
		type:'get',
		data:{
		},
		success:function(res){
			console.log(res)
			//for遍历
			for(let i=0;i<res.data.length;i++){
				var id = res.data[i].userid;
				var username = res.data[i].username;
				var password = res.data[i].password;
				console.log(id,username,password)
				str = '<tr>\
					<td>' + id + '</td>\
					<td>' + username + '</td>\
					<td>' + password + '</td>\
				</tr>'
				$('table').eq(0).append(str);
			}
			//forEach遍历
			/*var arr = res.data;
			res.data.forEach(function(item,index,arr){
				var id = arr[index].userid;
				var username = arr[index].username;
				var password = arr[index].password;
				console.log(id,username,password)
				var str = '<tr>\
					<td>' + id + '</td>\
					<td>' + username + '</td>\
					<td>' + password + '</td>\
				</tr>'
				$('table').eq(0).append(str);
			})*/
		},
		error:function(err){
			console.log(err )
		}
	})
}
	

//增      
$('#add').click(function(){
	$.ajax({
		url:'http://127.0.0.1:8000/add',
		type:'get',
		data:{
			'username':$('#add-txt').val(),
			'password':$('#add-pwd').val()
		},
		success:function(res){
			console.log(res)
			location.replace(document.referrer);
		},
		error:function(err){
			console.log(err)
		}
	})
})
//删      
$('#del').click(function(){
	$.ajax({
		url:'http://127.0.0.1:8000/del',
		type:'get',
		data:{
			'username':$('#del-txt').val(),
			'password':$('#del-pwd').val()
		},
		success:function(res){
			console.log(res)
			location.replace(document.referrer);
		},
		error:function(err){
			console.log(err )
		}
	})
})
//查询   
$('#search').click(function(){
	/*$.ajax({
		url:'http://127.0.0.1:8000/user',
		type:'get',
		data:{
		},
		success:function(res){
			console.log(res)
			str = '';
			change();
		},
		error:function(err){
			console.log(err )
		}
	})*/
})
//改      
$('#revise').click(function(){
	$.ajax({
		url:'http://127.0.0.1:8000/revise',
		type:'get',
		data:{
			'userid':$('#rev-id').val(),
			'username':$('#rev-txt').val()
		},
		success:function(res){
			console.log(res.data)
			location.replace(document.referrer);
		},
		error:function(err){
			console.log(err )
		}
	})
})