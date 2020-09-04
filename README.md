# ng-international-mobile
 
# Documentation


<h3> Step 1: Installation </h3> 
Npm package installation
  
        npm install ng2-tel-input intl-tel-input --save
        
<h3 Step 2:  </h3>        

<h6>Adding External Files:<h6>

<ul>
  <li>Include intlTelInput.css in "styles" at your angular.json file :</li>
  
         "styles": [
            ...
            "node_modules/intl-tel-input/build/css/intlTelInput.css",
            ...
        ]
  
  <li> Include intlTelInput.min.js, utils.js in "scripts" at your angular.json file :</li>
  
         "scripts": [
            ...
            "node_modules/intl-tel-input/build/js/intlTelInput.min.js"
            ...
        ]  
</ul>


<h3> Step 3: </h3>
<h6>Importing  Ng2TelInputModule Module  into your AppModule </h6>

         import {Ng2TelInputModule} from 'ng2-tel-input';
         
<h6>Now, We are good to go and start using in app</h6>


<h6> In order to use this directive, you need to add "ng2TelInput" directive with "[ng2TelInputOptions]" options to your text field. For example, </h6>
<h6>example.component.html</h6>

          <input type="text"
          ng2TelInput
          [ng2TelInputOptions]="{initialCountry: 'in'}"
          (hasError)="hasError($event)"
          (ng2TelOutput)="getNumber($event)"
          (intlTelInputObject)="telInputObject($event)"
          (countryChange)="onCountryChange($event)" />

<h6>example.component.ts</h6>

    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.css']
    })
    export class ExampleComponent implements OnInit {

      constructor() { }

      ngOnInit() {
      }
      
      
             hasError(event){
             console.log("Has Error: ",event)
             }
             
             getNumber(event){
             console.log("getNumber: ",event)

             }
           
             telInputObject(event){
             console.log("telInputObject: ",event)

             }
           
             onCountryChange(event){
             console.log("onCountryChange: ",event)

             }
           

        }


