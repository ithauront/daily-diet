export declare global{
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined
            meal: {
                bgColor?: 'GREEN' | 'RED'
                isInEdit?: boolean
                mealNameParam?: string
                dateParam?: string
                timeParam?: string
            }
            mealPosted: {
                onDiet: boolean
            }
            mealDetails: {
                onDiet: boolean
                meal: string
                description: string
                date: string
                time: string
            }
            stats: {
                percentage: string
            }
        }
    }
}
