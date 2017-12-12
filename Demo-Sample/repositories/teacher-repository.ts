import * as decorator from "nodedata/core/decorators/repository";
import {TeacherModel} from '../models/teacherModel';

@decorator.repository({ path: 'teachers', model: TeacherModel })
export default class TeacherRepository {
}
