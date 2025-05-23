//4. Create a Counter with the help of getter and setter accessors.
const counter = {
    _count: 0, // Private variable convention

    get value() {
        return this._count; // Getter returns the count value
    },

    set value(newValue) {
        if (typeof newValue === "number" && newValue >= 0) {
            this._count = newValue; // Setter updates the count
        } else {
            console.error("Invalid value. Counter must be a non-negative number.");
        }
    },

    increment() {
        this._count++; // Method to increment the counter
    }
};

// Usage
console.log(counter.value); // Get counter value (0)

counter.increment(); // Increment
console.log(counter.value); // Get updated value (1)

counter.value = 10; // Set new value using setter
console.log(counter.value); // Get updated value (10)

counter.value = -5; // Attempt to set an invalid value (Triggers error)
