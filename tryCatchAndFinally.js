function reverseString(s) {
    // Try to reverse string  using the split, reverse, and join methods.
    try {
        console.log(s.split("").reverse().join(""))
    } catch (e) {
        // If an exception is thrown, catch it and print the contents of the exception's message on a new line.
        console.log("s.split is not a function")
        console.log(s)
    }
    // Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
}


console.log(reverseString("12345"));