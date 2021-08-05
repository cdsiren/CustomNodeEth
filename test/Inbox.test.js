const asset = require('assert'); // assert library part of node standard and lets us to make sure two values are equal
const { assert } = require('console');
const ganache = require('ganache-cli');
const Web3 = require('web3');  // constructor function -- always capitalized

const web3 = new Web3(ganache.provider()); // instance of Web3 + the provier that will connect to our local test network

class Car {
    park() {
        return 'stopped';
    }
    drive () {
        return 'vroom';
    }
}

describe('Car', () => {
    it('can park', () => {
        const car = new Car();
        assert.equal(car.park(), 'stopped');
    });
}); //arrow returns all it functions - strings just give us something to look at