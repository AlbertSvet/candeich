"use strict";
new Swiper('.offer__slider',{
    navigation: {
        nextEl: '.offer__right',
        prevEl: '.offer__left',
    },
     slidesPerView:1,
     loop:true,
     spaceBetween:0,
     speed:1000,
     centeredSlide: true,    
     
   
    pagination: {
        el: '.offer__pagin',        
        type: 'bullets',
    }, 
    

    breakpoints: {
        320: {
            
            
        },
        480: {
           
            
        },
        768: {
            
        }
        

        
       

    },

});
new Swiper('.certificates__slider',{
    navigation: {
        nextEl: '.certificates__right',
        prevEl: '.certificates__left',
    },
	slidesPerView: 5,
     loop:true,
     spaceBetween:30,
     speed:400,
     centeredSlide: true, 
	 
     
   
    pagination: {    
		el: '.certificates__pagin',           
        type: 'bullets',
    }, 
    

    breakpoints: {
		0:{
			slidesPerView: 1
		},
        320: {
			slidesPerView: 3,
            spaceBetween:10,
        },
        480: {
			slidesPerView: 3,	
            spaceBetween:10,
        },
        768: {
			slidesPerView: 5,
			spaceBetween:10,
        },
		992: {
			slidesPerView: 6,
			spaceBetween:30,
		}        

        
       

    },

});
new Swiper('.conditioning__slider',{
    navigation: {
        nextEl: '.conditioning__right',
        prevEl: '.conditioning__left',
    },
   
	 slidesPerView: 3,
     loop:true,
     spaceBetween:30,
     speed:400,
     
	 
     
   
    pagination: {    
		el: '.conditioning__pagin',           
        type: 'bullets',
    }, 
   
    

    breakpoints: {
		0:{
			slidesPerView: 1
		},
        320: {
			slidesPerView: 1,
            spaceBetween:10,
        },
        480: {
			slidesPerView: 1,	
            spaceBetween:10,
        },
        768: {
			slidesPerView: 2,
			spaceBetween:10,
        },
		992: {
			slidesPerView: 3,
			spaceBetween:30,
		}        

        
       

    },

});
new Swiper('.ventilation__slider',{
    navigation: {
        nextEl: '.ventilation__right',
        prevEl: '.ventilation__left',
    },
	 slidesPerView: 3,
     loop:true,
     spaceBetween:30,
     speed:400,
     
	 
     
   
    pagination: {    
		el: '.ventilation__pagin',           
        type: 'bullets',
    }, 
   
    

    breakpoints: {
		0:{
			slidesPerView: 1
		},
        320: {
			slidesPerView: 1,
            spaceBetween:10,
        },
        480: {
			slidesPerView: 1,	
            spaceBetween:10,
        },
        768: {
			slidesPerView: 2,
			spaceBetween:10,
        },
		992: {
			slidesPerView: 3,
			spaceBetween:30,
		}        

        
       

    },

});
new Swiper('.reviews__slider',{
    navigation: {
        nextEl: '.reviews__right',
        prevEl: '.reviews__left',
    },
	 slidesPerView: 3,
     loop:true,
     spaceBetween:30,
     speed:1000,
     centeredSlides: true,
	 
     
   
    pagination: {    
		el: '.reviews__pagin',           
        type: 'bullets',
    }, 
   
    

    breakpoints: {
		0:{
			slidesPerView: 1
		},
        320: {
			slidesPerView: 1,
            spaceBetween:10,
        },
        480: {
			slidesPerView: 1,	
            spaceBetween:10,
        },
        768: {
			slidesPerView: 3,
			spaceBetween:10,
        },
		992: {
			slidesPerView: 3,
			spaceBetween:30,
		}        

        
       

    },

});
new Swiper('.our-job__slider',{
    navigation: {
        nextEl: '.our-job__right ',
        prevEl: '.our-job__left',
    },
	 slidesPerView: 3,
     loop:true,
     spaceBetween:30,
     speed:1000,
     centeredSlides: true,
	 
     
   
    pagination: {    
		el: '.our-jop__pagin',           
        type: 'bullets',
    }, 
   
    

    breakpoints: {
		0:{
			slidesPerView: 1
		},
        320: {
			slidesPerView: 1,
            spaceBetween:10,
        },
        480: {
			slidesPerView: 1,	
            spaceBetween:10,
        },
        768: {
			slidesPerView: 3,
			spaceBetween:10,
        },
		992: {
			slidesPerView: 3,
			spaceBetween:30,
		}        

        
       

    },

});


