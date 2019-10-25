'use strict';

function doStuff() {
    document.getElementById('my-name').innerHTML = getName();
    document.getElementById('language').innerHTML = getProgrammingLanguage();
    document.getElementById('two-and-two').innerHTML = add(2, 2);

    var dog = new Dog('henkie', 'labrador', 4);
    document.getElementById('dog-name').innerHTML = dog.name;
    document.getElementById('dog-breed').innerHTML = dog.breed;
    document.getElementById('dog-bark').innerHTML = dog.bark();
}
