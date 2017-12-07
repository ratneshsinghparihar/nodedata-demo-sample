﻿import * as decorator from "nodedata/core/decorators/repository";
import {CourseModel} from '../models/coursemodel';


@decorator.repository({ path: 'course', model: CourseModel })
//@decorator.repository('/course', CourseModel)
export default  class CourseRepository {
    constructor() {}
}
