import { Enum_Importance, Enum_Status } from './../enums/enums';

export class Work{
  id:number;
  name:String;
  description:String;
  status:Enum_Status;
  workDate:Date;
  startDate:Date;
  endDate:Date;
  importance:Enum_Importance;
}
