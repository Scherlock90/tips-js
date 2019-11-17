import React from 'react';

export default function DestructuringTest() {

    // This is function where is destructuring options.
    function carGenerator(options = {}) {
        const {
            name = 'Maserati',
            power = 220,
            engines = 'Turbo Disel',
            isFast = true,
        } = options; // Default options

        return `This ${name} has ${power} km/h, ${engines} engines, and is fast ${isFast}.`;
    }
    
    // 1. in this case we must intialize start variables.
    let nameOne = 'Canada';
    let nameTwo = 'John';
    let nameThree = 'Doe';
    // here we assigns new values for intialize variables.
    const objectWithNames = {
        nameOne: 'Natalia',
        nameTwo: 'Paulina',
        nameThree: 'Ewa',
    };
    // here we destructuring this variables
    ({
        nameOne,
        nameTwo,
        nameThree,
    } = objectWithNames);

    // 2. in this case we create object with properties.
    const objectWithCar = {
        car1: 'Golf',
        car2: 'Citroen',
    }
    // here we destructuring object and create here variables,
    // and we can add new variable with new properties
    const {
        car1,
        car2,
        car3 = 'Maserati',
    } = objectWithCar;

    // 3. in this case we nested object
    const girl = {
        name: 'Katie',
        age: 22,
        scores: {
            maths: 74,
            english: 63,
        }
    };
    // here wecreate variables with nested variables objects who we are destructuring!
    const {
        name,
        age,
        scores: { maths, english },
    } = girl;

    // 4. in this case we array!
    const rgb = [255, 200, 0];

    // Array Destructuring, we assings each value to new variables
    const [
        red,
        green,
        blue,
    ] = rgb;

    // 5. in this case we rest + destructuring!
    const organizations = [
        'Pyke',
        'Black Sun',
        'Kanjiklub',
        ' ',
        'Crimson Dawn',
    ];

    // here we have destructuring with rest
    const [
        firstGang,
        secondGang,
        ...theRest
    ] = organizations;

    console.table([red, green, blue]);
    return (
        <div>
            Destructuring!
            <div>
                Names:
                <ul>
                    <li>
                        { nameOne }
                    </li>
                    <li>
                        { nameTwo }
                    </li>
                    <li>
                        { nameThree }
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        { car1 }
                    </li>
                    <li>
                        { car2 }
                    </li>
                    <li>
                        { car3 }
                    </li>
                </ul>
            </div>
            <div>
                In the city is a new girl with name { name } and she is have { age } yar'.
                She's scores to exam with math { maths } and english { english }.
            </div>
            <div>
                {`R: ${red}, G: ${green}, B: ${blue}`}
            </div>
            <div>
                Names of gang: 
                <ul>
                    <li>
                        { firstGang }
                    </li>
                    <li>
                        { secondGang }
                    </li>
                    <li>
                        { theRest }
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    Function car generator!
                </div>
                <div>
                    {carGenerator({ power: 320, engines: 'Max Turbo Disel' })}
                </div>
                <div>
                    {carGenerator({ name: 'Golf', power: 100, engines: 'Turbo Disel', isFast: false })}
                </div>
            </div>
        </div>
    )
}