describe('document', function() {
	it("shoul be exist", function () {
    expect($(document)).toBeDefined();
  })
});

describe('People of Car', function() {
  it("can take four human", function () {
    var car = new Car();
    car.addPeople(["one", "two", "three", "four"]);

    expect(car.getPeople().length).toBe(4);
  })
});

describe('Car', function() {
  var car;

  beforeEach(function() {
    car = new Car();
  });

  it("should start if human number is 4", function() {
    car.addPeople(["one", "two", "three", "four"]);

    expect(car.isStarted()).toBe(true);
    expect(car.getSpeed()).toBe(12);

    car.addPeople(["five"]);

    expect(car.isStarted()).toBe(true);
    expect(car.getSpeed()).toBe(15);
  }) 

  it("should not start if human number is not 4", function() {
    car.addPeople(["one", "two", "three"]);

    expect(car.isStarted()).toBe(false);
    expect(car.getSpeed()).toBe(0);
  })
});

describe('Car element', function() {
  var carElement;
  beforeEach(function() {
    carElement = $('<div id="car">');
    $(document.body).append(carElement);
  });
  
  it("should render car element in html", function() {
    expect($("#car").css("width")).toBeDefined();
    expect($("#car").css("height")).toBeDefined();
  })
})


describe('Driving', function() {
  var car;
  var carElement;

  beforeEach(function() {
    car = new Car();
    car.addPeople(["one", "two", "three", "four"])
  });

  beforeEach(function() {
    carElement = $('<div id="car" style="left:0px; top:0px;">');
    $(document.body).append(carElement);
  });

  it("should move car element's position to right", function() {
    car.moveToRight()

    expect($("#car").css("left")).toBe('12px');
    expect($("#car").css("top")).toBe('0px');
  
    car.moveToLeft()

    expect($("#car").css("left")).toBe('0px');
    expect($("#car").css("top")).toBe('0px');
  
    car.moveToDown()

    expect($("#car").css("left")).toBe('0px');
    expect($("#car").css("top")).toBe('12px');
  
    car.moveToUp()

    expect($("#car").css("left")).toBe('0px');
    expect($("#car").css("top")).toBe('0px');
  }) 
});

// TODO next
describe('Car moving', function() {
  var carElement;
  var keyPress = null;

  beforeEach(function() {
    carElement = $('<div id="car" style="left:0px; top:0px;">');
    $(document.body).append(carElement);
  });

  beforeEach(function() {
    keyPress = function (key) {
      var event = document.createEvent('Event');
      event.keyCode = key;
      event.initEvent('keydown');
      document.dispatchEvent(event);
    }

    document.addEventListener('keydown', function(e){
       keyPressed = e.keyCode;
    });
  })
  
  it("should move car element in html", function() {
    keyPress(39);
    keyPress(40);
    
    expect($("#car").css("left")).toBe(car.getSpeed()+'px');
    expect($("#car").css("top")).toBe(car.getSpeed()+'px');
  })
})