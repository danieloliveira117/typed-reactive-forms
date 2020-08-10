import { AddressModel } from './address.model';
import { SkillModel } from './skill.model';

export interface UserModel {
  firstName: string;

  address: AddressModel;

  skills?: SkillModel[];
}
