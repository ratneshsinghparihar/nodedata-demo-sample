import * as decorator from "nodedata/core/decorators/repository";
import {Teacher} from '../models/teacher';

@decorator.repository({ path: 'teachers', model: Teacher })
export default class TeacherRepository {
}