// =============================================================================================================//
// Бургер-меню
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__menu');
const bod = document.querySelector('body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');   
        menuBody.classList.toggle('_active');
		bod.classList.toggle('lock');
    })
} 

// =============================================================================================================//

let header = document.querySelector('.header__container'),
	headerH = document.querySelector('.header__container').clientHeight;
	
	
	function openScroll (){
		let scroll = window.scrollY;
		if (document.documentElement.clientWidth <= 767) {
			if(scroll > headerH + 100) {
				header.classList.add('fixed');
				document.body.style.paddingTop = headerH + 'px';
				
			} else{
				header.classList.remove('fixed');
				document.body.removeAttribute('style');
				
			}
		}else{
			header.classList.remove('fixed');
			
		}
	};
	window.addEventListener('scroll', openScroll);		
	
	



	//=======================

	
	// const  textAccardion = document.querySelectorAll('.accardion__text'),
	// 	  accardionItem = document.querySelectorAll('.accardion__block'),
	// 	  paretAccardion = document.querySelectorAll('.accardion__subtitle');
	
	// function hideContent (){
	// 	textAccardion.forEach(item =>{
	// 		item.classList.remove('show');			
	// 		item.classList.add('hiden');		
						
			
	// 	});
	// 	paretAccardion.forEach(item =>{
	// 		item.classList.remove('active');
	// 	});
	// };
	// function showContent (i = 0){
	// 	textAccardion[i].classList.remove('hiden');			
	// 	textAccardion[i].classList.add('show');			
	// 	paretAccardion[i].classList.add('active');

	// };
	
	
	// hideContent ();
	// showContent ();
	// accardionItem.forEach((item, i)=>{
	// 	item.addEventListener('click',() =>{
	// 		hideContent ();
	// 		showContent (i);
	// 	})
		          
	// });		
					
				
