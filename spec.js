describe('hi', function(){
      it('should exist', function() {
        expect(hi).toEqual(jasmine.any(String));
      })
      it('should equal seeya', function() {
        expect(hi).toEqual('seeya');
      })
    })

describe('iLoveCode', function() {
      it('should exist', function() {
        expect(iLoveCode).toEqual(jasmine.any(String))
      })
      it('should say \'I love code\'', function() {
        expect(iLoveCode).toEqual('I love code')
      })
    })

describe('Dane', function() {
      it('should exist', function() {
        expect(Dane).toEqual(jasmine.any(Object));
      })
      it('should have the right properties', function() {
        expect(Dane.height).toEqual('4ft');
        expect(Dane.age).toEqual(4);
        expect(Dane.shirt).toEqual(jasmine.any(Object));
        expect(Dane.shirt.color).toEqual('violet');
        expect(Dane.shirt.size).toEqual('S');
        expect(Dane.likes).toEqual(jasmine.any(Array));
        expect(Dane.likes).toContain('Sleek Cotton Salad', 'Awesome Metal Chair', 'Incredible Concrete Tuna');
      })
    })

describe('myShirt', function() {
  it('should exist', function() {
    expect(myShirt).toEqual(jasmine.any(Object))
    expect(myOtherShirt).toEqual(jasmine.any(Object));
  })

  it('should have the right values', function() {
    expect(myShirt.type).toEqual('mediocre');
    expect(myShirt.color).toEqual('blue');

    expect(myOtherShirt.type).toEqual('muddy');
    expect(myOtherShirt.color).toEqual('lavender');
  })
})

describe('zoo', function() {
  it('should exist', function(){
    expect(zoo).toEqual(jasmine.any(Object));
  })
  it('should have sloths property', function () {
			expect(zoo.hasOwnProperty('sloths')).toEqual(true);
	})
	it('should have chimpanzees property', function () {
		expect(zoo.hasOwnProperty('chimpanzees')).toEqual(true);
	})

	it('should have foxes property', function () {
		expect(zoo.hasOwnProperty('foxes')).toEqual(true);
	})

	it('should count the animals correctly', function () {
		expect(zoo.sloths).toEqual(71)
		expect(zoo.chimpanzees).toEqual(98)
		expect(zoo.foxes).toEqual(84);
	})
})

describe('canonizer', function() {
  it('should exist', function() {
    expect(canonizer).toEqual(jasmine.any(Object));
  })
  it('should have 5 properties', function() {
    var count = 0;
    for (var prop in canonizer) count++;

    expect(count).toEqual(5);
  })
  it('should change properties that start with \'h\'', function() {
    for (var prop in canonizer) {
      if (prop.match(/^h/)) {
        expect(canonizer[prop]).toEqual('h')
      }
    }
  })
})

describe('daysOfWeek', function() {
  it('should exist', function() {
    expect(daysOfWeek).toEqual(jasmine.any(Array));
  })
  it('should have the right values', function() {
    expect(daysOfWeek.sort()).toEqual(['monday','tuesday','wednesday','thursday','friday',].sort());
  })
})

	describe('heroes', function () {
		it('should add \'Weapon Omega\' to the end', function () {
			expect(heroes[heroes.length - 1]).toEqual('Weapon Omega');
		})
		it('should remove \'White Tiger\' and store him in a variable', function () {
			expect(firstHero).toEqual('White Tiger');
		})
		it('should add \'Ozymandias\' to the start of the array', function () {
			expect(heroes[0]).toEqual('Ozymandias');
		})

		it('should copy Wolf Cub from the array and store him in a variable', function () {
			expect(thirdHero).toEqual('Wolf Cub');
			expect(heroes.indexOf('Wolf Cub') > 0).toEqual(true);
		})
	})

