import {faker} from '@faker-js/faker'

class RandomUtils{
    static firstName(){
        return faker.person.firstName()
    }

    static lastName(){
        return faker.person.lastName()
    }

    static phone(){
        return faker.phone.number({style: 'international'})
    }
}

export default RandomUtils
