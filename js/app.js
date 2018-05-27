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
