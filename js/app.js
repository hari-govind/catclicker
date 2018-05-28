

    //model

   var model = {
        adminIsHidden: true,
        currentCat: null,
        cats: [
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
            admin_view.init();
        },
        getCurrentCat: function(){
            return model.currentCat;
        },
        getCats: function(){
            return model.cats;
        },
        setCurrentCat: function(cat){
            model.currentCat = cat;
            cat_view.render();
            admin_view.render();
        },
        incrementCounter: function(){
            model.currentCat.clicks++;
            cat_view.render();
            admin_view.render();
        },
        setAdminIsHidden: function(stats){
            model.adminIsHidden = stats;
            admin_view.render();
        },
        getAdminIsHidden: function(){
            return model.adminIsHidden;
        },
        updateCat: function(name, url,clicks){
            cat = model.currentCat;
            cat.name = name;
            cat.url = url;
            cat.clicks = clicks;
            admin_view.render();
            cat_view.render();
            name_view.render();
        }
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
        this.adminElem = document.getElementById('admin-button');
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
                };
            })(cat));
            this.catList.appendChild(elem);
        }
        this.adminElem.addEventListener('click', function(){
            octopus.setAdminIsHidden(false);
            cat_view.render();
        });
    }
    };
   var admin_view = {
    init: function(){
        areaElem = document.getElementById('admin-area');
        nameElem = document.getElementById('admin-name');
        urlElem = document.getElementById('admin-url');
        clicksElem = document.getElementById('admin-clicks');
        cancelElem = document.getElementById('cancel-button');
        updateElem = document.getElementById('update-button');
        this.render();
    },
    render: function(){
        if (!octopus.getAdminIsHidden()){
            areaElem.style.visibility = 'visible';
            currentCat = octopus.getCurrentCat();
            nameElem.value = currentCat.name;
            urlElem.value = currentCat.url;
            clicksElem.value = currentCat.clicks;
            updateElem.addEventListener('click', function(){
                octopus.updateCat(nameElem.value,urlElem.value,clicksElem.value);
            });
        }
        else{
            areaElem.style.visibility = 'hidden';
        }
        cancelElem.addEventListener('click', function(){
            octopus.setAdminIsHidden(true);
        });
    },
   };
   
   
   octopus.init();
   