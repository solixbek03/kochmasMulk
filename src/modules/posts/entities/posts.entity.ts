import { BaseEntity} from 'src/commons/entities/BaseEntity';
import { User } from 'src/commons/user/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


export enum postType {
  hovli = 'hovli',
  dom = 'dom',
  hotel = 'hotel'
}

export enum statuss {
  yaxshi = 'yaxshi',
  qoniqarli = 'qoniqarli',
  qoniqarsiz = 'qoniqarsiz'
}

@Entity('posts')
export class Posts extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.Posts)
  user: User;

  @Column({ type: 'varchar', length: 300, })
  image: string;
  
  @Column({
    type: 'enum',
    enum: postType,
    default: postType.hovli,
  })
  postType: postType;

  @Column()
  region: string;

  @Column()
  district: string;

  @Column({type: "decimal", precision: 12, scale: 12, default: 0})
  location: number;

  @Column()
  gas: boolean;

  @Column()
  light: boolean

  @Column()
  hot_water: boolean;

  @Column()
  cold_water: boolean;

  @Column()
  airConditioner: boolean

  @Column()
  refrigerator: boolean;

  @Column({
    type: 'enum',
    enum: statuss,
    default: statuss.yaxshi,
  })  
  status: statuss;

  @Column()
  cost: number

  @Column()
  area: string

  @Column({nullable: true})
  allFloor?: number;

  @Column({nullable: true})
  floorOfApartment?: number

  @Column({nullable: true})
  city?: string;

  @Column({nullable: true})
  services?: string;
}




