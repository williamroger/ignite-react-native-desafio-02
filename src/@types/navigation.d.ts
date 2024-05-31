export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      feedback: {
        isInsideTheDiet: string;
      };
      form: undefined;
      details: undefined;
      statistics: {
        totalMeals: number,
        totalMealsInside: number,
        totalMealsOutside: number,
        percentageOfMeals: number,
        bestDietSequence: number,
        isInsideTheDiet: boolean,
      };
    }
  }
}