import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';



import { Router} from '@angular/router'


import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   myform:FormGroup;

  constructor(public fb:FormBuilder,private router:Router) { 
    this.myform=this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:[''],
      phone:[''],
      address:[''],
      message:['']
    })
  }






  onsubmit(myform){
   	console.log(myform.value);
   	firebase.firestore().settings({});

   	 firebase.firestore().collection("contact").add({
   	 	first_name:myform.value.first_name,
   	 	last_name:myform.value.last_name,
   	 	email:myform.value.email,
   	 	phone:myform.value.phone,
   	 	address:myform.value.address,
   	 	message:myform.value.message
   	 }).then((data)=>{
   	 	console.log(data);
   	 }).catch((error)=>{
   	 	console.log(error);
   	 })


  }
 
  ngOnInit(): void {
  }


}
