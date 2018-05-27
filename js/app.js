$(function(){

    //model

   var model = {
        currentCat: null,
        cats : [
        {'catName':'brownie',
        'clicks':0,
        'url':'images/brownie.jpg'
        },
        {'catName':'blackie',
        'clicks':0,
        'url':'images/blackie.jpg'
        },
        {'catName':'ed',
        'clicks':0,
        'url':'images/ed.jpg'
        },
        {'catName':'jim',
        'clicks':0,
        'url':'images/jim.jpg'
        },
        {'catName':'ivy',
        'clicks':0,
        'url':'images/ivy.jpg'
        }]
   };
   
    //octopus
   
    var octopus = {
        init: function() {
            model.currentCat = model.cats[0];
            name_view.init();
            cat_view.init();
        },
        getCurrentCat: function(){
            return model.currentCat;
        },
        getCats: function(){
            return model.cats;
        },
        setCurrentCat: function(cat){
            model.currentCat = cat;
        },
        incrementCounter: function(){
            model.currentCat.clicks++;
            cat_view.render();
        },
    };

    //views
    
    
    
    var cat_view = {
        init: function(){
                this.catElem = document.getElementById('picture');
                this.counterElem = document.getElementById('clicks');
                this.nameElem = document.getElementById('name');
                
                this.catElem.addEventListener('click', function(){
                    octopus.incrementCounter();
                });
                 this.render();
        },
               
        render: function(){
            var currentCat = octopus.getCurrentCat();
            this.counterElem.textContent = currentCat.clicks;
            this.nameElem.textContent = currentCat.catName;
            this.catElem.src = currentCat.url;
        }
        };
    
    var name_view = {
    init: function(){
        this.catList = document.getElementById('list');
        this.render();
    },
    render: function(){
        var cat, elem, i;
        var cats = octopus.getCats();
        this.catList.innerHTML = '';
        
        for(i=0;i<cats.length;i++){
            cat = cats[i];
            elem = document.createElement('div');
            elem.textContent = cat.catName;
            
            //EventListener
            elem.addEventListener('click',(function(catCopy){
                return function(){
                    octopus.setCurrentCat(catCopy);
                    cat_view.render();
                };
            })(cat));
            this.catList.appendChild(elem);
        }
    }
    };
   
   
   
   octopus.init();
   
   
   
   
   
});


   


/**
var cats = ['brownie','blackie','ed','jim','ivy'];
        var current_click = 0;
        var clicks = [0,0,0,0,0];
        var picture = document.getElementById('picture');
        for(var i=0;i<cats.length;i++){
            var cat = cats[i];

            var cat_element = document.createElement('div');

            cat_element.textContent = cat;

            cat_element.addEventListener('click', (function(catCopy, number) {
                return function(){
                    picture.src = "images/"+catCopy+".jpg";
                    current_click = number;
                    document.getElementById('name').innerHTML = catCopy;
                    clicks_element.innerHTML= clicks[current_click];
                };
            })(cat, i));

            document.getElementById('list').appendChild(cat_element);

        }
        var clicks_element = document.getElementById('clicks')
        var picture_element = document.getElementById('picture');
        picture_element.addEventListener('click', function(){
            clicks[current_click] += 1;
            clicks_element.innerHTML= clicks[current_click];
        });
**/
