# Formik



```bash
# Create react app
npx create-react-app formik-lecture

cd formik-lecture/


# Install dependencies
npm i formik --save
```



<br>



#### Create a form component



```jsx
//	src/compoennts/MyForm.js

import React from 'react';
import { withFormik } from 'formik'

const MyForm = () => {
  return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email"/>

        <input type="password" name="password" placeholder="Password"/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
  
export default MyForm;
```



<br>



##### Import the component in `App.js` and run the React app `npm start`

<br>



```jsx
//	src/App.js


import React from 'react';
import './App.css';

import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

export default App;

```



#### Run the app - `npm start`





#### Wrap the component in the HOC `withFormik`

```jsx
//	src/components/MyForm.js

...
		...


//	mapPropsToValues - creates a state in the form and passes it on `props.values` 
export default withFormik({
  mapPropsToValues: () => ({ email: '', password: ''})
})(MyForm)
```





#### Log the props to see the `values` property passed by formik

```jsx
//	src/compoennts/MyForm.js

import React from 'react';
import { withFormik } from 'formik'

const MyForm = (props) => {				//	<-- Pass the props
  
  console.log('props', props);	//	<-- Log the props
  const { values } = props;			//	<-- get `values` from the props
  
  return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email"/>

        <input type="password" name="password" placeholder="Password"/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

...
		...
```







#### Set the values from `values` object into the `input`s

```jsx
//	src/components/MyForm.js  

...
		...
const MyForm = (props) => {
  
	const { values } =  props;
  
 	return (
    <div>
      <form>
        <input type="email" name="email" placeholder="Email" 
          value={values.email} />	{/*   Add `value={}`   */}

        <input type="password" name="password" placeholder="Password" 
          value={values.password} />{/*   Add `value={}`   */}
        
        <button type="submit">Submit</button>
      ...
  ...
        
```







#### Add `onChange`  event listener to `input` and `onSubmit`to `form`.

```jsx
//	src/components/MyForm.js  

...
		...


const MyForm = (props) => {

  {/* DESTRUCTURED handleChange and handleSubmit  */}
  const { values, handleChange, handleSubmit } =  props;
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="email" name="email" placeholder="Email" 
          value={values.email} 
          onChange={handleChange}/>
        {/*`handleChange` is a Formik method and sets value by `name`  */}

        <input type="password" name="password" placeholder="Password" 
          value={values.password}
          onChange={handleChange}/>
        {/*`handleChange` is a Formik method and sets value by `name`  */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default withFormik({
  mapPropsToValues: () => ({ email: '', password: ''}),

  handleSubmit(values) {			//	<-- Create `handleSubmit()`
    console.log(values);
  }
```







#### Update `MyForm` to use formik's components `<Form>` and `<Field>`



```jsx
//	src/components/MyForm.js  

import { withFormik, Form, Field } from 'formik'

const MyForm = (props) => {
  
  // REMOVE deconstructed props
  // const { values, handleChange, handleSubmit } =  props;
  
  return (
    <div>
 		{/*  REMOVE `onSubmit` */}
      <Form>
        {/*  REMOVE `onChange` `value` */}
        <Field type="email" name="email" placeholder="Email"/>

        <Field type="password" name="password" placeholder="Password"/>

        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}
```









#### Add checkbox and dropdown



```jsx
//	src/components/MyForm.js  

		<Form>
        ...
  
  			...

  			{/*  ADD new Field - checkbox */}
        <Field type="checkbox" name="adult" checked={props.values.adult}/>

  
  			{/*  ADD new Field - component select */}
        <Field component="select" name="country">
          <option value="Spain">Spain</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}


export default withFormik({			//	UPDATE form state
  mapPropsToValues: () => ({ email: '', password: '', adult: false, country:"Spain"}),
```

