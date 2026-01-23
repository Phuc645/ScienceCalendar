// Logic to determine the background based on the day
export const getSubjectClass = (day: number) => {
  switch (day % 4) {
    case 1:
      return "math";
    case 2:
      return "physics";
    case 3:
      return "chemistry";
    case 0:
    default:
      return "biology";
  }
};