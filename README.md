For your first application lets assume that you are building an application for blogs and you want to create an api which can be use in frontend/mobile application .

	•	API should create blogs into database
	•	API should update blogs into database
	•	API should delete blogs from database
	•	API should find and fetch a blog using any existing blog id from database
	
preparation-
	1.	mongodb is installed and server is running on default port.
	2.	Node 6.9.0 is installed.
	3.	IDE like vscode is available to you
	
installation
	1.	git clone https://github.com/sureshdube14/nodedata-demo-sample.git
	2.	cd nodedata-demo-sample/Demo-Sample
	3.	npm install
	
Code changes
	•	Add a model blogmodel.ts inside models folder
	•	Add a repository blogmodelrepository.ts inside repositories folder	
	•	Model with @document tell the system to create a document inside blogs collection.
	•	repository with blog name will create all necessary rest end points.
	
Testing
	1.	npm start
	2.	Post a JSON {"name": "testBlog"} to http://localhost:9999/data/blogs
	3.	Hit the api to get data(http://localhost:9999/data/blogs)
	4.	Hit the api with put method http://localhost:9999/data/blogs/{{blogId}} with body {"name": "testBlog1"}
	5.	Hit the api with delete method http://localhost:9999/data/blogs/{{blogId}}
	
Conclusion
N	ow you can see how creating rest apis is super easy with node-data. 
If you want to know more check out the our github
  
https://github.com/ratneshsinghparihar/Node-Data
Or visit our main page
https://nodedataio.azurewebsites.net/

