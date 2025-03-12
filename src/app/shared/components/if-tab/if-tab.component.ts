import { Component, OnInit } from '@angular/core';
import { Itabs } from '../../module/Ifswitch';
import { skillData } from '../../constants/Ifswitch';

@Component({
  selector: 'app-if-tab',
  templateUrl: './if-tab.component.html',
  styleUrls: ['./if-tab.component.scss']
})
export class IfTabComponent implements OnInit {

  skillArr:Array<Itabs>=skillData;
  selectedskill:string=this.skillArr[0].skillName
  constructor() { }

  ngOnInit(): void {
  }
  onClickSkill(skill:string){
    this.selectedskill=skill
  }

}
