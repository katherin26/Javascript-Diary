# **SETTING UP GIT AND DEPLOYMENT**

## **SIMPLE DEPLOYMENT WITH NETLIFY**

**File : package.json**

```
"devDependencies":{
"parcel":"^2.0.0-beta.1"
}
```

1. **scripts:**

**start** : Only works for development because the final output will actually
contain the development server and also the code is not being compressed and dead code
is not being eliminated .

NOTE: Before used the build script we need to delete .parcel-cache and the dist file in
order to basically get a fresh start.

**build** : In the build command we need to manually specify that we want our output to be in the dist folder **--dist-dir**: distribution directory, and then we need to specify the folder that we actually want to be created, let's call that the dist folder **./dist**.

e.g.: "build":"parcel build index.html **--dist-dir ./dist**"

NOTE: Another thing is change main to default.

e.g.: "main": "index.html" for "default": "index.html"

**npm run build**: We are ready to then deploy it to the folder created in netlify.

**dist folder**: Now this folder contains the final code compressed and ready to be shipped.
