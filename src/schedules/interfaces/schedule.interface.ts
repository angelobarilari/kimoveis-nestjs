import { Property } from '../../properties/entities/propety.entity';
import { User } from '../../users/entities/user.entity';

export class Schedule {
  id: string;
  date: string;
  hour: string;
  property: Property;
  user: User;
}
