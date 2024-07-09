const yup = require("yup")

const userBodyValidator = yup.object().shape({
    id: yup.string().required("ID is required"),
    username: yup.string().required("Username is required").min(4, "Username must be at least 4 characters"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    age: yup
        .number()
        .required("Age is required")
        .positive("Age must be a positive number")
        .integer("Age must be an integer"),
    isAdmin: yup.boolean().required("Admin status is required"),
})

module.exports = {
    userBodyValidator,
}
