type FormType = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isInsideTheDiet: string;
};

type DetailsType = {
  id?: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isInsideTheDiet: string;
};

type StatisticType = {
  totalMeals: number,
  totalMealsInside: number,
  totalMealsOutside: number,
  percentageOfMeals: number,
  bestDietSequence: number,
  isInsideTheDiet: boolean,
};

type FeedbackType = {
  isInsideTheDiet: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      feedback: FeedbackType;
      form: FormType | undefined;
      details: DetailsType;
      statistics: StatisticType;
    }
  }
}