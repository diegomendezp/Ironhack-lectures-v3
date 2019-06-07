## TDD



TDD Workshop with Iago Lastra - from youcanbookme.com	-	<https://github.com/IagoLast>



- Write the test and watch it fail
- Make the test pass
- Rrefactor the code



**Should** .... do something .... **when** something is ....





Each test has 3 phases:

- ARRANGE  -pick a guy that is an adult

- ACT - pass it to the code
- ASSERT/EXPECT - check the 

```js
const securityService = require('./security.service.js');

describe('securityService', () => {
  describe('.check(developer)', () => {
    it('should return true when the developer is an adult', () => {
     
      // ARRANGE
      const dummyDeveloper = {
        age: 21,
      }

      // ACT
      const actual = securityService.check(developer);

      // EXPECT  
      expect(true).toBe(true);
    });
    // write more tests here
  });
});
```







### LECTURE EXAMPLE CODE  and README:



# Dev fest security KATA

You task is to program the security algorithm of the ironhack tdd event.

Complete the`check` function in the security service according to the following criteria:

### Step 1

Only adults (+18) can enter in this event.

### Step 2

If the developer is under-age will need an adultPermision.

### Step 3

If the developer age is over 30 a score of at least 3 points is needed to enter.

The score is computed given the developer's experience and the fav tech:

  \- juniors will score 3

  \- average developers score 2

  \- seniors developers score 1

  \- php score x0.5

  \- javascript scores x1

  \- typescript scores x2



## Example of a developer object:

```js
const developer = {
  age: 21,
  adultPermision: false,
  isVip: false,
  level: 'junior',
  techStack: 'tdd'
}
```



`security.service.js`

```js
//	security.service.js

const minLegalAge = 18;

function check(developer) {
  if (developer.age > minLegalAge || developer.adultPermission === true) return true;
  else return false
}

module.exports = { check }
```



`security.service.test.js`

```js
// security.service.test.js

const securityService = require('./security.service.js');

describe('securityService', () => {
  describe('.check(developer)', () => {
    it('should return true when the developer is an adult', () => {
      // ARRANGE
      const dummyDeveloper = {
        age: 21,
      }

      // ACT
      const actual = securityService.check(dummyDeveloper);

      // EXPECT  
      expect(actual).toBe(true);
    });

    it('should return false when the developer is not an adult', () => {
            // ARRANGE
      const dummyDeveloper = {
        age: 17,
      }

      // ACT
      const actual = securityService.check(dummyDeveloper);

      // EXPECT  
      expect(actual).toBe(false);
    });

    it('should return true when developer is under age but has adult permission', () => {
      // ARRANGE
      const dummyDeveloper = {
        age: 17,
        adultPermission: true
      }

      // ACT
      const actual = securityService.check(dummyDeveloper);

      // EXPECT  
      expect(actual).toBe(true);
    });

    it('should return false when developer is under age and has no adult permission', () => {
      // ARRANGE
      const dummyDeveloper = {
        age: 17,
        adultPermission: false
      }

      // ACT
      const actual = securityService.check(dummyDeveloper);

      // EXPECT  
      expect(actual).toBe(false);
    })

    it('should return true when developer is over age 30 and has the required amount of points', () => {
      // ARRANGE
      const dummyDeveloper = {
        age: 30,
        level: 'average',
        techStack: 'typescript'
      }

      // ACT
      const actual = securityService.check(dummyDeveloper);

      // EXPECT  
      expect(actual).toBe(true);
    });

    it('should return false when developer is over age 30 and has less than the required amount of points', () => {
      // ARRANGE
      const dummyDeveloper = {
        age: 30,
        level: 'junior',
        techStack: 'javascript'
      }

      // ACT
      const actual = securityService.check(dummyDeveloper);

      // EXPECT  
      expect(actual).toBe(false);
    })

    // write more tests here
  });
});
```

