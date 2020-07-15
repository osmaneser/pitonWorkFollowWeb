import { Injectable } from '@angular/core';
import { Enum_Importance } from '../enums/enums';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  getImportanceInfo(importance){

    let importanceInfo = '';

    switch (importance) {
      case Enum_Importance.Insignificant:
        importanceInfo = 'Önemsiz';
        break;

      case Enum_Importance.Normal:
        importanceInfo = 'Normal';
        break;

      case Enum_Importance.Significant:
        importanceInfo = 'Önemli';
        break;

      case Enum_Importance.Critical:
        importanceInfo = 'Kritik';
        break;

      default:
        break;
    }

    return importanceInfo;
  }
}
