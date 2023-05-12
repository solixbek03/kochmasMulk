import { BaseEntity } from 'src/commons/entities/BaseEntity';
import { Posts } from 'src/modules/posts/entities/posts.entity';
import { Column, Entity, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {

  @Column()
  lastName: string

  @Column()
  login: string
  
  @Column()
  email: string

  @Column()
  phone: string

  @Column({select: false})
  password: string

  @OneToMany(() => Posts, (posts) => posts.user)
  Posts: Posts[]


  @Column({ nullable: true, name: 'last_visit' })
  lastVisit: Date;
}
