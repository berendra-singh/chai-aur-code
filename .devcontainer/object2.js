// de structring to object

const course={
    courseName: "js in hindi",
    price:69,
    courseInstructor:"hitesh",
}
const {courseName}=course
console.log(courseName)

const {courseInstructor:instructor}=course // key value ka name change karna destructring

console.log(instructor)


