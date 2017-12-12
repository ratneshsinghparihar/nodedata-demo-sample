import * as decorator from "nodedata/core/decorators/repository";
import {BlogModel} from '../models/blogmodel';

@decorator.repository({ path: 'blogs', model: BlogModel })
export default class BlogRepository {

}
