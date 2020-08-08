import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <h2>Title</h2>
    `
})
export class CoursesComponent{
    title = 'List of courses';
    couses = ["Course1", "Course2", "Course3"]
}