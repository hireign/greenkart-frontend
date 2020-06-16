# A2_KHANT_HIRENKUMAR

GreenKart is an e-commerce website that allows gardening enthusiasts to purchase gardening goods inclusive of but not limited to seeds, plants, soil, fertilizers, gardening tools, greenhouses, and pots.

* Date Created: 10 JUN 2020
* Last Modification Date: 14 JUN 2020

## Authors
*Hirenkumar Khant - hr266981@dal.ca

## Getting Started
This assignment includes front-end design for following web pages:
1. Login Page
2. Landing Page (Homepage)
3. Search Results Page
4. Contact Us Page

Corresponding Files
1. LoginPage.js
2. HomePage.js
3. SearchLandingPage.js
4. ContactUsPage.js

Color Scheme
Being a website for gardening I decided to keep the colors neutral and bright. Therefore, mainly I have used #eeeeee for the background of cards and #ffffff for the main body.

### Prerequisites

To have a local copy of this assingnment up and running on your local machine, you will first need to install the following libraries:
1. Bootstrap
2. Formik

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins
### Installing

1. Formik:
	i. For npm - on terminal run command "npm install formik --save"
	ii. For yarn - on terminal run command "yarn add formik"
2. Bootstrap:
	i. For npm - on terminal run command "npm install bootstrap"
	ii. For yarn - on terminal run command "yarn add bootstrap"

Once the code is loaded, following commands will allow to display project on browser:
1. "npm install" - installs the dependencies
2. "npm run build" - creates a deployable production build
3. "npm start" - runs to project on defined port as displayed on terminal

## Deployment

The source code for the application can be found on GitHub at "https://github.com/hireign/greenkart.git"

For deployment, Heroku connected to Github was used.
Live application can be accessed at "https://greenkart-a2.herokuapp.com/"

The links for each of the pages are as follows
Login		https://greenkart-a2.herokuapp.com/login
Homepage	https://greenkart-a2.herokuapp.com/
Search Results	https://greenkart-a2.herokuapp.com/search
Contact Us	https://greenkart-a2.herokuapp.com/contactus

## Built With

* [React.js](https://reactjs.org/docs/getting-started.html) - The web framework used
* [Bootstrap.js](https://getbootstrap.com/docs/3.4/getting-started/) - For card grids and navigation bar
* [Formik](https://jaredpalmer.com/formik/docs/overview) - For form validations

## Sources Used
REFERENCES

[1]"Free Logo Maker - Create your own logo in minutes!", Logomakr.com, 2020. [Online]. Available: https://logomakr.com/. [Accessed: 16- Jun- 2020].
[2]"Overview · Formik", Jaredpalmer.com, 2020. [Online]. Available: https://jaredpalmer.com/formik/docs/overview. [Accessed: 16- Jun- 2020].
[3]2020. [Online]. Available: https://www.pexels.com/photo/three-green-assorted-plants-in-white-ceramic-pots-776656/. [Accessed: 16- Jun- 2020].
[4]2020. [Online]. Available: https://www.pexels.com/photo/apple-devices-books-business-coffee-572056/. [Accessed: 16- Jun- 2020].
[5]2020. [Online]. Available: https://www.pexels.com/photo/notebook-with-pen-near-white-magnolia-flower-4210779/. [Accessed: 16- Jun- 2020].
[6]2020. [Online]. Available: https://www.pexels.com/photo/unpeeled-garlic-bulbs-on-white-marble-background-4197484/. [Accessed: 16- Jun- 2020].
[7]2020. [Online]. Available: https://www.pexels.com/photo/green-snake-plant-on-white-ceramic-pot-1445416/. [Accessed: 16- Jun- 2020].
[8]a. Mark Otto, "Cards", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.5/components/card/. [Accessed: 16- Jun- 2020].
[9]a. Mark Otto, "Navbar", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.5/components/navbar/. [Accessed: 16- Jun- 2020].

### LoginForm.js

Lines 9 - 52
---------------

```
<Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
         else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
          }
           else if ((values.password.length<8)
          ) {
            errors.password = 'Password must have at least 8 letters';
          }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
          <Form  style={{}}>
            <Field type="email" placeholder="Email" name="email" style={{width:300}}/>
            <br/>
            <ErrorMessage name="email" component="span" style={{color:"red"}} />
            <br/>
            <Field type="password" placeholder="Password"name="password" style={{width:300, marginTop:8}}/>
            <br/>
            <ErrorMessage name="password" component="span" style={{color:"red"}} />
            <br/>
            <button type="submit" disabled={isSubmitting} style={{ margin:'10px auto 0px auto', color:"white", backgroundColor:"grey", width:100}} >
              Login
            </button>
          </Form>
      )}
    </Formik>

```

The code above was created by adapting the code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) as shown below: 

```
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

```

- <!---How---> The code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) was implemented by Formik official documentation
- <!---Why---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was used because it simplifies the task of form validation
- <!---How---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was modified by Hirenkumar Khant

### ContactUsForm.js

Lines 9 - 65
---------------

```
<Formik
      initialValues={{ email: '', name: '', topic: '', query: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
         else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.topic) {
            errors.topic = 'Required';
        }
        if (!values.query) {
            errors.query = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
          <Form  style={{}}>
            <Field type="name" placeholder="Name" name="name" style={{width:300}}/>
            <br/>
            <ErrorMessage name="name" component="span" style={{color:"red"}} />
            <br/>
            <Field type="email" placeholder="Email" name="email" style={{width:300}}/>
            <br/>
            <ErrorMessage name="email" component="span" style={{color:"red"}} />
            <br/>
            <Field name="topic" as="select" placeholder="Topic of your query" style={{width:300}}>
                <option value="About shopping on GreenKart">About shopping on GreenKart</option>
                <option value="Previous purchase">Previous purchase</option>
                <option value="Bulk purchase">Bulk purchase</option>
            </Field>
            <br/>
            <br/>
            <Field type="query" as="textArea" rows="5" placeholder="Query" name="query" style={{width:300}}/>
            <br/>
            <ErrorMessage name="query" component="span" style={{color:"red"}} />
            <br/>
            <button type="submit" disabled={isSubmitting} style={{ margin:'10px auto 0px auto', color:"white", backgroundColor:"grey", width:100}} >
              Submit
            </button>
          </Form>
      )}
    </Formik>

```

The code above was created by adapting the code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) as shown below: 

