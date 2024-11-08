{
  // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = {
    shape: 'circle';
    radius: number;
  };

  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  };

  function calculateShapeArea(input: Circle | Rectangle): number {
    if (input.shape === 'circle') {
      return Math.PI * input.radius * input.radius;
    } else if (input.shape === 'rectangle') {
      return input.height * input.width;
    }
    return 0;
  }

  const circle: Circle = {
    shape: 'circle',
    radius: 6,
  };
  const circleArea = calculateShapeArea(circle);
  console.log(circleArea); // 113.09733552923255

  const rectangle: Rectangle = {
    shape: 'rectangle',
    width: 2,
    height: 6,
  };
  const rectangleArea = calculateShapeArea(rectangle);
  console.log(rectangleArea); // 12
}