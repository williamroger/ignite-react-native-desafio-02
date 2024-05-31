export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      feedback: {
        isInsideTheDiet: string;
      };
      form: undefined;
      details: {
        id?: string;
        name: string;
        description: string;
        date: string;
        hour: string;
        isInsideTheDiet: string;
      };
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