/* Write a program that prints the numbers from 1 to 100 and for multiples of ‘3’ print “Fizz” instead of 
the number and for the multiples of ‘5’ print “Buzz”. 

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, 
Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, 
Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz,

*/

/* 
step 1: start with number 1
step 2: divide by 3. If quotient is an integer, push "Fizz" into the array
step 3: if quotient is not an integer, divide by 5. If quotient is an integer, push "Buzz" into the array
step 4: if quotient is not an integer, push the number into the array
step 5: go to the next number and repeat steps 2 through 4 until the number 100 is reached
step 6: print a joined array
*/

function fizzbuzz() {

    const list = []


    for (i = 1; i <= 100; i++) {



        if (i % 3 === 0 && i % 5 === 0) {

            list.push("Fizz Buzz")
        } else if (i % 3 === 0) {

            list.push("Fizz")

        } else if (i % 5 === 0) {

            list.push("Buzz")
        } else {

            list.push(i)
        }

        
    }
    

    console.log(list.join(', '))

}

fizzbuzz()

/*
const test = 'I\'ve struggled with this'
console.log(test)


const name = "osama"
const greeting = `hello ${name}`
console.log(greeting)
*/
