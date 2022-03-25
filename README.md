## id
#### Function
```javascript
const id = id => document.getElementByID(id)
```
## HTML
#### Function
```javascript
const html = string => {
    var wrap = document.createElement('div')
    wrap.innerHTML=string
    return wrap.firstElementChild
}
```
#### Example
```javascript
var el = html(`<div>
<input placeholder=email>
<input placeholder=password>
</div>`)
```
## bind variables to elements (display.js)
```Javascript
function bindData(parent){
    parent.querySelectorAll('[var]').forEach(element => {
        var variable = element.getAttribute('var').split('.')
        var i = 0
        const loop = (hoist) =>{
            var newHoist = hoist[variable[i]]
            if(i<variable.length){
                i++; loop(newHoist)
            }else{
                element.innerText=hoist
            }
        }
        loop(window)
    });
}
```
#### example
```html
<body>
<script></script>
<p var="user.name"></p>

<script>
    var user = {}
    user.name = 'eddy'
bindData(document.body)
</script>
</body>
```
```
# firebase_9_SDK_global_namespace
[firebase_namespace.js](https://raw.githubusercontent.com/eddyralston/utility-javascript/main/firebase_9_SDK_global_namespace/build/firebase_namespace.j "")
#### firestore(*CollectionPath*)

| Argument      | Notes |
| ----------- | ----------- |
| add({data})| add document to collection     |
| get()| get documents from collection        |

#### database(*RefPath*)

| Argument      | Notes |
| ----------- | ----------- |
| set({data})| add data to ref     |
| get()| get data from ref        |


## Example
must define a variable named firebaseConfig with your 
firebase config before including the `firebase_namespace.js` script
```javascript
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<script>
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",		//
  databaseURL: "..." 	// firebaseConfig must be defined before
};						// loading the firebase_namespace script
</script>				//
    <script src="firebase_namespace.js"></script>
</head>
<body>
    <script>
        firebase.firestore('content').get().then(data=>{
            data.forEach((doc)=>{
                console.log(doc.data())
            })
        })
    </script>
</body>
</html>
