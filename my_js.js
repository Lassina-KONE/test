$(function(){
	$('#jstext').html('Hello world!!!').css('color','darkblue');
	$('p:first').fadeOut("slow",function(){
		$(this).fadeIn("slow");
	});

	$('.img1').on('click',function(event){
		$('#image').attr('src','images/lass.jpg');
	});
	
	$('.img2').on('click',function(event){
		$('#image').attr('src','images/kone.jpg');
	});

	/* color zone */
	$('.red').on('click',function(event){
		$('#zone').css('background-color','red');
	});
	
	$('.yellow').on('click',function(event){
		$('#zone').css('background-color','yellow');
	});
	
	$('.indigo').on('click',function(event){
		$('#zone').css('background-color','indigo');
	});
	
	$('.black').on('click',function(event){
		$('#zone').css('background-color','black');
	});
	$('.green').on('click',function(event){
		$('#zone').css('background-color','green');
	});
	
	$('.orange').on('click',function(event){
		$('#zone').css('background-color','orange');
	});
	
	

	$('form').css('border','1px solid red').css('width','500').css('padding','16px');
	$(':input').css('background-color','beige');
	$(':reset').css('box-shadow','2px 4px 8px blue');
	$(':text').css('background-color','orange');
	$(':image').css('width','50px');
	/*$('[name=nom]').focus();*/
	$(':reset').css('background-color','red');


	/*lire et afficher*/

	$('#btn-affiche').on('click',function(event){
		$('#msg').html($('#msg').html()+' '+$('#montext').val());
		$('#montext').val('');
	});

	/*$('p').text(function(index,contenu){
		alert((index+1)+' '+contenu);
	});*/

	var posparent = $('#parent').offset();
	var posenfant = $('#enfant').offset();
	posenfant.top = 10;
	posenfant.left = 900;
	$('#enfant').offset(posenfant);
	$('#resultat').text('parent x = '+posparent.left+' parent y = '+posparent.top+'\n'+'enfant x = '+posenfant.left+' enfant y = '+posenfant.top);

	// inserer les donnes
	var div = $('#mondiv')[0];
	$.data(div,'mes_donnes',{
		nom:'KONE',
		prenoms: 'Lassina',
		age:23
	});
//recuperer les donnees
	var nom = $.data(div,'mes_donnes').nom;
	var prenoms = $.data(div,'mes_donnes').prenoms;
	var age = $.data(div,'mes_donnes').age;

	//afficher les donnees

	$('#sp1').text(nom);
	$('#sp2').text(prenoms);
	$('#sp3').text(age);

	//ajout, retrait de contu

	$('h2').append('***KONE added this via JQuery***');
	$('h2').prepend('***KONE added this via JQuery***');

	$('h2').before('<br/>');
	$('h2').after('<hr width="200">');
	$('h2').each(function(){
		var h2 = $(this);
		h2.replaceWith('<h4>'+h2.text()+'</h4>');
	})
	$('#mondiv').insertBefore('p:first');
});