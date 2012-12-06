Prototype.3DImageReflection
===========================

3D image reflection with javascript


Mirrored from http://ajaxorized.com/3d-image-reflection-with-javascript/ (no longer working)


 By adding a small piece of javascript to your code you can create this stunning effect. It offers a solution that is:

Not involved with Flash, or
with CSS, and
cross browser (Tested in Firefox, Opera and IE)
Preloading the images before reflection


How to use?
First, you have to include [PrototypeJS](http://prototypejs.org/download), script.aculo.us builder and the reflection script in your html:

 ```html
<script src="javascript/prototype.js" type="text/javascript"></script>
<script src="javascript/scriptaculous.js?load=builder" type="text/javascript"></script>
<script src="javascript/reflection.js" type="text/javascript"></script>
```
 
Then, create an holder div in which the image element is included:

 ```html
<div id="holder">
<img src="image.jpg" />
</div>
```
 
The last step is to create an instance of the reflection3d class by passing the id of the container

 
```javascript
new Reflect3D('holder');
```

and you get a rather nice looking reflection

![Sample Reflection Image](https://raw.github.com/jwestbrook/Prototype.3DImageReflection/master/sample.jpg)