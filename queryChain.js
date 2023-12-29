const { Person } = require("./myApp");

const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({ favoriteFoods: foodToSearch })
        .sort({ name: -1 })
        .limit(5)
        .select({ name, 1: , age: 0 })
        .exec(function(error, people) {
            //do something here
            console.log(people);
            done(null, people);
        });
};
