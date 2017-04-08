var prime = require("../primeme.js");
describe("generates prime numbers from 0 to n ", function (){  

	describe("no prime number is obtainable", function() {

      it("should return an empty array", function() {
        expect(aritGeo([])).toEqual([]);
      });
   	
   	it("should return an array",function(){ 
      expect(aritGeo([-1])).toEqual([]); 
         
  it("should return an array",function(){ 
      expect(aritGeo([10])).toEqual([2,3,5,7]); 

   it("should return an array",function(){ 
      expect(aritGeo([20])).toEqual([2,3,5,7,11,13,17,19]); 
   });     

   it("should return an array",function(){ 
      expect(aritGeo([50])).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]); 
   });     

}