//==================================
// спойлер аккардион
$(document).ready(function(){
	$('.accardion__subtitle').click(function(event){
		if($('.accardion__flex').hasClass('one')){
			$('.accardion__subtitle').not($(this)).removeClass('active');
			$('.accardion__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});			          
			
//===============================
// кнопка скролла вверх
const goBtn = document.querySelector('.go-top');
goBtn.addEventListener('click', goTop);
window.addEventListener('scroll', goScroll);


function goScroll (){
	const offset = window.pageYOffset;
	const coor = document.documentElement.clientHeight;
	
	if (offset>coor){
		goBtn.classList.add('goshow');
	}else{
		goBtn.classList.remove('goshow');
	}
};

function goTop (){
	if(window.pageYOffset > 0 ){
		window.scrollBy( 0 , -105);
		setTimeout(goTop, 0);
	}
};
		
			 
		

const trigerModal = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		closeModal = document.querySelector('[data-close]');

function openModal (){
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';
}
function close () {
	modal.classList.remove('show');
	modal.classList.add('hide');
	document.body.style.overflow = '';
	
}
trigerModal.forEach(btn => {
	btn.addEventListener('click', openModal)
});
closeModal.addEventListener('click', close);
modal.addEventListener ('click', (e) =>{
	if(e.target === modal) {
		close();
	}
});
	
// =============================================================================================================//
// Анимация при скролле
// window.addEventListener('load', ()=>{


//     const animItems = document.querySelectorAll('._anim-items');

//     if (animItems.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;

//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     if (!animItem.classList.contains('_anim-no-hide')) {
//                         animItem.classList.remove('_active');
//                     }
//                 }
//             }
//         }
//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {
//                 top: rect.top + scrollTop, left: rect.left + scrollLeft
//             }
//         }
//     }

//     if (animItems.length > 0) {
//         setTimeout(() => {
//                 animOnScroll();
//             }, 500);
//     }
// })

// =============================================================================================================//


// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle



function DynamicAdapt(type) {
	this.type = type;
}

DynamicAdapt.prototype.init = function () {
	const _this = this;
	// массив объектов
	this.оbjects = [];
	this.daClassname = "_dynamic_adapt_";
	// массив DOM-элементов
	this.nodes = document.querySelectorAll("[data-da]");

	// наполнение оbjects объктами
	for (let i = 0; i < this.nodes.length; i++) {
		const node = this.nodes[i];
		const data = node.dataset.da.trim();
		const dataArray = data.split(",");
		const оbject = {};
		оbject.element = node;
		оbject.parent = node.parentNode;
		оbject.destination = document.querySelector(dataArray[0].trim());
		оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
		оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
		оbject.index = this.indexInParent(оbject.parent, оbject.element);
		this.оbjects.push(оbject);
	}

	this.arraySort(this.оbjects);

	// массив уникальных медиа-запросов
	this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
		return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
	}, this);
	this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
		return Array.prototype.indexOf.call(self, item) === index;
	});

	// навешивание слушателя на медиа-запрос
	// и вызов обработчика при первом запуске
	for (let i = 0; i < this.mediaQueries.length; i++) {
		const media = this.mediaQueries[i];
		const mediaSplit = String.prototype.split.call(media, ',');
		const matchMedia = window.matchMedia(mediaSplit[0]);
		const mediaBreakpoint = mediaSplit[1];

		// массив объектов с подходящим брейкпоинтом
		const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
			return item.breakpoint === mediaBreakpoint;
		});
		matchMedia.addListener(function () {
			_this.mediaHandler(matchMedia, оbjectsFilter);
		});
		this.mediaHandler(matchMedia, оbjectsFilter);
	}
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
	if (matchMedia.matches) {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.moveTo(оbject.place, оbject.element, оbject.destination);
		}
	} else {
		for (let i = 0; i < оbjects.length; i++) {
			const оbject = оbjects[i];
			if (оbject.element.classList.contains(this.daClassname)) {
				this.moveBack(оbject.parent, оbject.element, оbject.index);
			}
		}
	}
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
	element.classList.add(this.daClassname);
	if (place === 'last' || place >= destination.children.length) {
		destination.insertAdjacentElement('beforeend', element);
		return;
	}
	if (place === 'first') {
		destination.insertAdjacentElement('afterbegin', element);
		return;
	}
	destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
	element.classList.remove(this.daClassname);
	if (parent.children[index] !== undefined) {
		parent.children[index].insertAdjacentElement('beforebegin', element);
	} else {
		parent.insertAdjacentElement('beforeend', element);
	}
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
	const array = Array.prototype.slice.call(parent.children);
	return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
	if (this.type === "min") {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return -1;
				}

				if (a.place === "last" || b.place === "first") {
					return 1;
				}

				return a.place - b.place;
			}

			return a.breakpoint - b.breakpoint;
		});
	} else {
		Array.prototype.sort.call(arr, function (a, b) {
			if (a.breakpoint === b.breakpoint) {
				if (a.place === b.place) {
					return 0;
				}

				if (a.place === "first" || b.place === "last") {
					return 1;
				}

				if (a.place === "last" || b.place === "first") {
					return -1;
				}

				return b.place - a.place;
			}

			return b.breakpoint - a.breakpoint;
		});
		return;
	}
};

const da = new DynamicAdapt("max");
da.init();