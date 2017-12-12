import {field, document} from 'nodedata/mongoose/decorators';
import {Strict} from 'nodedata/mongoose/enums';
import {BaseModel} from './baseModel';

@document({ name: 'student', strict: Strict.true })
export class Student extends BaseModel {

    @field()
    age: number;
}

export default Student;