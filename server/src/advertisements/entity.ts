import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import {  Length, MinLength, IsEmail, } from 'class-validator'

@Entity()
export default class Advertisement extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number


  @MinLength(5)
  @Column('text', {nullable:false})
  title: string



  @MinLength(10)
  @Column('text', {nullable:false})
  description: string



  @Column('text', {nullable:true})
  pictureURL: string

  @MinLength(1)
  @Column('text', {nullable:false})
  price: number


  @IsEmail()
  @MinLength(5)
  @Column('text', {nullable:false})
  email: string


  @Length(10)
  @Column('text', {nullable:false})
  phoneNumber: number

}