```
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;

```
- <!---How---> The code in [Formik Overview](https://jaredpalmer.com/formik/docs/overview) was implemented by Formik official documentation
- <!---Why---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was used because it simplifies the task of form validation
- <!---How---> [Formik Overview](https://jaredpalmer.com/formik/docs/overview)'s Code was modified by Hirenkumar Khant

### ProductListing.js

Lines 7 - 188
---------------

```
<div class="row row-cols-1 row-cols-md-4">
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
  <div class="col mb-4 productlisting">
    <div class="card h-100">
      <img src={productimg} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moon Cactus</h5>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <br/>
        <h3 class="">$9.99</h3>
      </div>
    </div>
  </div>
</div>

```

The code above was created by adapting the code in [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) as shown below: 

```
<div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>

```

- [How] The code in [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) was implemented by Bootstrap
- [Why] [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) Code was used because it allowed efficient and rapid development of pages that required card views
- [How] [Bootstrap Card Group Component](https://getbootstrap.com/docs/4.5/components/card/) Code was modified by Hirenkumar Khant

### FeaturedGrid.js

Lines 9 - 50
---------------

```
<div class="row justify-content-center row-cols-1 row-cols-md-2 featuredGridDiv">
    <div class="card mb-3 featuredCard" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{width: '400px'}}>
                <img src={featuredimg1} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">Best Sellers</h3>
                </div>
        </div>
    </div>
    <div class="card mb-3 featuredCard" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{maxWidth: '400px'}}>
                <img src={featuredimg2} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">Featured</h3>
                </div>
        </div>
    </div>
    <div class="card mb-3 featuredCard" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{width: '400px'}}>
                <img src={featuredimg3} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">New Arrival</h3>
                </div>
        </div>
    </div>
    <div class="card mb-3 featuredCard" style={{maxWidth: '540px'}}>
        <div class="row no-gutters">
            <div class="col-md-4" style={{width: '400px'}}>
                <img src={featuredimg4} class="card-img" alt="..." style={{width: "400px", height: "300px"}}/>
            </div>
                <div className="card-body cbody">
                    <h3 class="card-title ctitle">Gift Ideas</h3>
                </div>
        </div>
    </div>
</div> 

```

The code above was created by adapting the code in [Bootstrap Card Component](https://getbootstrap.com/docs/4.5/components/card/) as shown below:

```
<div class="card mb-3" style="max-width: 540px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="..." class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

```
- [How] The code in [Bootstrap Card Component](https://getbootstrap.com/docs/4.5/components/card/) was implemented by Bootstrap
- [Why] [Bootstrap Card Component](https://getbootstrap.com/docs/4.5/components/card/) Code was used because it allowed efficient and rapid development of pages that required card views
- [How] [Bootstrap Card Component](https://getbootstrap.com/docs/4.5/components/card/) Code was modified by Hirenkumar Khant

### Navbar.js

Lines 6 - 61
---------------

```
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/"><img src={logo} style={{width:170}}/></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Seeds
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Plants
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tools
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Supplies
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          </div>
        </li>
      </ul>
      </div>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              My Account
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="login">Login</a>
            </div>
          </li>
        </ul>
        <a href="#" style={{color: "black"}}><i class="fas fa-shopping-cart fa-2x" style={{width:200}}></i></a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

```

- [How] The code in [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) was implemented by Bootstrap
- [Why] [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) Code was used to develop navigation bar due to features such as responsiveness and hamburger
- [How] [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) Code was modified by Hirenkumar Khant


### Footer.js

Lines 8 - 24
---------------

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src={logo} style={{width:170}}/></a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/search">Our Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contactus">Contact Us</a>
      </li>
    </ul>
  </div>
  <span style={{marginLeft:"50px", marginRight:"50px"}}>Copyright GreenKart inc 2020</span>
</nav>

```

The code above was created by adapting the code in [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

```

- [How] The code in [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) was implemented by Bootstrap
- [Why] [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) Code was used to develop navigation bar due to features such as responsiveness and hamburger
- [How] [Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/) Code was modified by Hirenkumar Khant
