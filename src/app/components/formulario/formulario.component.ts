import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formMultiple: FormGroup;

  constructor() {
    this.formMultiple = new FormGroup({
      choices: new FormArray([
        new FormGroup({
          select: new FormControl(false, []),
          name: new  FormControl('', [])
        })
      ])
    });
  }

  insertSimpleChoice(): void {
   (<FormArray>this.formMultiple.get('choices')).push(
    new FormGroup({
      select: new FormControl(false, []),
      name: new  FormControl('', [])
    })
   );
  }

  ngOnInit() {
  }

}
