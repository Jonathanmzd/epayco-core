import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, default: '1000000000' })
  document: string;

  @Column({default: 'nombre cliente' })
  name: string;

  @Column({ unique: true, default: 'emailcliente@gmail.com' })
  email: string;

  @Column({ unique: true, default: '3172345678' })
  phone: string;

  @Column({ default: 0 })
  balance: number;
}
