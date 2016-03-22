// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {
var doughnutData = [
				{
					value: 1,
					label: "One"
				},
				{
					value: 2,
					label: "Two"
				},
				{
					value: 3,
					label: "Three"
				},
				{
					value: 4,
					label: "Four"
				},
				{
					value: 5,
					label: "Five"
				}
			];
			window.onload = function(){
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
			};

			// $(function(){
			// 	$(window).scroll(function(){
			// 		if ($(this).scrollTop()>=50){
			// 			$('nav.main-nav').addClass('stickytop');
			// 		}
			// 		else{
			// 			$('nav.main-nav').removeClass('stickytop');
			// 		}

			// 	});
			// });


			$(function(){
				$(window).scroll(function(){
					if ($(this).scrollTop()<=1520){
						$('div.bounce').addClass('arrow');
					}
					else{
						$('div.bounce').removeClass('arrow');
					}

				});
			});


});




