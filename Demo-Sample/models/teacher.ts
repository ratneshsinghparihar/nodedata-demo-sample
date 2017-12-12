import {onetomany, manytoone, manytomany, onetoone} from 'nodedata/core/decorators';
import {field, document} from 'nodedata/mongoose/decorators';
import {Strict} from 'nodedata/mongoose/enums';
import {StorageType} from 'nodedata/core/enums/storage-type-enum';
import {BaseModel} from './baseModel';
import {Student} from './student';

@document({ name: 'teacher', strict: Strict.true })
export class Teacher extends BaseModel {

    // reference is saved in database and not the actual document
    @onetomany({ itemType: Student, rel: 'student', eagerLoading: false, embedded: false })
    student: Array<Student>;

    // reference is saved in database, but in get query eagerloaded proprties are fetched
    @onetomany({ itemType: Student, rel: 'student', eagerLoading: true, embedded: false })
    studentEL: Array<Student>;

    // embedding
    @onetomany({ itemType: Student, rel: 'student', eagerLoading: false, embedded: true })
    studentE: Array<Student>;

    // partial embedding example
    @onetomany({ itemType: Student, rel: 'student', eagerLoading: false, embedded: true, properties:['age'] })
    studentPE: Array<Student>;

    // Delete cascade makes sure that, if parent is deleted then child is also deleted. This makes sure that orphans are not present in the system
    @onetomany({ itemType: Student, rel: 'student', eagerLoading: false, embedded: true, deleteCascade: true })
    studentDC: Array<Student>;

    // embedding with storage type as JSONMAP. This is faster in update/delete as compared to normal embedding
    @onetomany({ itemType: Student, rel: 'student', eagerLoading: false, embedded: true, storageType: StorageType.JSONMAP })
    studentEJ: Array<Student>;
}

export default Teacher;