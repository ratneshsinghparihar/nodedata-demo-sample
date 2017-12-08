## How To Use without security
Assumptions - 
1. mongodb is installed and server is running.
2. Node 6.9.0 is installed.

Please follow belos steps to check CRUD operations with nodedata
1. git clone https://github.com/sureshdube14/nodedata-demo-sample.git
2. cd nodedata-demo-sample/Demo-Sample
3. npm install 
4. npm start
5. Post a JSON {"name": "testBlog"} to http://localhost:9999/data/blogs
6. Hit the api to get data(http://localhost:9999/data/blogs)
7. Hit the api with put method http://localhost:9999/data/blogs/{{blogId}}  with body {"name": "testBlog1"}
8. Hit the api with delete method http://localhost:9999/data/blogs/{{blogId}}
