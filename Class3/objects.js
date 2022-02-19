// everything is an object in javascript, even a string, so you can run a method on the object - cool


const hero = {
    name: 'Bruce Wayne',
    alias: 'Batman',
    catchphrase: 'To the Batcave!',
    speak: function() {
        return 'Attention! ' + this.catchphrase;
    },
    attack: function(sound) {
        // return '(punches bad guy) ' + sound
        return `(punches bad guy) ${sound}`;
    }
};

// access an object's property
const thingToLookFor = 'alias';

console.log(hero.name); // Bruce Wayne
console.log(hero['name']); // Bruce Wayne
console.log(hero[thingToLookFor]); // Batman

// accessing methods (functions)
console.log(hero.speak());
console.log(hero.attack('POWWWWW !'));

// 'this is my string'.toUpperCase();
