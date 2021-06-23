/**
 * The utils class holding data.
 */
class Utils {

    /**
     * utility function that throw an error when someone try to initialize an static class
     */
    public static isStaticClass() {
        throw new Error("This is a static class");
    }
}

export {Utils}