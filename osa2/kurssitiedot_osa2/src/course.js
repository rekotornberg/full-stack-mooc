const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((lisa, part) => lisa + part.exercises, 0)
    console.log(totalExercises)
    return (
        <div>
            <h1>{course.name}</h1>
                {course.parts.map(part => (
                    <div key={part.id}>
                        {part.name} {part.exercises}
                    </div>
            ))}
            <h2>Total of {totalExercises} exercises</h2>
        </div>
    )
}

export default Course