import {repository} from "nodedata/core/decorators/repository";
import {BlogModel} from '../models/blogmodel';

@repository({ path: 'blogs', model: BlogModel })
export default class BlogRepository {

}