describe('addItem', function () {
		it('should exist', function () {
			expect(addItem).toBeDefined();
		})
		it('should add an item', function () {
			expect(addItem(["cordially", "mycteric", "incalver"], "finding")).toEqual(["cordially", "mycteric", "incalver", "finding"]);
			expect(addItem(["cordially", "cordially", "cordially"], "finding")).toEqual(["cordially", "cordially", "cordially", "finding"]);
			expect(addItem(["cordially", "mycteric", "incalver"], "corta")).toEqual(["cordially", "mycteric", "incalver", "corta"]);
		})
	})


    describe('double the fun', function() {
      it('should exist', function() {
        expect(doubleTheFun).toBeDefined();
      })
      it('should double strings', function() {
        expect(doubleTheFun('A')).toEqual('AA');
        expect(doubleTheFun('double')).toEqual('doubledouble')
        expect(doubleTheFun('SuchFun')).toEqual('SuchFunSuchFun');

      })
      it('should double numbers', function() {
        expect(doubleTheFun(2)).toEqual(4);
        expect(doubleTheFun(4)).toEqual(8);
        expect(doubleTheFun(3.5)).toEqual(7);
      })
      it('should double numbers pretending to be strings', function() {
        expect(doubleTheFun("1")).toEqual(2);
        expect(doubleTheFun("2.5")).toEqual(5);
        expect(doubleTheFun("4")).toEqual(8);
      });
    });


    describe('spiderTest', function () {
  		it('should exist', function () {
  			expect(spiderTest).toBeDefined();
  		});

  		it('accurately rates Andrew Garfield\'s spiderman', function () {
  			var actor = { name: 'Andrew Garfield' };
  			spiderTest(actor);

  			expect(actor.spiderRating).toEqual(10);
  		});

  		it('undervalues Tobey Maguire', function () {
  			var actor = { name: 'Tobey Maguire' };
  			spiderTest(actor);

  			expect(actor.spiderRating).toEqual(0);
  		});

  		it('recognizes Jeremy is not spiderman', function () {
  			var actor = { name: 'Jeremy' };
  			spiderTest(actor);

  			expect(actor.spiderRating.toLowerCase()).toEqual('not a spiderman');
  		});
  	});



	describe('whatIsItOutside', function () {
		it('should exist', function () {
			expect(whatIsItOutside).toBeDefined();
		});

		it('should warn me I will be sweaty', function () {
			var res = whatIsItOutside(86, 46);

			expect(res).toEqual("I'm all sweat");
		});

		it('should say something silly about icicles', function () {
			var res = whatIsItOutside(10, 0, 90);

			expect(res).toEqual("I have icicles");
		});

		it('should inform me I am in the desert', function () {
			var res = whatIsItOutside(86, 44, 19);

			expect(res).toEqual("I'm literally in the desert");
		});

		it('should make me hesitate about life choices - hot', function () {
      expect(whatIsItOutside(91, 20, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - humid', function () {
      expect(whatIsItOutside(80, 56, 45)).toEqual("Hmm, probably not");
		});

		it('should make me hesitate about life choices - cloudy', function () {
      expect(whatIsItOutside(80, 20, 66)).toEqual("Hmm, probably not");
		});

		it('should encourage me to go whatIsItOutside', function () {
			expect(whatIsItOutside(79, 20, 45)).toEqual("I love outside");
		});
	});


    describe('callerBack', function () {
		it('should exist', function () {
			expect(callerBack).toBeDefined();
		});
		it('should call me back', function () {
			var called = false;
			function callback(ret) {
				called = true;
			}

			callerBack(callback, "Hey!");

			expect(called).toBeTruthy();
		});
		it('should call me back with the right message', function () {
			var calledMsg = "";
			function callback(ret) {
				calledMsg = ret;
			}

      callerBack(callback, "Hey!");
			expect(calledMsg).toBe('Hey! back');
		});
	});


        describe('clockIn', function () {
      it('should exist', function () {
        expect(clockIn).toBeDefined();
      });
      it('should make chat message object', function () {
        expect(clockIn("Elon Musk", "CEO").name).toEqual("Elon Musk");
        expect(clockIn("Elon Musk", "CEO").department).toEqual("CEO");
        expect(clockIn("Elon Musk", "CEO").timestamp).toEqual(new Date());
      });
    });
    

