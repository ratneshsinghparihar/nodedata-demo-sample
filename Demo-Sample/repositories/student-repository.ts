import * as decorator from "nodedata/core/decorators/repository";
import {Student} from '../models/student';

@decorator.repository({ path: 'students', model: Student })
export default class StudentRepository {
}
