import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        return {
            lists: [
                {
                    id: 0,
                    firstName: 'Иванов',
                    lastName: 'Иван',
                    patronymic: 'Иванович',
                    count: 1,
                    cars: [
                        {
                            number: 'BC7286AE',
                            marka: 'KIA',
                            model: 'Optima',
                            year: 2019
                        },

                    ]
                },
                {
                    id: 1,
                    firstName: 'Петрова',
                    lastName: 'Наталья',
                    patronymic: 'Игоревна',
                    count: 2,
                    cars: [
                        {
                            number: 'AX2121HP',
                            marka: 'Hyundai',
                            model: 'Accent',
                            year: 2009
                        },
                        {
                            number: 'BC7286AE',
                            marka: 'KIA',
                            model: 'Optima',
                            year: 2019
                        },

                    ]
                },
                {
                    id: 2,
                    firstName: 'Антонов',
                    lastName: 'Алексей',
                    patronymic: 'Сергеевич',
                    count: 1,
                    cars: [
                        {
                            number: 'BC7286AE',
                            marka: 'KIA',
                            model: 'Optima',
                            year: 2019
                        },

                    ]
                },
               
            ]
        };
    }

}

// export class InMemorySelectedService implements InMemoryDbService {
//     createDb(): {} {
//         return {
//           selectedList: {}
//         };
//     }

// }