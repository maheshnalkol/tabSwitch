import { Component, OnInit } from '@angular/core';
import { Itabs } from '../../module/Ifswitch';
import { skillData } from '../../constants/Ifswitch';

@Component({
  selector: 'app-switch-tab',
  templateUrl: './switch-tab.component.html',
  styleUrls: ['./switch-tab.component.scss']
})
export class SwitchTabComponent implements OnInit {

  skillArray:Array<Itabs>=skillData

  selectionOfskill:string='html'

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSkill(skill:string){
    this.selectionOfskill=skill
  }

}
