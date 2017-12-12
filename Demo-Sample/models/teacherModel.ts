import {onetomany, manytoone, manytomany} from 'nodedata/core/decorators';
import {field, document} from 'nodedata/mongoose/decorators';
import {Strict} from 'nodedata/mongoose/enums';
import {BaseModel} from './baseModel';

@document({ name: 'teacher', strict: Strict.true })
export class TeacherModel extends BaseModel {
    @field()
    name: String;


}

export default TeacherModel;