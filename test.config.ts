import RandomUtils from "./utils/RandomUtils"

class TestConfig{
    static readonly baseUrl="https://tutorialsninja.com/demo/index.php?route=common/home"
    static readonly firstName = RandomUtils.firstName()
    static readonly lastName = RandomUtils.lastName()
    static readonly email = TestConfig.firstName + "." + TestConfig.lastName + "@gmail.com"
    static readonly phone = RandomUtils.phone()
    static readonly password = TestConfig.firstName+TestConfig.lastName
}

export default TestConfig