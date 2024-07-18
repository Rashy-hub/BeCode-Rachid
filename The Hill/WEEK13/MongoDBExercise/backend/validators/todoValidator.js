const yup = require("yup")
//const { v4: uuidv4 } = require("uuid")
const validate = require("uuid-validate")

const todoBodyValidator = yup.object().shape({
    id: yup
        .string()
        .required("ID is required")
        // Use a custom test function for UUID validation (Version 4 format)
        .test("is-uuid", "ID must be a valid UUID", (value) => {
            console.log("checking if valid uuid " + value)

            if (validate(value, 4)) return true // Valid UUID (Version 4)
            else console.log("invalid uuid detected")
            return false // Invalid UUID
        }),
    username: yup.string().required("Username is required").min(4, "Username must be at least 4 characters"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    age: yup.number().required("Age is required").positive("Age must be a positive number").integer("Age must be an integer"),
    isAdmin: yup.boolean().required("Admin status is required"),
})

module.exports = {
    todoBodyValidator,
}
