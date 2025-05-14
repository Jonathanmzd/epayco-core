import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '1' })
  document: string;

  @Column({ default: 'token_default' })
  token: string;

  @Column()
  amount: number;

  @Column({ default: false })
  confirmed: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
