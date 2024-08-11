import { Component } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { Iclothes } from '../iclothes';
import { log } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor (private _ClothesService : ClothesService){
}
clothes:Iclothes[]=[]
ngOnInit():void {
  this._ClothesService.getCLothes().subscribe({
    next:(res)=>{
      this.clothes = res;
      // console.log(res);
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
