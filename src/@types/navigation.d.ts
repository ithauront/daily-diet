export declare global{
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined
            meal: {
                bgColor?: 'GREEN' | 'RED'
                isInEdit?: boolean
            }
            mealPosted: {
                onDiet: boolean
            }
            mealDetails: {
                onDiet: boolean
                meal: string
                description: string
                dateAndTime: string
            }
            stats: {
                percentage: string
            }
        }
    }
}
