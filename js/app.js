

    //model

   var model = {
        currentCat: null,
        cats : [
        {'name':'brownie',
        'clicks':0,
        'url':'images/brownie.jpg'
        },
        {'name':'blackie',
        'clicks':0,
        'url':'images/blackie.jpg'
        },
        {'name':'ed',
        'clicks':0,
        'url':'images/ed.jpg'
        },
        {'name':'jim',
        'clicks':0,
        'url':'images/jim.jpg'
        },
        {'name':'ivy',
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
            this.nameElem.textContent = currentCat.name;
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
            elem.textContent = cat.name;
            
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
   